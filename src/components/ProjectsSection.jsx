import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Invoice Extractor with RAG + OCR",
    description:
      "Extracts data from invoices including handwritten ones using OCR, enhanced with a Retrieval-Augmented Generation pipeline.",
    image: "/portfolio/projects/project1.png",
    tags: ["Python", "OCR", "RAG", "FastAPI"],
    githubUrl: "https://github.com/rushei1/invoice-extractor",
  },
  {
    id: 2,
    title: "Whisper + Pyannote Cuss Detection",
    description:
      "Cuss detection using speaker diarization with Pyannote and transcription with Whisper, deployed via Streamlit.",
    image: "/portfolio/projects/project2.png",
    tags: ["Whisper", "Pyannote", "Streamlit", "HuggingFace"],
    githubUrl: "https://github.com/rushei1/identification-of-curse-words-in-movies",
  },
  {
    id: 3,
    title: "Campus Navigation AR/VR",
    description:
      "Unity-based AR/VR app to guide students across MIT WPU using AR markers, published in a research journal.",
    image: "/portfolio/projects/project3.png",
    tags: ["Unity", "AR", "VR", "Research"],
    githubUrl: "https://github.com/rushei1/AR-Based-Navigation-System",
  },
  {
    id: 4,
    title: "Fake News Detection using ML & NLP",
    description:
      "A machine learning model that classifies news as fake or real using NLP techniques like TF-IDF and logistic regression.",
    image: "/portfolio/projects/project4.png",
    tags: ["Python", "NLP", "scikit-learn"],
    githubUrl: "https://github.com/rushei1/Fake-News-Detection",
  },
  {
    id: 5,
    title: "Seminar Booking System",
    description:
      "C++ based desktop application that allows students to book seminar slots and admins to manage schedules using OOP principles.",
    image: "/portfolio/projects/project5.png",
    tags: ["C++", "OOP"],
    githubUrl: "https://github.com/rushei1/seminar-booking-system",
  },
  {
    id: 6,
    title: "Netflix Clone",
    description:
      "A static responsive front-end clone of the Netflix landing page, built using HTML5 and modern CSS techniques.",
    image: "/portfolio/projects/project6.png",
    tags: ["HTML", "CSS", "Frontend"],
    githubUrl: "https://github.com/rushei1/netflix-landing-page",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects across AI/ML, Web Development, and NLP
          Each project reflects hands-on learning and practical application of modern technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-transform duration-300 hover:scale-110"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/rushei1"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
