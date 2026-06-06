
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from langchain_ollama import ChatOllama, OllamaEmbeddings
from langchain_chroma import Chroma

app = FastAPI(title="NRAI Enterprise RAG API")

# Add your Vercel URL here
origins = [
    "https://your-project-name.vercel.app", 
    "https://nrai-group-company.onrender.com", # for local testing
]

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
llm = ChatOllama(
    model="qwen2.5:0.5b",
    temperature=0
)

embeddings = OllamaEmbeddings(
    model="nomic-embed-text"
)

vectorstore = Chroma(
    persist_directory="./chroma_db",
    embedding_function=embeddings
)


class QueryRequest(BaseModel):
    query: str


@app.post("/query")
async def rag_query(request: QueryRequest):
    try:

        print(f"\nQuestion: {request.query}")

        docs_with_scores = vectorstore.similarity_search_with_relevance_scores(
            request.query,
            k=4
        )

        print("\n===== RETRIEVAL RESULTS =====")

        for i, (doc, score) in enumerate(docs_with_scores):
            print(f"\nChunk {i+1}")
            print(f"Score: {score}")
            print(doc.page_content[:300])

        print("\n=============================")

        if not docs_with_scores:
            return {
                "answer": "I could not find that information in the NRAI knowledge base."
            }

        top_score = docs_with_scores[0][1]

        print(f"\nTop Score: {top_score}")

        # Threshold
        if top_score < 0.25:
            return {
                "answer": "I could not find that information in the NRAI knowledge base."
            }

        context = "\n\n".join(
            [doc.page_content for doc, score in docs_with_scores]
        )

        prompt = f"""
You are the official AI Assistant for NRAI Group.

Answer ONLY using the provided context.

Rules:
- Do not guess.
- Do not invent information.
- Do not use outside knowledge.

If the answer is not present in the context, reply:

I could not find that information in the NRAI knowledge base.

Context:
{context}

Question:
{request.query}
"""

        print("\nCalling LLM...")

        response = llm.invoke(prompt)

        print("LLM Response:", response)

        if hasattr(response, "content"):
            answer = response.content
        else:
            answer = str(response)

        return {
            "answer": answer,
            "relevance_score": round(top_score, 4)
        }

    except Exception as e:

        import traceback

        print("\n========== ERROR ==========")
        traceback.print_exc()
        print("===========================\n")

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        app,
        host="0.0.0.0",
        port=8000
    )

