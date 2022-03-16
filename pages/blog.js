import { Layout } from "../components/Layout";
import { posts } from "../profile";
import Link from "next/link";

const PostCard = ({ post }) => (
  <div className="col-md-4">
    <div className="card">
      <div className="overflow">
        <img src={post.image} alt="" className="card-img-top" />
      </div>
      <div className="card-body">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <Link href={`/post?title=${post.title}`} as={`/post/${post.title}`}>
          <button className="btn tbn-light">Leer mas</button>
        </Link>
      </div>
    </div>
  </div>
);

const Blog = () => (
  <Layout footer={false} title="My Blog" dark>
    <div className="row py-5">
      {posts.map((post, i) => (
        <PostCard post={post} key={i} />
      ))}
    </div>
  </Layout>
);

export default Blog;
