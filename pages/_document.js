import Document, { Html, Head, Main, NextScript } from "next/document";

// Aplica el tema guardado antes de pintar (evita parpadeo)
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}})();`;

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta name="description" content="Portafolio de Medardo Paz, desarrollador full stack: proyectos, experiencia y contacto." />
          <meta name="theme-color" content="#0b0d17" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
            rel="stylesheet"
          />
          <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
