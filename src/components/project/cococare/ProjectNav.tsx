import { Link } from "@tanstack/react-router";

export function ProjectNav() {
  return (
    <header className="nav-blur-shell fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <nav className="case-study-nav relative z-10 flex items-center gap-1 rounded-full p-1 case-ui">
        <Link to="/" className="nav-item">
          Work
        </Link>
        <a href="#background" className="nav-item">
          Case study
        </a>
        <a href="mailto:hello@barboragadlinova.com" className="nav-item">
          Contact
        </a>
      </nav>
    </header>
  );
}
