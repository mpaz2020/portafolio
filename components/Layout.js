import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect } from "react";
import Nprogress from "nprogress";
import Navbar from "./Navbar";
import { profile } from "../profile";

export function Layout({ children, footer = true, title, subtitle, pageTitle }) {
  const router = useRouter();
  useEffect(() => {
    const start = () => Nprogress.start();
    const done = () => Nprogress.done();
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", done);
    router.events.on("routeChangeError", done);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", done);
      router.events.off("routeChangeError", done);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>{pageTitle ? `${pageTitle} · ${profile.name}` : `${profile.name} · ${profile.roles[0]}`}</title>
      </Head>
      <div className="bg-glow" aria-hidden="true" />
      <Navbar />
      {title ? (
        <main className="container page">
          <div className="page__head">
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
          </div>
          {children}
        </main>
      ) : (
        <main>{children}</main>
      )}
      {footer && (
        <footer className="footer">
          <div className="container footer__inner">
            <p>
              © {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.
            </p>
            <p className="muted">Hecho con Next.js · {profile.location}</p>
          </div>
        </footer>
      )}
    </>
  );
}
