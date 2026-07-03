import { ExternalLink, Github } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with shopping cart, payment integration, and admin dashboard. Built with Next.js and Laravel API.",
      tags: ["Next.js", "Laravel", "Stripe", "PostgreSQL"],
      image: "/modern-ecommerce-dashboard.png",
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Task Management App",
      description:
        "Real-time collaborative task management application with drag-and-drop functionality, team workspaces, and activity tracking.",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "/task-management-kanban.png",
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Business intelligence dashboard with interactive charts, real-time data visualization, and customizable reports.",
      tags: ["Next.js", "TypeScript", "Recharts", "MySQL"],
      image: "/analytics-dashboard-charts.png",
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent">Projects</h2> */}
          <h3 className="mb-12 text-3xl font-bold sm:text-4xl text-center">Featured Work</h3>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden   hover:shadow-xl hover:-translate-y-2
                transition-all duration-300">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:
                     transition-transform duration-500 ease-out hover:scale-110"
                />
                <div className="p-6">
                  <h4 className="mb-2 text-xl font-semibold">{project.title}</h4>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
