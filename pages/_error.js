import { Layout } from "../components/Layout";
import Link from "next/link";

const _error = ({ statusCode }) => (
  <Layout title={statusCode ? `Error ${statusCode}` : "Ups"} pageTitle="Error">
    <div className="center">
      <p className="muted">{statusCode ? `No se pudo cargar la página (código ${statusCode}).` : "No se pudo cargar esta página."}</p>
      <Link href="/">
        <a className="btn btn--primary">Volver al inicio</a>
      </Link>
    </div>
  </Layout>
);

export default _error;
