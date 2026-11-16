import Link from "next/link";
import { Layout } from "../components/Layout";
import { posts } from "../profile";

const Blog = () => (
  <Layout title="Blog" subtitle="Notas, ideas y aprendizajes sobre desarrollo web." pageTitle="Blog">
    <div className="posts">
      {posts.map((p) => (
        <Link key={p.title} href={`/post/${p.title}`}>
          <a className="card post post--img">
            <img src={p.image} alt="" loading="lazy" />
            <span className="muted">
              {p.date} · {p.readTime}
            </span>
            <h3>{p.title}</h3>
            <p>{p.excerpt}</p>
            <span className="more">Leer más →</span>
          </a>
        </Link>
      ))}
    </div>
  </Layout>
);

export default Blog;
