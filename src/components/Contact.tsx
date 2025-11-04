// src/components/Contact.tsx - ФИНАЛЬНАЯ ВЕРСИЯ С ВАШИМИ ДАННЫМИ

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Этот компонент отвечает за всю секцию "Get in Touch"
const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState('Send Message');
  const [formVisible, setFormVisible] = useState(true);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;
    
    setStatus('Sending...');

    emailjs.sendForm(
      'service_0n18usa',      // Ваш Service ID
      'template_6qcux8p',     // Ваш Template ID
      form.current,
      'BB-u4m2IUTLIzgBvx'       // Ваш Public Key
    )
    .then((result) => {
        console.log('SUCCESS!', result.text);
        setStatus('Message Sent!');
        setFormVisible(false); // Скрываем форму после успешной отправки
    }, (error) => {
        console.log('FAILED...', error.text);
        setStatus('Failed. Please try again.');
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Get In Touch</h2>
        <p className="text-center text-slate-400 mb-12">
          Have a project in mind? Let's work together to build something amazing.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Левая часть: Форма */}
          <div className="bg-slate-800/50 p-8 rounded-lg">
            {formVisible ? (
              <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium mb-2">Name</label>
                  <Input type="text" name="from_name" id="from_name" required className="bg-slate-900 border-slate-700" />
                </div>
                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" name="from_email" id="from_email" required className="bg-slate-900 border-slate-700" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea name="message" id="message" required rows={5} className="bg-slate-900 border-slate-700" />
                </div>
                <Button type="submit" disabled={status !== 'Send Message'}>
                  {status}
                </Button>
              </form>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-green-400">Thank you!</h3>
                <p className="text-slate-300 mt-2">Your message has been sent successfully.</p>
              </div>
            )}
          </div>

          {/* Правая часть: Контакты */}
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
             <div className="bg-slate-800/50 p-6 rounded-lg">
                <h3 className="font-bold text-lg">Connect</h3>
                {/* Ваша ссылка на LinkedIn */}
                <a href="https://www.linkedin.com/in/garri-gelfers-5a711637a/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;