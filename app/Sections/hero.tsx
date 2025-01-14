import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {

    return (
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">Prachit Gupta</h1>
          <p className="text-2xl text-muted-foreground mb-8">Robotics and Automation Engineer</p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/prachitgupta" className="p-2 rounded-full hover:bg-primary/10 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/prachit-gupta-60a210240" className="p-2 rounded-full hover:bg-primary/10 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:prachitgupta30@gmail.com" className="p-2 rounded-full hover:bg-primary/10 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    )
}

