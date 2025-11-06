import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Сделаем появление фона чуть раньше
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Список ссылок для удобства
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? "border-b border-primary/20 bg-background/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Пустой div слева для баланса, вместо логотипа */}
        <div className="w-20"></div>

        {/* Навигационные ссылки в центре */}
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              // Применяем новый градиентный стиль
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
    </header>
  );
};

export default Header;