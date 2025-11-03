import { Code2, Workflow, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const skills = [
    {
      icon: Workflow,
      title: "n8n & Automation",
      description: "Expert in n8n workflows, Docker, REST APIs, HubSpot & Pipedrive integration",
    },
    {
      icon: Sparkles,
      title: "AI & RAG Systems",
      description: "OpenAI integration, embeddings, Pinecone, intelligent chatbots and assistants",
    },
    {
      icon: Code2,
      title: "Integration & Web",
      description: "Telegram, Slack bots, custom web apps, and business process automation",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gradient">
            About Me
          </h2>
          <p className="text-lg text-foreground/80 mb-12 text-center max-w-2xl mx-auto">
            AI Automation Engineer specializing in n8n workflows, RAG systems, and intelligent chatbots. 
            I help businesses automate processes, integrate AI solutions, and build custom applications 
            that drive efficiency and growth.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <Card
                key={skill.title}
                className="p-6 bg-card hover:bg-card-hover transition-colors border-border"
              >
                <skill.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {skill.title}
                </h3>
                <p className="text-foreground/70">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
