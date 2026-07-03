"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        })
        e.currentTarget.reset()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
        
          <h3 className="mb-4 text-3xl font-bold sm:text-4xl text-center">Get In Touch</h3>
            
          <p className="mb-12 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I'm always open to new opportunities and interesting projects. Feel free to reach out if you'd like to
            discuss a project or just want to connect.
          </p>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1 space-y-6">
              <Card className="p-6   hover:shadow-xl hover:-translate-y-2
                transition-all duration-300">
                <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <h4 className="mb-2 font-semibold">Email</h4>
                <a
                  href="mailto:zelekenegese@gmail.com"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  zelekenegese@gmail.com
                </a>
              </Card>

              <Card className="p-6   hover:shadow-xl hover:-translate-y-2
                transition-all duration-300">
                <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <h4 className="mb-2 font-semibold">Location</h4>
                <p className="text-sm text-muted-foreground">Available for remote work</p>
              </Card>
            </div>

            <Card className="lg:col-span-2 p-6   hover:shadow-xl hover:-translate-y-2
                transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Tell me about your project..." rows={6} required />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
