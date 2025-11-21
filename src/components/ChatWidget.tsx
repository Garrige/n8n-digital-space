import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";
import garriLogo from "@/assets/garri-logo.png";

interface Message {
  text: string;
  isBot: boolean;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I'm Garri Gelfers' AI assistant. How can I help you?", isBot: true },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(`session-${Date.now()}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Rate limiting
  const [messageTimestamps, setMessageTimestamps] = useState<number[]>([]);
  const MAX_MESSAGES = 10;
  const TIME_WINDOW = 5 * 60 * 1000; // 5 minutes

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const checkRateLimit = (): boolean => {
    const now = Date.now();
    const recentMessages = messageTimestamps.filter((ts) => now - ts < TIME_WINDOW);

    if (recentMessages.length >= MAX_MESSAGES) {
      return false;
    }

    setMessageTimestamps([...recentMessages, now]);
    return true;
  };

  const handleSend = async () => {
    if (!currentInput.trim() || isLoading) return;

    // Check rate limit
    if (!checkRateLimit()) {
      setMessages((prev) => [
        ...prev,
        {
          text:
            "You're sending too many messages. Please wait a few minutes or contact me directly: garrigelfers@gmail.com",
          isBot: true,
        },
      ]);
      setCurrentInput("");
      return;
    }

    const userMessage = currentInput;

    setMessages((prev) => [...prev, { text: userMessage, isBot: false }]);
    setCurrentInput("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://garrige.app.n8n.cloud/webhook/ba3120bd-a4d5-43ce-80f0-9d294f380bf2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chatInput: userMessage,
            sessionId: sessionId,
            timestamp: new Date().toISOString(),
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const textResponse = await response.text();
      console.log("Raw response from n8n:", textResponse);

      let aiResponse = "Sorry, couldn't get a proper response.";

      try {
        const data = JSON.parse(textResponse);
        aiResponse = data.response || textResponse;
      } catch (e) {
        aiResponse = textResponse;
      }

      setMessages((prev) => [
        ...prev,
        {
          text: aiResponse,
          isBot: true,
        },
      ]);
    } catch (error) {
      console.error("Error communicating with AI:", error);
      setMessages((prev) => [
        ...prev,
        {
          text:
            "Sorry, an error occurred. Please try again later or contact me directly: garrigelfers@gmail.com",
          isBot: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Подсказка + стрелка (только когда чат закрыт, только на десктопе) */}
      {!isOpen && (
        <div className="hidden md:flex fixed bottom-28 right-10 z-40 items-center gap-3 pointer-events-none">
          {/* Пузырь с текстом */}
          <div className="rounded-2xl border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-md shadow-lg">
            <p className="text-sm text-[#C5A572]">
              Поговори с моим AI 😉
            </p>
          </div>

          {/* Стрелка к виджету */}
          <div className="w-10 h-10">
            <svg
              viewBox="0 0 50 50"
              className="w-full h-full text-[#C5A572]"
            >
              <path
                d="M5 5 L42 42"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M26 42 H42 V26"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Кнопка чата */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-20 w-20 md:h-24 md:w-24 rounded-full shadow-xl bg-white hover:bg-slate-100 z-50 flex items-center justify-center"
          size="icon"
        >
          <MessageCircle className="h-10 w-10 md:h-12 md:w-12 text-primary" />
        </Button>
      )}

      {/* Окно чата */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-card border border-border
          sm:inset-auto sm:bottom-6 sm:right-6
          sm:h-[620px] sm:w-[480px]
          md:h-[680px] md:w-[520px]
          lg:h-[740px] lg:w-[580px]
          sm:rounded-lg sm:shadow-2xl"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent p-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <img src={garriLogo} alt="Garri Gelfers" className="w-10 h-10 rounded-full" />
              <div>
                <h3 className="font-semibold text-white">Garri Gelfers AI</h3>
                <p className="text-xs text-white/80">{isLoading ? "Typing..." : "Online"}</p>
              </div>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-background to-card">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 whitespace-pre-wrap ${
                    msg.isBot
                      ? "bg-slate-700 text-slate-100"
                      : "bg-gradient-to-r from-primary to-accent text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-700 rounded-lg p-3">
                  <div className="flex gap-1">
                    <div
                      className="w-2 h-2 bg-primary rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-primary rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-primary rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-card flex-shrink-0">
            <div className="flex gap-2">
              <Input
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                disabled={isLoading}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
