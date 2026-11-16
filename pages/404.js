import Link from "next/link";
import { Layout } from "../components/Layout";

const NotFound = () => (
  <Layout title="404" subtitle="Esta página no existe." pageTitle="No encontrada">
    <div className="center">
      <Link href="/">
        <a className="btn btn--primary">Volver al inicio</a>
      </Link>
    </div>
  </Layout>
);

export default NotFound;
