import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gradient">
            Get In Touch
          </h2>
          <p className="text-lg text-foreground/80 mb-12 text-center">
            Have a project in mind? Let's work together to build something amazing.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-background border-border"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Message
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 bg-card border-border hover:bg-card-hover transition-colors">
                <Mail className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Email</h3>
                <a
                  href="mailto:garrigelfers@gmail.com"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  garrigelfers@gmail.com
                </a>
              </Card>

              <Card className="p-6 bg-card border-border hover:bg-card-hover transition-colors">
                <Phone className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Phone</h3>
                <a
                  href="tel:+37127782827"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  +371 27782827
                </a>
              </Card>

              <Card className="p-6 bg-card border-border hover:bg-card-hover transition-colors">
                <MapPin className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Location</h3>
                <p className="text-foreground/70">Riga, Latvia</p>
              </Card>

              <Card className="p-6 bg-card border-border hover:bg-card-hover transition-colors">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Connect</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/garri-gelfers-5a711637a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-background hover:bg-primary/10 rounded-lg transition-colors group"
                  >
                    <Linkedin className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
