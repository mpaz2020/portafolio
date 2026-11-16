import { useEffect, useMemo, useState } from "react";
import { Layout } from "../components/Layout";
import Reveal from "../components/Reveal";
import { profile, stats, services, skillGroups, experiences, education, projects, projectsNote } from "../profile";

const Typing = ({ words }) => {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length) setTimeout(() => setDel(true), 1400);
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI(i + 1);
          }
        }
      },
      del ? 35 : 70
    );
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return (
    <span className="typing">
      {text}
      <i className="caret" />
    </span>
  );
};

const SectionHead = ({ eyebrow, title, text }) => (
  <Reveal className="section__head">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </Reveal>
);

const Home = () => {
  const cats = useMemo(() => ["Todos", ...Array.from(new Set(projects.map((p) => p.category)))], []);
  const [cat, setCat] = useState("Todos");
  const shown = projects.filter((p) => cat === "Todos" || p.category === cat);
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const subject = encodeURIComponent(`Contacto desde tu portafolio: ${f.get("name")}`);
    const body = encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Layout>
      {/* HERO */}
      <section className="hero container" id="inicio">
        <div className="hero__text">
          {profile.available && (
            <span className="badge">
              <i className="dot" /> {profile.availableText}
            </span>
          )}
          <h1>
            Hola, soy <span className="grad">{profile.name}</span>
          </h1>
          <h2 className="hero__role">
            <Typing words={profile.roles} />
          </h2>
          <p className="lead">{profile.tagline}</p>
          <div className="hero__cta">
            <a href="#proyectos" className="btn btn--primary">
              Ver proyectos →
            </a>
            <a href="#contacto" className="btn btn--ghost">
              Contáctame
            </a>
            {profile.cv && (
              <a href={profile.cv} className="btn btn--ghost" download>
                Descargar CV
              </a>
            )}
          </div>
          <div className="socials">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
        <div className="hero__visual">
          <div className="avatar">
            <img src={profile.photo} alt={`Foto de ${profile.name}`} />
          </div>
          <div className="float float--a">⚛️ Vue · React</div>
          <div className="float float--b">🟢 Node.js</div>
          <div className="float float--c">📡 OPC-UA · MQTT</div>
        </div>
      </section>

      {/* STATS */}
      <section className="container">
        <div className="stats">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section container" id="sobre-mi">
        <SectionHead eyebrow="Sobre mí" title="Código limpio, productos que funcionan" />
        <div className="about">
          <Reveal className="about__text">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="muted">📍 {profile.location}</p>
          </Reveal>
          <div className="services">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80} className="card service">
                <span className="service__icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section container" id="habilidades">
        <SectionHead eyebrow="Stack" title="Habilidades y tecnologías" text="Herramientas con las que construyo a diario." />
        <div className="skills">
          {skillGroups.map((g, i) => (
            <Reveal key={g.group} delay={i * 80} className="card skill-group">
              <h3>{g.group}</h3>
              <div className="chips">
                {g.items.map((it) => (
                  <span key={it} className="chip">
                    {it}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section container" id="experiencia">
        <SectionHead eyebrow="Trayectoria" title="Experiencia profesional" />
        <div className="timeline">
          {experiences.map((e, i) => (
            <Reveal key={i} delay={i * 80} className="timeline__item">
              <span className="timeline__dot" />
              <div className="card">
                <div className="timeline__meta">
                  <span>
                    {e.from} — {e.to}
                  </span>
                </div>
                <h3>{e.title}</h3>
                <p className="company">{e.company}</p>
                <p>{e.description}</p>
                {e.highlights && (
                  <ul className="ticks">
                    {e.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="edu">
          <h3>Formación</h3>
          <div className="edu__grid">
            {education.map((e) => (
              <div key={e.title} className="card">
                <strong>{e.title}</strong>
                <p className="muted">
                  {e.place} · {e.year}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* PROJECTS */}
      <section className="section container" id="proyectos">
        <SectionHead eyebrow="Portafolio" title="Proyectos destacados" text={projectsNote} />
        <Reveal className="filters">
          {cats.map((c) => (
            <button key={c} className={`pill ${c === cat ? "pill--on" : ""}`} onClick={() => setCat(c)}>
              {c}
            </button>
          ))}
        </Reveal>
        <div className="projects">
          {shown.map((p, i) => (
            <Reveal key={p.name} delay={i * 60} className="card project">
              <div className="project__img">
                {p.image ? (
                  <img src={`/${p.image}`} alt={`Captura de ${p.name}`} loading="lazy" />
                ) : (
                  <div className="project__ph" aria-hidden="true">{p.icon}</div>
                )}
                <div className="project__links">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn--sm btn--primary">
                      Demo ↗
                    </a>
                  )}
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer" className="btn btn--sm btn--ghost">
                      Código
                    </a>
                  )}
                </div>
              </div>
              <div className="project__body">
                <span className="eyebrow">{p.category}</span>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="chips">
                  {p.tags.map((t) => (
                    <span key={t} className="chip chip--sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section container" id="contacto">
        <Reveal className="contact card">
          <div>
            <span className="eyebrow">Contacto</span>
            <h2>
              ¿Trabajamos <span className="grad">juntos</span>?
            </h2>
            <p>Cuéntame sobre tu proyecto. Respondo normalmente en menos de 24 horas.</p>
            <a className="mail" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
          <form onSubmit={onSubmit}>
            <label>
              Nombre
              <input name="name" required placeholder="Tu nombre" />
            </label>
            <label>
              Correo
              <input name="email" type="email" required placeholder="tu@correo.com" />
            </label>
            <label>
              Mensaje
              <textarea name="message" rows="4" required placeholder="¿En qué puedo ayudarte?" />
            </label>
            <button className="btn btn--primary" type="submit">
              Enviar mensaje
            </button>
            {sent && <p className="muted">Se abrió tu cliente de correo para enviar el mensaje.</p>}
          </form>
        </Reveal>
      </section>
    </Layout>
  );
};

export default Home;
