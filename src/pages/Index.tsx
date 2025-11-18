import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import ChatPointerSimple from "@/components/ChatPointerSimple";  // ← Добавь это

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
      <ChatWidget />
      <ChatPointerSimple />  {/* ← И это */}
    </div>
  );
};

export default Index;