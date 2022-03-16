import { Layout } from "../components/Layout";
import Error from "./_error";

const Github = ({ user, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode}></Error>;
  }
  return (
    <Layout footer={false} dark>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt="" />
            <p>{user.bio}</p>
            <a
              href={user.blog}
              rel="noreferrer"
              target="_blank"
              className="btn btn-outline-secondary my-2"
            >
              My Blog
            </a>
            <a
              rel="noreferrer"
              href={user.html_url}
              target="_blank"
              className="btn btn-outline-secondary"
            >
              Ir a GitHub
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/fazttech");
  const data = await res.json();

  return {
    props: {
      user: data,
      statusCode: res.status > 200 ? res.status : false,
    },
  };
}

export default Github;
