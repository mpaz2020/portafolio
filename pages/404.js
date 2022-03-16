import React from "react";
import { Layout } from "../components/Layout";
import Link from "next/link";

const custom404 = () => (
  <Layout>
    <div className="text-center">
      <div>404</div>
      <p>
        Esta pagina no existe. Porfavor regresar a{" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default custom404;
