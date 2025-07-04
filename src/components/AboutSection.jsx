import { Briefcase, Code, User } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Engineer. Creator. Problem Solver.
            </h3>

            <p className="text-muted-foreground">
              I am Rusheil Singh Baath. A Computer Science Engineering graduate
              specializing in Artificial Intelligence and Data Science. I build scalable
              web platforms and AI-powered tools that solve real-world problems.
            </p>

            <p className="text-muted-foreground">
              From developing full-stack portals and intelligent document processors,
              to real-time audio transcription and diarization tools. I enjoy blending
              software engineering with the power of machine learning. I thrive in spaces
              where code meets creativity, and I am always exploring new technologies
              to stay ahead of the curve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="cosmic-button cursor-pointer"
              >
                Get In Touch
              </ScrollLink>

              <a
                href="/portfolio/projects/RusheilSinghBaath_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & ML Projects</h4>
                  <p className="text-muted-foreground">
                    Experience with OCR, NLP, RAG, and real-time transcription
                    using Whisper and PyAnnote.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building robust web apps using React, Node.js, FastAPI,
                    and SQL/NoSQL databases.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Execution</h4>
                  <p className="text-muted-foreground">
                    Managed and delivered projects during internships and academics,
                    using agile practices and feedbacks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
