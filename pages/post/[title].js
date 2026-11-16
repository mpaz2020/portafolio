import Link from "next/link";
import { Layout } from "../../components/Layout";
import { posts } from "../../profile";

const Post = ({ currentPost }) => (
  <Layout title={currentPost.title} subtitle={`${currentPost.date} · ${currentPost.readTime} de lectura`} pageTitle={currentPost.title}>
    <article className="article">
      <img src={currentPost.image} alt="" />
      {currentPost.content.split("\n\n").map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <Link href="/blog">
        <a className="btn btn--ghost">← Volver al blog</a>
      </Link>
    </article>
  </Layout>
);

export function getStaticProps({ params }) {
  return { props: { currentPost: posts.find((p) => p.title === params.title) } };
}

export function getStaticPaths() {
  return { paths: posts.map((p) => ({ params: { title: p.title } })), fallback: false };
}

export default Post;
