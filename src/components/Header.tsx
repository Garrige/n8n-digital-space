import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const navLinks: Array<{ href: string; label: string }> = [
    { href: '/', label: t.home },
    { href: '#projects', label: t.projects },
    { href: '#contact', label: t.contact },
  ];

  const languages: Array<{ code: Language; name: string; flag: string }> = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'lv', name: 'Latviešu', flag: '🇱🇻' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-primary/20 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <nav className="flex items-center gap-3 md:gap-8">
          {navLinks.map((link) => {
            return (
              <a // <--- Здесь был пропущен открывающий тег <a>
                key={link.href}
                href={link.href}
                className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold text-sm md:text-lg transition-all duration-300 hover:brightness-125"
              >
                {link.label}
              </a>
            );
          })}
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="gap-1 hover:bg-primary/10 hover:text-primary p-2"
            >
              <Globe className="h-4 w-4" />
              <span className="text-base">
                {languages.find((l) => l.code === language)?.flag}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            {languages.map((lang) => {
              return (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`cursor-pointer ${language === lang.code ? 'bg-primary/10' : ''}`}
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;