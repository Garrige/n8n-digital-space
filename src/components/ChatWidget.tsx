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
    { text: "Привет! Я AI ассистент Garri Gelfers. Чем могу помочь?", isBot: true }
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(`session-${Date.now()}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!currentInput.trim() || isLoading) return;

    const userMessage = currentInput;
    
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setCurrentInput("");
    setIsLoading(true);

    try {
      const response = await fetch("https://garrige.app.n8n.cloud/webhook/ba3120bd-a4d5-43ce-80f0-9d294f380bf2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatInput: userMessage,
          sessionId: sessionId,
          timestamp: new Date().toISOString(),
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Упрощенная и надежная обработка JSON ответа
      const data = await response.json();
      const aiResponse = data.response || "Извините, не удалось получить корректный ответ.";
      
      setMessages(prev => [...prev, { 
        text: aiResponse, 
        isBot: true 
      }]);

    } catch (error) {
      console.error("Error communicating with AI:", error);
      setMessages(prev => [...prev, { 
        text: "Извините, произошла ошибка. Попробуйте позже или свяжитесь напрямую: garrigelfers@gmail.com", 
        isBot: true 
      }]);
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
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 z-50"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        // ИЗМЕНЕНИЕ 1: Адаптивность для мобильных
        <div className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-card border border-border sm:inset-auto sm:bottom-6 sm:right-6 sm:h-[500px] sm:w-96 sm:rounded-lg sm:shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent p-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <img src={garriLogo} alt="Garri Gelfers" className="w-10 h-10 rounded-full" />
              <div>
                <h3 className="font-semibold text-white">Garri Gelfers AI</h3>
                <p className="text-xs text-white/80">{isLoading ? "Печатает..." : "Онлайн"}</p>
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
              <div
                key={idx}
                className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    // ИЗМЕНЕНИЕ 2: Улучшенный цветовой контраст
                    msg.isBot
                      ? "bg-slate-700 text-slate-100" 
                      : "bg-gradient-to-r from-primary to-accent text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {/* Анимация загрузки */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-700 rounded-lg p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
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
                placeholder="Напишите сообщение..."
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