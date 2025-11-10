import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="container mx-auto min-h-screen flex items-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-2 text-gradient">
            {t.heroTitle}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground/90">
            {t.heroSubtitle}
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-xl">
            {t.heroDescription}
          </p>
          <div className="flex justify-center md:justify-start">
            <a href="#projects">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
              >
                {t.heroButton}
              </Button>
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img 
            src="/hero-photo.jpg" 
            alt="Garri Gelfers - n8n Automation Expert"
            className="rounded-lg shadow-2xl shadow-primary/20 max-w-sm w-full md:max-w-md object-cover border-2 border-primary/30 hover:border-primary/50 transition-all"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;