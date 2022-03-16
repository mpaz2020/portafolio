import { Layout } from "../../components/Layout";
// import { useRouter } from "next/router";
import { posts as defaultPosts } from "../../profile";

const Post = ({ currentPost }) => {
  // const router = useRouter();
  // const currentPost = posts.filter(
  //   (post) => post.title === title
  // )[0];

  return (
    <Layout footer={false} title={currentPost.title}>
      <div className="text-center">
        <img
          src={currentPost.image}
          alt=""
          className="img-fluid"
          style={{ width: "50%" }}
        />
        <p>{currentPost.content}</p>
      </div>
    </Layout>
  );
};

export function getStaticProps({ params }) {
  return {
    props: {
      currentPost: defaultPosts.filter((post) => post.title === params.title)[0],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: defaultPosts.map((post) => ({ params: { title: post.title } })),
    fallback: false,
  };
}

export default Post;
