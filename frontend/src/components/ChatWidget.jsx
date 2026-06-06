/**
 * ChatWidget Component
 * 
 * Renders a floating chat interface for the NRAI Copilot.
 * Manages local chat history state and handles asynchronous 
 * communication with the FastAPI RAG backend.
 */
import React, { useState } from "react";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  Database,
} from "lucide-react";

export default function ChatWidget() {
  // UI State: Toggles the visibility of the main chat window
  const [isOpen, setIsOpen] = useState(false);

  // Data State: Stores the conversation history. Initializes with a system welcome message.
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "NRAI Enterprise Systems initialized. Secure connection established. How can I assist with your document retrieval today?",
    },
  ]);

  // Input State: Tracks the user's current keystrokes in the text box
  const [input, setInput] = useState("");
  
  // Network State: Disables the input field and shows a loading indicator while fetching
  const [loading, setLoading] = useState(false);

  /**
   * Handles the submission of a new user message.
   * Updates the UI optimistically, then pings the RAG backend for the LLM response.
   */
  const handleSend = async (e) => {
    e.preventDefault();

    // Prevent sending empty or whitespace-only messages
    if (!input.trim()) return;

    const userMessage = input;

    // 1. Optimistic UI Update: Instantly show the user's message in the chat
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    // 2. Reset input and trigger loading state
    setInput("");
    setLoading(true);

    try {
      // Dynamic API URL: Prioritizes Vercel environment variables, falls back to Render production URL for mobile/global access
      const baseUrl = import.meta.env.REACT_API_URL || "https://nrai-group-company.onrender.com";
      
      const response = await fetch(`${baseUrl}/query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: userMessage,
        }),
      });

      const data = await response.json();

      // 3. Append the LLM's response to the conversation history
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.answer,
        },
      ]);
    } catch (error) {
      console.error("API Error:", error);

      // 4. Graceful Error Handling: Notify the user if the backend is asleep or unreachable
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Unable to connect to NRAI RAG API.",
        },
      ]);
    }

    // 5. Re-enable the input field
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* FLOATING ACTION BUTTON */}
      {/* Hides itself when the chat window is open. Triggers setIsOpen on click. */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? "hidden" : "flex"
        } items-center justify-center w-14 h-14 bg-amber-500 hover:bg-amber-400 text-slate-900 rounded-full shadow-2xl transition-all duration-300 hover:scale-110`}
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* MAIN CHAT WINDOW */}
      {/* Uses Tailwind dynamic classes to hide/show based on the isOpen state */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col w-[350px] sm:w-[400px] h-[500px] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden`}
      >
        
        {/* HEADER SECTION */}
        <div className="bg-slate-950 px-4 py-4 border-b border-slate-800 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Database className="h-5 w-5 text-amber-500" />
            <div>
              <h3 className="text-white font-bold text-sm">
                NRAI Copilot
              </h3>
              <p className="text-xs text-slate-400">
                Enterprise RAG Search
              </p>
            </div>
          </div>

          {/* Close Window Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* MESSAGE HISTORY CONTAINER */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-900/50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              // Dynamically swap flex direction based on who is speaking (user = right, assistant = left)
              className={`flex gap-3 ${
                msg.role === "user" ? "flex-row-reverse" : ""
              }`}
            >
              {/* Avatar Icon */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  msg.role === "user"
                    ? "bg-amber-500 text-slate-900"
                    : "bg-slate-800 text-amber-500 border border-slate-700"
                }`}
              >
                {msg.role === "user" ? (
                  <User className="h-4 w-4" />
                ) : (
                  <Bot className="h-4 w-4" />
                )}
              </div>

              {/* Message Bubble */}
              <div
                className={`p-3 rounded-lg max-w-[80%] text-sm ${
                  msg.role === "user"
                    ? "bg-amber-500 text-slate-900 rounded-tr-none"
                    : "bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* LOADING INDICATOR: Only renders when network request is active */}
          {loading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-800 text-amber-500 border border-slate-700">
                <Bot className="h-4 w-4" />
              </div>
              <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-sm">
                Searching knowledge base...
              </div>
            </div>
          )}
        </div>

        {/* INPUT FORM SECTION */}
        <div className="p-4 bg-slate-950 border-t border-slate-800">
          <form onSubmit={handleSend} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search internal documents..."
              className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />

            {/* Disable button to prevent spam-clicking while waiting for API */}
            <button
              type="submit"
              disabled={loading}
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 p-2 rounded-lg disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}