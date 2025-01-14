import { FileText } from "lucide-react";
import Image from "next/image";

export default function About() {

    return (
      <section className="py-20 bg-card">
        <div className="container px-4 mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]  rounded-lg overflow-hidden flex justify-center items-center">
              <Image
                src="/photo.jpeg"
                alt="Profile"
                width="330"
                height="400"
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-lg mb-6">
              I am a passionate robotics and AI enthusiast, actively learning newmethods to make robotic systems more robust, efficient, safe, andgeneralizable. As a self-motivated and ambitious student, I strive to pushthe boundaries of innovation and contribute to impactful advancementsin the field of robotics and AI.
              </p>
              <p className="text-lg mb-6">
              To seamlessly integrate robots into human society by devising safe and robust robotic solutions that enrich and enhance people’s lives.
              </p>
              <div className="flex gap-4">
                <a 
                  href="/CV-ucsd.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Download My CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

