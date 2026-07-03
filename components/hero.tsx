"use client"

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-center pl-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">





          <motion.h1
            initial={{ x: 400, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 100,
            }}
            className="
    text-4xl md:text-5xl font-extrabold py-4

    /* Light mode: gradient */
    bg-gradient-to-r from-blue-600 via-black to-amber-700
    bg-clip-text text-transparent

    /* Dark mode: solid white */
    dark:bg-none
    dark:text-white
  "
          >
            Software Engineer & Developer
          </motion.h1>




          <p className="mb-8 text-lg text-muted-foreground sm:text-xl md:text-2xl max-w-2xl text-pretty leading-relaxed">
            Building modern web applications with Next.js, React, and Laravel. Passionate about creating elegant
            solutions to complex problems.
          </p>

          <div className="flex flex-wrap gap-4 mb-10 ml-6">
            <Button size="lg" asChild>
              <a href="#contact">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">View projects</a>
            </Button>
          </div>

          <div className="flex gap-4 ml-7">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:zelekenegese@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
