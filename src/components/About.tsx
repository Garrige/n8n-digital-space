import { Code2, Workflow, Sparkles, Database, Cloud, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  const skills = [
    { icon: Workflow, title: t.skills.automation },
    { icon: Sparkles, title: t.skills.ai },
    { icon: Code2, title: t.skills.apis },
    { icon: Database, title: t.skills.databases },
    { icon: Zap, title: t.skills.react },
    { icon: Cloud, title: t.skills.cloud },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      {/* ... остальной код ... */}
    </section>
  );
};

export default About;