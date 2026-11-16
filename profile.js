// ============================================================
//  TODO el contenido del portafolio vive aquí. Edita este archivo
//  y la web se actualiza sola.
// ============================================================

export const profile = {
  name: "Medardo Paz",
  initials: "MP",
  roles: ["Ingeniero Informático", "Ingeniero de Software", "Desarrollador Full Stack"],
  tagline:
    "Ingeniero informático por la Universidad Nacional de Piura. Desarrollo aplicaciones web y móviles, APIs e integraciones industriales (OPC-UA, MQTT) para empresas en Perú.",
  location: "Piura, Perú",
  available: true,
  availableText: "Disponible para nuevos proyectos",
  photo: "/547217536_24525599753739049_8484697424851252016_n.jpg",
  email: "medpazord2010@gmail.com",
  // Endpoint de Formspree para que el formulario envíe el correo directo, sin abrir
  // el cliente de correo del visitante. Crea un formulario en https://formspree.io
  // y pega aquí la URL (ej: "https://formspree.io/f/abcdwxyz"). Vacío = usa mailto.
  formEndpoint: "https://formspree.io/f/xgakajzn",
  github: "mpaz2020", // usuario de GitHub (se usa en /github)
  socials: [
    { label: "GitHub", href: "https://github.com/mpaz2020" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/medardo-paz-ordo%C3%B1ez-a6b3a6129" },
  ],
  // CV alojado en Google Drive. Para actualizarlo sin redesplegar: en Drive, clic derecho
  // sobre el archivo → Administrar versiones → Subir nueva versión (el enlace no cambia).
  cv: "https://drive.google.com/uc?export=download&id=1qYslCbyRlf-u72u06qBJ1aZpAR8t58lR",
  about: [
    "Soy ingeniero informático egresado de la Universidad Nacional de Piura. Desde diciembre de 2020 trabajo como ingeniero de software en TGI Ingeniería, donde diseño e implemento aplicaciones web y móviles, APIs REST y GraphQL, y manejo bases de datos relacionales.",
    "Mi trabajo combina el desarrollo de software con la integración de sistemas industriales: protocolos como OPC-UA, MQTT y WebSockets, además de frameworks como Laravel, Vue, Angular, React, Quasar, Ionic y Flutter.",
    "Antes de dedicarme al software pasé por soporte y jefatura de informática, análisis de datos y sistemas GIS, lo que me da una visión práctica de cómo la tecnología resuelve problemas reales de operación.",
  ],
};

export const stats = [
  { value: "10+", label: "Años en el sector TI" },
  { value: "5+", label: "Años como ingeniero de software" },
  { value: "6", label: "Organizaciones donde he trabajado" },
  { value: "40+", label: "Repositorios públicos en GitHub" },
];

export const services = [
  { icon: "⚡", title: "Aplicaciones web", text: "Frontends con Vue, React o Angular y backends con Laravel, PHP y Node.js." },
  { icon: "📱", title: "Apps móviles", text: "Aplicaciones multiplataforma con Flutter, Ionic y Quasar." },
  { icon: "📡", title: "Integración industrial", text: "Conexión de equipos y sensores con OPC-UA, MQTT, Modbus y WebSockets." },
  { icon: "🗄️", title: "APIs y datos", text: "APIs REST y GraphQL, y diseño y consultas en bases de datos relacionales." },
];

export const skillGroups = [
  { group: "Frontend", items: ["JavaScript", "Vue", "React", "Angular", "Quasar", "Ionic"] },
  { group: "Backend", items: ["Node.js", "PHP", "Laravel", "REST", "GraphQL"] },
  { group: "Datos", items: ["SQL", "SQL Server", "Bases de datos relacionales"] },
  { group: "IoT / Industrial", items: ["OPC-UA", "MQTT", "WebSockets", "Modbus"] },
  { group: "Móvil", items: ["Flutter", "Ionic"] },
  { group: "Explorando", items: ["Go", "Python / FastAPI", "NestJS", "Astro", "Bun"] },
];

export const experiences = [
  {
    title: "Ingeniero de Software",
    company: "TGI Ingeniería",
    from: "Dic 2020",
    to: "Actualidad",
    description:
      "Diseño e implementación de aplicaciones web y apps móviles, gestión de bases de datos relacionales y desarrollo de APIs REST y GraphQL.",
    highlights: [
      "Frameworks: Laravel, Vue.js, Angular, React, Quasar, Ionic y Flutter",
      "Integración con OPC-UA, MQTT y WebSockets",
      "Lenguajes: JavaScript, PHP, SQL y Node.js",
    ],
  },
  {
    title: "Auxiliar de Operaciones",
    company: "Inspectorate Services Perú SAC – Grupo Bureau Veritas",
    from: "Oct 2020",
    to: "Nov 2020",
    description: "Análisis y gestión de planes de muestreo a empresas exportadoras de productos hidrobiológicos.",
  },
  {
    title: "Asistente GIS",
    company: "Ema Evolution Tecnológica EIRL",
    from: "Dic 2019",
    to: "Mar 2020",
    description: "Proyecto de inventario físico de redes primarias y secundarias para Electronoroeste S.A.",
    highlights: ["Actualización y registro de información técnica de redes eléctricas de media y baja tensión en el sistema Small World"],
  },
  {
    title: "Jefe de Informática",
    company: "Corporación Caspat SAC",
    from: "Abr 2017",
    to: "Nov 2019",
    description: "Soporte técnico y administración de los sistemas SIGO Proveedores y QW Proveedores.",
    highlights: [
      "Apoyo en compras, almacenamiento y distribución para el programa PNAE Qali Warma UT Piura",
      "Presentación y valorización de expedientes de conformidad de entrega para pago",
    ],
  },
  {
    title: "Asistente en Ingeniería Informática",
    company: "EPS GRAU S.A.",
    from: "Mar 2016",
    to: "Mar 2017",
    description: "Verificación de consumos menores a 10 m³ y evaluación de incidencias de toma de lectura en la zona de Piura.",
    highlights: [
      "Análisis de consumos atípicos sobre datos exportados del sistema comercial",
      "Preparación y asignación de carga de trabajo al personal de inspección en campo",
    ],
  },
  {
    title: "Operador Informático de local de evaluación",
    company: "INEI y Ministerio de Educación",
    from: "2015",
    to: "2024",
    description: "Participación en varios procesos de evaluación nacional (de 3 a 4 días cada uno).",
    highlights: ["Verificación de identidad del personal a cargo del examen", "Control de asistencia e inventario de materiales"],
  },
];

export const education = [
  { title: "Ingeniero Informático", place: "Universidad Nacional de Piura", year: "5 años" },
];

export const projectsNote =
  "Muchos de los proyectos que desarrollo en TGI Ingeniería son privados o de clientes; puedo mostrarlos o describirlos a pedido. Aquí tienes una selección de trabajos públicos.";

// Sin "image" se muestra un fondo con ícono. Cuando tengas capturas, ponlas en /public
// y agrega: image: "mi-captura.png"
export const projects = [
  {
    name: "Sistema de asistencia",
    description: "Servicio de Windows en .NET 8 para integrar un terminal biométrico ZKTeco.",
    icon: "🕒",
    tags: [".NET 8", "Windows Service", "ZKTeco"],
    category: "Integración",
    repo: "https://github.com/mpaz2020/sistema-asistencia",
  },
  {
    name: "Colector Modbus / cliente OPC-UA",
    description: "Colector de datos Modbus en Node.js y clientes OPC-UA (Node.js y Python).",
    icon: "📡",
    tags: ["Node.js", "Python", "OPC-UA", "Modbus"],
    category: "Integración",
    repo: "https://github.com/mpaz2020/ColectorModbus",
  },
  {
    name: "Perupez",
    description: "Aplicación desarrollada para Perupez Sechura.",
    icon: "🐟",
    tags: ["TypeScript"],
    category: "Web",
    repo: "https://github.com/mpaz2020/perupez",
  },
  {
    name: "SGIP Agroaurora",
    description: "Aplicación web desarrollada con Vue.",
    icon: "🌱",
    tags: ["Vue"],
    category: "Web",
    repo: "https://github.com/mpaz2020/sgip-agroaurora",
  },
  {
    name: "Tienda en línea",
    description: "Tienda virtual construida con Laravel y plantillas Blade.",
    icon: "🛒",
    tags: ["Laravel", "PHP", "Blade"],
    category: "Web",
    repo: "https://github.com/mpaz2020/tiendaenlinea",
  },
  {
    name: "Dashboards",
    description: "Paneles de control en Vue y aplicaciones móviles en Flutter.",
    icon: "📊",
    tags: ["Vue", "Flutter", "Dart"],
    category: "Móvil",
    repo: "https://github.com/mpaz2020/dashboard",
  },
];
