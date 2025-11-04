// src/components/Contact.tsx - ВЕРСИЯ БЕЗ EMAILJS, С ПРОСТЫМИ ССЫЛКАМИ

// Этот компонент отвечает за всю секцию "Get in Touch"
const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Get In Touch</h2>
        <p className="text-center text-slate-400 mb-12">
          Have a project in mind? Let's work together to build something amazing.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Левая часть: Теперь здесь кнопки-ссылки */}
          <div className="bg-slate-800/50 p-8 rounded-lg flex flex-col justify-center items-center h-full">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-6">Ready to start a project?</h3>
              <div className="flex flex-col gap-4 w-full max-w-xs">
                {/* Кнопка для отправки Email */}
                <a 
                  href="mailto:garrigelfers@gmail.com" 
                  className="bg-primary text-white font-bold py-3 px-6 rounded-lg text-center hover:bg-primary/90 transition-colors"
                >
                  Send an Email
                </a>
                
                {/* Кнопка для LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/garri-gelfers-5a711637a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-700 text-white font-bold py-3 px-6 rounded-lg text-center hover:bg-slate-600 transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Правая часть: Контакты (остается без изменений) */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-lg">
                <h3 className="font-bold text-lg">Email</h3>
                <p className="text-slate-400">garrigelfers@gmail.com</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg">
                <h3 className="font-bold text-lg">Phone</h3>
                <p className="text-slate-400">+371 27782827</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg">
                <h3 className="font-bold text-lg">Location</h3>
                <p className="text-slate-400">Riga, Latvia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;