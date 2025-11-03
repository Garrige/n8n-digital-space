import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "RAG-powered Support Assistant",
      description: "AI system that significantly reduced response time using embeddings, knowledge base integration, and intelligent query processing for automated customer support.",
      technologies: ["n8n", "OpenAI", "Pinecone", "Embeddings"],
    },
    {
      title: "Lead Enrichment & CRM Integration",
      description: "Automated data collection pipeline with real-time HubSpot and Pipedrive synchronization, streamlining sales processes and data quality.",
      technologies: ["n8n", "HubSpot", "Pipedrive", "REST APIs"],
    },
    {
      title: "AI Chat Receptionist",
      description: "Intelligent client booking system with natural language understanding, achieving significant conversion rate improvements through automated conversations.",
      technologies: ["n8n", "OpenAI", "Telegram", "Calendar API"],
    },
    {
      title: "Multi-Platform Chatbot Integration",
      description: "Unified AI assistant deployed across Telegram, Slack, and web platforms with context awareness and seamless user experience.",
      technologies: ["n8n", "Telegram Bot API", "Slack API", "OpenAI"],
    },
    {
      title: "Document Processing Automation",
      description: "Automated workflow for document extraction, analysis, and routing using AI to process and categorize business documents at scale.",
      technologies: ["n8n", "OpenAI", "Docker", "Database"],
    },
    {
      title: "Business Analytics Dashboard",
      description: "Custom web application with real-time data visualization and automated reporting for business intelligence and decision making.",
      technologies: ["React", "TypeScript", "REST APIs"],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="p-6 bg-background hover:bg-card-hover transition-all duration-300 border-border group hover:shadow-lg hover:shadow-primary/10"
            >
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-foreground/70 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button
                variant="ghost"
                className="w-full justify-between group/btn hover:bg-primary/10 hover:text-primary"
              >
                View Details
                <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
