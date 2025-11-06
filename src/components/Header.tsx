// src/components/Header.tsx - ПОЛНАЯ ЗАМЕНА (финальная версия)

const Header = () => {
  // Теперь "Contact" - это часть общей навигации
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-primary/20 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-center px-4">
        
        {/* Вся навигация теперь в одном блоке и идеально по центру */}
        <nav className="flex items-center gap-4 md:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold text-lg transition-all duration-300 hover:brightness-125"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
      </div>
    </footer>
  );
};

export default Header;