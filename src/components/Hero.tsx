// src/components/Hero.tsx - ПОЛНАЯ ЗАМЕНА

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="container mx-auto min-h-screen flex items-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Левая часть: Текст */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Garri Gelfers
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8">
            AI Automation Engineer | n8n Specialist | Building Intelligent Solutions
          </p>
          <div className="flex justify-center md:justify-start">
            <a href="#projects">
              <Button size="lg">
                View My Work
              </Button>
            </a>
          </div>
        </div>

        {/* Правая часть: Ваше фото */}
        <div className="flex justify-center">
          <img 
            src="/hero-photo.jpg" 
            alt="Photo of Garri Gelfers"
            className="rounded-lg shadow-2xl max-w-sm w-full md:max-w-md object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;