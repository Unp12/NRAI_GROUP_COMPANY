import os
import shutil
from uuid import uuid4

from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_chroma import Chroma
from langchain_ollama import OllamaEmbeddings

DATA_DIR = "./data"
PERSIST_DIR = "./chroma_db"


def ingest_data():

    if os.path.exists(PERSIST_DIR):
        shutil.rmtree(PERSIST_DIR)

    documents = []

    for file in os.listdir(DATA_DIR):

        if file.endswith(".pdf"):

            pdf_path = os.path.join(DATA_DIR, file)

            print(f"Loading: {file}")

            loader = PyPDFLoader(pdf_path)
            docs = loader.load()

            for doc in docs:
                doc.metadata.update(
                    {
                        "source": "business",
                        "file_name": file
                    }
                )

            documents.extend(docs)

    if not documents:
        print("No PDF files found.")
        return

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=500,
        chunk_overlap=50
    )

    chunks = splitter.split_documents(documents)

    print(f"Created {len(chunks)} chunks")

    embeddings = OllamaEmbeddings(
        model="nomic-embed-text"
    )

    ids = [str(uuid4()) for _ in chunks]

    Chroma.from_documents(
        documents=chunks,
        embedding=embeddings,
        ids=ids,
        persist_directory=PERSIST_DIR
    )

    print("Ingestion completed successfully")


if __name__ == "__main__":
    ingest_data()