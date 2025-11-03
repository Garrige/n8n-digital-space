import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Customer Support AI Agent",
      description: "Intelligent chatbot handling customer inquiries with natural language processing and automated response generation.",
      technologies: ["n8n", "OpenAI", "Webhooks"],
    },
    {
      title: "Workflow Automation System",
      description: "End-to-end automation connecting multiple platforms, streamlining business processes and reducing manual work.",
      technologies: ["n8n", "API Integration", "Database"],
    },
    {
      title: "E-commerce Website",
      description: "Modern e-commerce platform with seamless shopping experience, payment integration, and inventory management.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Lead Generation Bot",
      description: "Automated lead collection and qualification system with CRM integration and email notifications.",
      technologies: ["n8n", "CRM API", "Email Automation"],
    },
    {
      title: "Portfolio Website",
      description: "Custom portfolio site showcasing projects with modern design, smooth animations, and responsive layout.",
      technologies: ["React", "Vite", "shadcn/ui"],
    },
    {
      title: "Data Processing Pipeline",
      description: "Automated data extraction, transformation, and loading pipeline for business intelligence reporting.",
      technologies: ["n8n", "Python", "Database"],
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
