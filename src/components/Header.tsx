// src/components/Header.tsx - ПОЛНАЯ ЗАМЕНА (с исправлением)

import { Button } from "@/components/ui/button";

const Header = () => {
  // Список навигационных ссылок для удобства
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-primary/20 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Пустой div слева для баланса, так как мы убрали логотип */}
        <div className="w-20"></div>

        {/* Навигационные ссылки в центре */}
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            // --- ИСПРАВЛЕНИЕ: Добавлен уникальный атрибут key={link.href} ---
            <a
              key={link.href} // <-- ВОТ ИСПРАВЛЕНИЕ
              href={link.href}
              className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold text-lg transition-all duration-300 hover:brightness-125"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Кнопка "Contact" справа */}
        <div>
          <a href="#contact">
            <Button>Contact</Button>
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Header;