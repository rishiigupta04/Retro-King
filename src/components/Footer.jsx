import { Github, Linkedin, Briefcase } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" bg-main flex justify-between items-center text-accent py-4 px-6 rounded-xl">
      <div className=" gap-1 hidden md:flex">
        &copy;TheRetroKing
        <img src="/logo.svg" alt="" className="w-5" />
      </div>
      <div className="flex gap-2">Made with ❤️ by Rishiraj Gupta</div>
      <div className="flex gap-4">
        <a
          href="https://github.com/rishiigupta04"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-6 h-6 text-accent hover:text-white transition-colors" />
        </a>
        <a
          href="https://www.linkedin.com/in/rishi-raj-gupta45/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-6 h-6 text-accent hover:text-white transition-colors" />
        </a>
        <a
          href="https://rishi-portfolio-website.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Briefcase className="w-6 h-6 text-accent hover:text-white transition-colors" />
        </a>
      </div>
    </footer>
  );
}
