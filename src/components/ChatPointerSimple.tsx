import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ChatPointerSimpleProps {
  onDismiss?: () => void;
}

const ChatPointerSimple = ({ onDismiss }: ChatPointerSimpleProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has dismissed it before
    const dismissed = localStorage.getItem('chatPointerDismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show pointer after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Auto-hide after 20 seconds
    const autoHideTimer = setTimeout(() => {
      handleDismiss();
    }, 23000);

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
      {/* Desktop version - points to chat button */}
      <div 
        className="fixed bottom-28 right-28 z-[45] hidden lg:block"
        style={{
          animation: 'fadeInUp 0.8s ease-out'
        }}
      >
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute -top-3 -right-3 bg-white rounded-full p-1.5 shadow-lg hover:bg-gray-100 transition-all hover:scale-110 z-10"
          aria-label="Close"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        {/* Message bubble */}
        <div className="relative">
          {/* Text in bubble */}
          <div 
            className="relative bg-gradient-to-r from-primary to-accent px-5 py-3 rounded-2xl shadow-2xl mb-2 border-2 border-white"
            style={{
              animation: 'pulse 2s ease-in-out infinite'
            }}
          >
            <p className="text-base font-bold text-white whitespace-nowrap">
              💬 Ask me anything!
            </p>
            <p className="text-sm text-white/90">
              Try the AI assistant →
            </p>
          </div>

          {/* Arrow pointing down-right to chat button */}
          <svg
            width="200"
            height="120"
            viewBox="0 0 200 120"
            className="absolute -bottom-6 -right-8"
            style={{
              filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15))'
            }}
          >
            {/* Main curved arrow line */}
            <path
              d="M 20 10 Q 60 30, 100 60 Q 120 75, 140 95"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              strokeDasharray="200"
              strokeDashoffset="200"
              style={{
                animation: 'drawArrow 1.5s ease-out 0.5s forwards'
              }}
            />
            
            {/* Arrow head */}
            <path
              d="M 140 95 L 132 90 L 135 100 Z"
              fill="currentColor"
              className="text-primary"
              style={{
                animation: 'fadeIn 0.5s ease-in 2s forwards',
                opacity: 0
              }}
            />

            {/* Shadow line for hand-drawn effect */}
            <path
              d="M 22 12 Q 62 32, 102 62 Q 122 77, 142 97"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary opacity-40"
              strokeDasharray="200"
              strokeDashoffset="200"
              style={{
                animation: 'drawArrow 1.5s ease-out 0.6s forwards'
              }}
            />
          </svg>
        </div>
      </div>

      {/* Mobile version - simpler, appears above chat button */}
      <div 
        className="fixed bottom-28 right-6 z-[45] lg:hidden"
        style={{
          animation: 'fadeInUp 0.8s ease-out'
        }}
      >
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-lg z-10"
          aria-label="Close"
        >
          <X className="w-3 h-3 text-gray-600" />
        </button>

        <div 
          className="bg-gradient-to-r from-primary to-accent px-4 py-2 rounded-xl shadow-xl"
          style={{
            animation: 'pulse 2s ease-in-out infinite'
          }}
        >
          <p className="text-sm font-bold text-white">
            💬 Try AI chat!
          </p>
        </div>

        {/* Simple arrow pointing down */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="absolute left-1/2 -translate-x-1/2 -bottom-8"
        >
          <path
            d="M 20 5 L 20 30 M 20 30 L 15 25 M 20 30 L 25 25"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
            strokeDasharray="60"
            strokeDashoffset="60"
            style={{
              animation: 'drawArrow 1s ease-out 0.5s forwards'
            }}
          />
        </svg>
      </div>

      {/* Animations */}
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

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </>
  );
};

export default ChatPointerSimple;
