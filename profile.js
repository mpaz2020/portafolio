// ============================================================
//  TODO el contenido del portafolio vive aquí. Edita este archivo
//  y la web se actualiza sola. Los textos marcados como "ejemplo"
//  son de relleno: reemplázalos por tus datos reales.
// ============================================================

export const profile = {
  name: "Medardo Paz",
  initials: "MP",
  roles: ["Desarrollador Full Stack", "Ingeniero de Software", "Constructor de productos web"],
  tagline:
    "Diseño y construyo aplicaciones web rápidas, escalables y bien cuidadas: del modelo de datos y la API hasta la última animación de la interfaz.",
  location: "Lima, Perú",
  available: true,
  availableText: "Disponible para nuevos proyectos",
  photo: "/3052.png",
  email: "tu-correo@ejemplo.com", // <- cambia por tu correo
  github: "mpaz2020", // usuario de GitHub (se usa en /github)
  socials: [
    { label: "GitHub", href: "https://github.com/mpaz2020" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tu-usuario" },
  ],
  cv: "", // ej: "/cv-medardo-paz.pdf" (coloca el PDF en /public). Vacío = botón oculto
  about: [
    "Soy desarrollador full stack con experiencia construyendo productos de principio a fin: APIs con Node.js, bases de datos relacionales, y interfaces modernas con Vue y React.",
    "Me importa el detalle: código legible, rendimiento medible, accesibilidad y una experiencia de usuario que se sienta cuidada. Trabajo bien en equipos pequeños y con autonomía.",
    "Cuando no estoy programando, me gusta aprender nuevas herramientas, escribir sobre lo que descubro y mejorar procesos para que los equipos entreguen más rápido.",
  ],
};

export const stats = [
  { value: "5+", label: "Años de experiencia" },
  { value: "30+", label: "Proyectos entregados" },
  { value: "12", label: "Tecnologías en producción" },
  { value: "100%", label: "Compromiso con la calidad" },
]; // ejemplo: ajusta a tus números reales

export const services = [
  { icon: "⚡", title: "Aplicaciones web", text: "SPAs y sitios con Next.js, React o Vue: rápidos, accesibles y optimizados para SEO." },
  { icon: "🧩", title: "APIs y backend", text: "Servicios REST con Node.js y PHP, autenticación, integraciones y buenas prácticas." },
  { icon: "🗄️", title: "Bases de datos", text: "Modelado, consultas y optimización en SQL Server y otros motores relacionales." },
  { icon: "🚀", title: "Despliegue y mejora", text: "CI/CD, monitoreo y refactorización para que el producto escale sin dolor." },
];

export const skillGroups = [
  { group: "Frontend", items: ["JavaScript", "React", "Next.js", "Vue", "HTML & CSS", "Angular"] },
  { group: "Backend", items: ["Node.js", "Express", "PHP", "REST APIs"] },
  { group: "Datos", items: ["SQL Server", "MySQL", "MongoDB"] },
  { group: "Herramientas", items: ["Git & GitHub", "Docker", "Vercel", "Figma"] },
];

export const experiences = [
  {
    title: "Desarrollador Full Stack",
    company: "Empresa actual (ejemplo)",
    from: "2022",
    to: "Actualidad",
    description:
      "Liderazgo técnico de la plataforma web: diseño de APIs, modelado de base de datos y construcción de interfaces reutilizables.",
    highlights: ["Reducción del tiempo de carga en un 40%", "Arquitectura de componentes compartidos", "Mentoría a desarrolladores junior"],
  },
  {
    title: "Desarrollador Backend",
    company: "Empresa anterior (ejemplo)",
    from: "2020",
    to: "2022",
    description: "Desarrollo y mantenimiento de servicios en Node.js y PHP, integraciones con terceros y reportes sobre SQL Server.",
    highlights: ["Migración de módulos legacy a Node.js", "Optimización de consultas críticas", "Documentación de APIs"],
  },
  {
    title: "Desarrollador Frontend",
    company: "Primer empleo (ejemplo)",
    from: "2018",
    to: "2020",
    description: "Implementación de interfaces responsivas con JavaScript y Vue a partir de diseños en Figma.",
    highlights: ["Sistema de diseño interno", "Mejoras de accesibilidad", "Pruebas end-to-end"],
  },
];

export const education = [
  { title: "Ingeniería de Sistemas / Software (ejemplo)", place: "Universidad (ejemplo)", year: "2013 – 2018" },
  { title: "Certificaciones en la nube y desarrollo web (ejemplo)", place: "Plataformas en línea", year: "2019 – hoy" },
];

export const projects = [
  {
    name: "Plataforma de gestión",
    description: "Panel administrativo con roles, reportes en tiempo real y exportación de datos para equipos de operaciones.",
    image: "portfolio1.jpeg",
    tags: ["Vue", "Node.js", "SQL Server"],
    category: "Full Stack",
    demo: "#",
    repo: "#",
    featured: true,
  },
  {
    name: "Tienda en línea",
    description: "E-commerce con carrito, pasarela de pagos y panel de inventario, optimizado para SEO y velocidad.",
    image: "portfolio2.jpg",
    tags: ["Next.js", "Node.js", "MongoDB"],
    category: "Full Stack",
    demo: "#",
    repo: "#",
    featured: true,
  },
  {
    name: "API de facturación",
    description: "Servicio REST documentado con autenticación JWT, colas de trabajo y pruebas automatizadas.",
    image: "portfolio3.png",
    tags: ["Node.js", "Express", "SQL Server"],
    category: "Backend",
    demo: "",
    repo: "#",
  },
  {
    name: "Landing corporativa",
    description: "Sitio institucional multilenguaje con animaciones sutiles y puntaje 100 en Lighthouse.",
    image: "portfolio4.png",
    tags: ["React", "CSS"],
    category: "Frontend",
    demo: "#",
    repo: "",
  },
  {
    name: "App de reservas",
    description: "Aplicación para agendar citas con calendario interactivo, notificaciones y pagos.",
    image: "portfolio5.jpeg",
    tags: ["Vue", "PHP", "MySQL"],
    category: "Full Stack",
    demo: "#",
    repo: "#",
  },
  {
    name: "Dashboard analítico",
    description: "Visualización de métricas de negocio con gráficos interactivos y filtros dinámicos.",
    image: "portfolio6.jpeg",
    tags: ["React", "Node.js"],
    category: "Frontend",
    demo: "#",
    repo: "#",
  },
]; // ejemplo: reemplaza por tus proyectos reales

export const posts = [
  {
    title: "React",
    date: "2026-03-10",
    readTime: "5 min",
    excerpt: "Por qué sigo eligiendo React para interfaces complejas y cómo organizo mis componentes.",
    content:
      "React sigue siendo una de las mejores opciones para construir interfaces complejas. En este artículo comparto cómo estructuro componentes, manejo el estado y evito re-renderizados innecesarios.\n\nEl contenido completo es un ejemplo: reemplázalo por tu propio artículo en profile.js.",
    image: "https://sigdeletras.com/images/blog/202004_react_leaflet/react.png",
  },
  {
    title: "Angular",
    date: "2026-02-02",
    readTime: "4 min",
    excerpt: "Lo que aprendí al trabajar con Angular en proyectos empresariales grandes.",
    content:
      "Angular ofrece una estructura sólida para equipos grandes. Aquí repaso módulos, inyección de dependencias y cuándo realmente vale la pena elegirlo.\n\nContenido de ejemplo: edítalo en profile.js.",
    image: "https://cdn.appdesign.dev/wp-content/uploads/2020/08/Agencia-desarrollo-Angular-JS.jpg",
  },
  {
    title: "Vue",
    date: "2026-01-15",
    readTime: "6 min",
    excerpt: "Vue 3, la Composition API y un flujo de trabajo cómodo para productos rápidos.",
    content:
      "Vue destaca por su curva de aprendizaje amable y su excelente ergonomía. Veamos la Composition API y patrones para mantener el código ordenado.\n\nContenido de ejemplo: edítalo en profile.js.",
    image: "https://victorroblesweb.es/wp-content/uploads/2017/03/vuejs2-victorroblesweb.jpg",
  },
];
