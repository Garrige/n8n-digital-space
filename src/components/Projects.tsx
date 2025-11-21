import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, Rocket } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const { t } = useLanguage();
  const [videoOpen, setVideoOpen] = useState<string | null>(null);
  
  const projects = [
    {
      key: 'project1',
      image: '/project-screenshotvideos.jpg',
      videoUrl: '/project1-video.mp4',
      technologies: ["n8n", "OpenAI", "Chat Widget", "Calendar API"],
      hasVideo: true,
      isInteractive: false,
    },
    {
      key: 'project2',
      image: '/project-screenshotvideos.jpg',
      videoUrl: '/project2-video.mp4',
      technologies: ["n8n", "Gmail API", "Invoice Generation", "Booking System"],
      hasVideo: true,
      isInteractive: false,
    },
    {
      key: 'project3',
      image: '/project3-screenshot.jpg',
      videoUrl: null,
      technologies: ["n8n", "RAG", "OpenAI", "Analytics", "Telegram Bot"],
      hasVideo: false,
      isInteractive: false,
    },
    {
      key: 'project4',
      image: '/realEstateAI.jpg', 
      videoUrl: null,
      technologies: ["n8n", "ss.lv Scraper", "Claude AI", "Email Alerts"],
      hasVideo: false,
      isInteractive: true,
      demoUrl: '/projects/real-estate-analyzer',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient">
          {t.projectsTitle}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => {
            const projectData = t[project.key as keyof typeof t] as { title: string; description: string };
            return (
              <Card
                key={project.key}
                className="overflow-hidden bg-background hover:bg-card-hover transition-all duration-300 border-border group hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50"
              >
                <div 
                  className="relative overflow-hidden h-56 cursor-pointer" 
                  onClick={() => project.hasVideo && project.videoUrl && setVideoOpen(project.videoUrl)}
                >
                  <img 
                    src={project.image} 
                    alt={projectData.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {project.isInteractive && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        LIVE DEMO
                      </span>
                    </div>
                  )}
                  
                  {project.hasVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-primary/90 hover:bg-primary text-primary-foreground rounded-full p-4 transition-all transform group-hover:scale-110">
                        <Play className="h-8 w-8" fill="currentColor" />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {projectData.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 text-sm line-clamp-4">
                    {projectData.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.isInteractive ? (
                    <Link to={project.demoUrl || '#'}>
                      <Button
                        variant="default"
                        className="w-full justify-between group/btn"
                      >
                        Try Live Demo
                        <Rocket className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  ) : project.hasVideo ? (
                    <Button
                      variant="ghost"
                      className="w-full justify-between group/btn hover:bg-primary/10 hover:text-primary"
                      onClick={() => project.videoUrl && setVideoOpen(project.videoUrl)}
                    >
                      {t.viewDetails}
                      <Play className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      className="w-full justify-between group/btn hover:bg-primary/10 hover:text-primary"
                    >
                      {t.viewDetails}
                      <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {videoOpen && (
          <div 
            className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4"
            onClick={() => setVideoOpen(null)}
          >
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <video 
                src={videoOpen} 
                controls 
                autoPlay
                className="w-full rounded-lg shadow-2xl"
              />
              <Button 
                onClick={() => setVideoOpen(null)}
                className="mt-4 w-full"
                variant="outline"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
