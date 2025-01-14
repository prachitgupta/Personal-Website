import { FileText, Github } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { projects } from "../Data/projects";

export default function Project() {

      const [flippedCards, setFlippedCards] = useState<number[]>([]);
    
      const toggleCard = (id: number) => {
        setFlippedCards(prev => 
          prev.includes(id) 
            ? prev.filter(cardId => cardId !== id)
            : [...prev, id]
        );
      };

    return (
        <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative h-[400px] perspective-1000"
                onClick={() => toggleCard(project.id)}
              >
                <div
                  className={`absolute w-full h-full transition-transform duration-500 transform-style-3d cursor-pointer ${
                    flippedCards.includes(project.id) ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Front */}
                  <div className="absolute w-full h-full backface-hidden">
                    <div className="relative h-full rounded-lg overflow-hidden group">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <h3 className="text-2xl font-bold text-white text-center px-4">
                          {project.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  {/* Back */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-card rounded-lg p-6 flex flex-col">
                    <h3 className="text-xl font-bold mb-4">{project.name}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 rounded-md text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.firstLink}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {project.firstIcon && <project.firstIcon className="w-4 h-4" />}
                        {project.firstName}
                      </a>
                      <a
                        href={project.secondLink}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {project.secondIcon && <project.secondIcon className="w-4 h-4" />}
                        {project.secondName}
                      </a>
                      {project.thirdName != null  ?
                      <a
                        href={project.thirdLink}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                         {project.thirdIcon && <project.thirdIcon className="w-4 h-4" />}
                        {project.thirdName}
                      </a> : ""}

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

