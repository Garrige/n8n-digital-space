import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ChatPointerSimpleProps {
  onDismiss?: () => void;
}

const ChatPointerSimple = ({ onDismiss }: ChatPointerSimpleProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('chatPointerDismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const autoHideTimer = setTimeout(() => {
      handleDismiss();
    }, 15000);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoHideTimer);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('chatPointerDismissed', 'true');
    if (onDismiss) onDismiss();
  };

  if (isDismissed || !isVisible) return null;

  return (
    <>
      {/* Контейнер */}
      <div 
        className="fixed bottom-32 right-32 z-[9999] hidden lg:block"
        style={{
          animation: 'fadeInUp 0.8s ease-out'
        }}
      >
        {/* Кнопка закрытия */}
        <button
          onClick={handleDismiss}
          className="absolute -top-6 -right-6 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all hover:scale-110"
          aria-label="Close"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        {/* Hand-drawn стиль стрелка и текст */}
        <div className="relative">
          {/* Текст в рамке */}
          <div 
            className="relative bg-white px-6 py-3 rounded-lg shadow-xl border-2 border-primary mb-2"
            style={{
              animation: 'wiggle 3s ease-in-out infinite'
            }}
          >
            <p className="text-lg font-bold text-primary whitespace-nowrap">
              Ask me a question!
            </p>
            <p className="text-sm text-gray-600">
              Chat with AI agent →
            </p>
          </div>

          {/* Hand-drawn стиль стрелка SVG */}
          <svg
            width="250"
            height="140"
            viewBox="0 0 250 140"
            className="absolute -bottom-8 -right-12"
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
            }}
          >
            {/* Главная изогнутая линия */}
            <path
              d="M 20 10 Q 80 30, 140 70 Q 160 85, 180 110"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              strokeDasharray="250"
              strokeDashoffset="250"
              style={{
                animation: 'drawArrow 2s ease-out forwards'
              }}
            />
            
            {/* Наконечник стрелки */}
            <path
              d="M 180 110 L 170 105 L 175 115 Z"
              fill="currentColor"
              className="text-primary"
              style={{
                animation: 'fadeIn 0.5s ease-in 2s forwards',
                opacity: 0
              }}
            />

            {/* Hand-drawn эффект - вторая линия */}
            <path
              d="M 22 12 Q 82 32, 142 72 Q 162 87, 182 112"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary opacity-30"
              strokeDasharray="250"
              strokeDashoffset="250"
              style={{
                animation: 'drawArrow 2s ease-out 0.1s forwards'
              }}
            />
          </svg>
        </div>
      </div>

      {/* CSS анимации */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes drawArrow {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg) translateY(0);
          }
          25% {
            transform: rotate(-2deg) translateY(-2px);
          }
          50% {
            transform: rotate(0deg) translateY(0);
          }
          75% {
            transform: rotate(2deg) translateY(-2px);
          }
        }
      `}</style>
    </>
  );
};

export default ChatPointerSimple;
