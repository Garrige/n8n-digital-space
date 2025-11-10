import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-card/50 border-t border-primary/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-10">
          
          <div>
            <h3 className="font-bold text-xl mb-3 text-gradient">{t.contact}</h3>
            <p className="text-foreground/70">
              {t.footerText}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-3 text-foreground">Contact</h3>
            <ul className="text-foreground/70 space-y-3">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:garrigelfers@gmail.com" className="hover:text-primary transition-colors">
                  garrigelfers@gmail.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Riga, Latvia</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-3 text-foreground">Connect</h3>
            <ul className="text-foreground/70 space-y-3">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Linkedin className="h-4 w-4 text-primary" />
                <a 
                  href="https://www.linkedin.com/in/garri-gelfers-5a711637a/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-primary/20 pt-6 text-center text-foreground/50 text-sm">
          <p>&copy; {currentYear} Garri Gelfers. {t.footerRights}</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;