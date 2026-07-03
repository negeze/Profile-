import { Code2, Database, Layout, Server } from "lucide-react"
import { Card } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      icon: Layout,
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Node.js", "Laravel", "PHP", "REST APIs", "GraphQL"],
    },
    {
      icon: Database,
      title: "Database & Tools",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma"],
    },
    {
      icon: Code2,
      title: "Development Tools",
      skills: ["Git", "Docker", "VS Code", "Postman", "CI/CD"],
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent">Skills</h2> */}
          <h3 className="mb-12 text-3xl font-bold sm:text-4xl text-center">Technologies & Tools</h3>


          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
            {skillCategories.map((category) => {
              const Icon = category.icon
              return (
                <Card key={category.title} className="p-6  hover:shadow-xl hover:-translate-y-2 
            transition duration-300 ">
                  <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="mb-3 font-semibold">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-sm text-muted-foreground">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
