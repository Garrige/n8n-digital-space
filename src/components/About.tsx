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
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gradient">
            {t.aboutTitle}
          </h2>
          <p className="text-lg text-foreground/80 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
            {t.aboutDescription}
          </p>

          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
            {t.aboutSkillsTitle}
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <Card
                key={skill.title}
                className="p-6 bg-card hover:bg-card-hover transition-all duration-300 border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <skill.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground">
                  {skill.title}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;