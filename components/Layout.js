import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Nprogress from "nprogress";

export function Layout({ children, footer = true, dark = false, title }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      Nprogress.start();
    };
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => Nprogress.done());
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  });

  return (
    <div className={dark ? "bg-dark" : "bg-light"}>
      <Navbar />
      <main className="container py-5">
        {title && (
          <h1 className={dark ? "text-center text-light" : "text-center"}>
            {title}
          </h1>
        )}
        {children}
      </main>
      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1>&copy; Medardo Paz Portafolio</h1>
            <p>{new Date().getFullYear()}</p>
            <p>All rights Reserved.</p>
          </div>
        </footer>
      )}
    </div>
  );
}
