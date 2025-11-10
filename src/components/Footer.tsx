// src/components/Footer.tsx - ПОЛНОСТЬЮ ЗАМЕНИТЬ

// Этот компонент отвечает за футер (подвал) сайта

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-900/50 border-t border-slate-800 mt-20">
      <div className="container mx-auto px-4 py-12">
        
        {/* Верхняя часть с контактами */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-10">
          
          <div>
            <h3 className="font-bold text-lg mb-2">Get In Touch</h3>
            <p className="text-slate-400">
              Ready to automate your business or build an intelligent solution? Let's connect.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Contact Details</h3>
            <ul className="text-slate-400 space-y-2">
              <li>
                <a href="mailto:garrigelfers@gmail.com" className="hover:text-white transition-colors">
                  garrigelfers@gmail.com
                </a>
              </li>
              <li>
                <span></span>
              </li>
              <li>
                <span>Riga, Latvia</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Connect</h3>
            <ul className="text-slate-400 space-y-2">
              <li>
                <a 
                  href="https://www.linkedin.com/in/garri-gelfers-5a711637a/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              {/* Если у вас есть GitHub, можно добавить и его */}
              {/*
              <li>
                <a href="YOUR_GITHUB_URL" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              */}
            </ul>
          </div>

        </div>

        {/* Нижняя часть с копирайтом */}
        <div className="border-t border-slate-800 pt-6 text-center text-slate-500 text-sm">
          <p>&copy; {currentYear} Garri Gelfers. All Rights Reserved.</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;