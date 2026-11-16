import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { profile } from "../profile";
import { useTheme } from "./useTheme";

const links = [
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "habilidades", label: "Habilidades" },
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

const Navbar = () => {
  const { pathname } = useRouter();
  const [theme, toggle] = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const home = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!home || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      el && io.observe(el);
    });
    return () => io.disconnect();
  }, [home]);

  return (
    <header className={`nav ${scrolled || open ? "nav--solid" : ""}`}>
      <div className="container nav__inner">
        <Link href="/">
          <a className="brand" aria-label="Inicio">
            <span className="brand__mark">{profile.initials}</span>
            <span className="brand__name">{profile.name}</span>
          </a>
        </Link>
        <nav className={`nav__links ${open ? "open" : ""}`} aria-label="Principal">
          {links.map((l) => (
            <Link key={l.id} href={`/#${l.id}`}>
              <a className={home && active === l.id ? "active" : ""} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </Link>
          ))}
          <Link href="/blog">
            <a className={pathname.startsWith("/blog") || pathname.startsWith("/post") ? "active" : ""} onClick={() => setOpen(false)}>
              Blog
            </a>
          </Link>
          <Link href="/github">
            <a className={pathname === "/github" ? "active" : ""} onClick={() => setOpen(false)}>
              GitHub
            </a>
          </Link>
        </nav>
        <div className="nav__actions">
          <button className="icon-btn" onClick={toggle} aria-label="Cambiar tema" title="Cambiar tema">
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button className="icon-btn nav__burger" onClick={() => setOpen(!open)} aria-label="Menú" aria-expanded={open}>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
