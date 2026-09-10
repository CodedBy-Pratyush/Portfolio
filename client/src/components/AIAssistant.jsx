import { useState } from "react";
import axios from "axios";
import {
  Bot,
  Send,
  FolderOpen,
  User,
  Code2,
  BarChart3,
  ArrowRight,
  Zap,
} from "lucide-react";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://portfolio-4snb.onrender.com/api/ai/chat";

const SUGGESTED_QUESTIONS = [
  { text: "What projects has Pratyush built?", icon: FolderOpen },
  { text: "Tell me about CompilerX.", icon: User },
  { text: "What technologies does he use?", icon: Code2 },
  { text: "How does he use multiple AI models?", icon: BarChart3 },
];

// A realistic preview conversation shown by default, so visitors instantly
// understand what this AI can do before they type anything.
const INITIAL_MESSAGES = [
  { role: "user", text: "Tell me about CompilerX" },
  {
    role: "ai",
    text: "CompilerX is an AI-powered multi-language online compiler supporting 8+ programming languages. It uses Groq for fast syntax feedback and Gemini for deeper code explanations and optimization advice.",
  },
];

function AIAssistant() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [provider, setProvider] = useState("groq");
  const [loading, setLoading] = useState(false);

  async function sendMessage(text) {
    if (!text.trim() || loading) return;

    const userMessage = { role: "user", text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(API_URL, {
        message: text,
        provider: provider,
      });

      const aiMessage = { role: "ai", text: response.data.reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage = {
        role: "ai",
        text: "Sorry, I couldn't reach the AI right now. Please try again in a moment.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setLoading(false);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    sendMessage(input);
  }

  function handleSuggestedClick(question) {
    sendMessage(question);
  }

  return (
    <div id="ai" className="ai-panel-wrap">
      <div className="ai-blob" aria-hidden="true"></div>

      <div className="ai-panel">
        <div className="ai-header">
          <div className="ai-icon-circle" aria-hidden="true">
            <Bot />
          </div>
          <div className="ai-header-text">
            <div className="ai-header-top">
              <h2 className="ai-title">Ask Pratyush's AI</h2>
              <span className="ai-powered-badge">
                <Zap size={12} /> Powered by AI
              </span>
            </div>
            <p className="ai-subtitle">
              Your AI guide to my projects, skills, experience and technical
              background.
            </p>
          </div>
        </div>

        <div className="chat-window">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.role === "user" ? "bubble-row row-user" : "bubble-row"
              }
            >
              {msg.role === "ai" && (
                <div className="bubble-avatar" aria-hidden="true">
                  <Bot />
                </div>
              )}
              <div
                className={
                  msg.role === "user" ? "bubble bubble-user" : "bubble bubble-ai"
                }
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="bubble-row">
              <div className="bubble-avatar" aria-hidden="true">
                <Bot />
              </div>
              <div className="bubble bubble-ai">Thinking...</div>
            </div>
          )}
        </div>

        <form className="chat-form" onSubmit={handleFormSubmit}>
          <input
            className="chat-input"
            type="text"
            placeholder="Ask about my projects, skills, education..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="chat-send"
            disabled={loading}
            aria-label="Send message"
          >
            <Send />
          </button>
        </form>

        <div className="provider-row">
          <label htmlFor="provider" className="provider-label">
            AI Model
          </label>
          <select
            id="provider"
            className="provider-select"
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
          >
            <option value="mistral">NVDIA-gpt</option>
            <option value="groq">Groq</option>
            <option value="gemini">Gemini</option>
          </select>
        </div>

        <div className="suggested-grid">
          {SUGGESTED_QUESTIONS.map((question, index) => {
            const Icon = question.icon;
            return (
              <button
                key={index}
                className="suggested-card"
                onClick={() => handleSuggestedClick(question.text)}
              >
                <span className="suggested-icon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="suggested-text">{question.text}</span>
                <ArrowRight className="suggested-arrow" aria-hidden="true" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AIAssistant;
