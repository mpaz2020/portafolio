import { Layout } from "../components/Layout";
import Error from "./_error";
import { profile } from "../profile";

const Github = ({ user, repos, statusCode }) => {
  if (statusCode) return <Error statusCode={statusCode} />;
  return (
    <Layout title="GitHub" subtitle="Mi actividad en código abierto." pageTitle="GitHub">
      <div className="gh">
        <div className="card gh__user">
          <img src={user.avatar_url} alt="" />
          <h3>{user.name || user.login}</h3>
          <p className="muted">{user.bio}</p>
          <p className="muted">
            {user.public_repos} repositorios · {user.followers} seguidores
          </p>
          <a href={user.html_url} target="_blank" rel="noreferrer" className="btn btn--primary">
            Ir a GitHub ↗
          </a>
        </div>
        <div className="gh__repos">
          {repos.map((r) => (
            <a key={r.id} href={r.html_url} target="_blank" rel="noreferrer" className="card post">
              <h3>{r.name}</h3>
              <p>{r.description || "Sin descripción"}</p>
              <span className="muted">
                {r.language || "—"} · ★ {r.stargazers_count}
              </span>
            </a>
          ))}
          {repos.length === 0 && <p className="muted">Aún no hay repositorios públicos.</p>}
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  try {
    const [res, rres] = await Promise.all([
      fetch(`https://api.github.com/users/${profile.github}`),
      fetch(`https://api.github.com/users/${profile.github}/repos?sort=updated&per_page=6`),
    ]);
    if (!res.ok) return { props: { statusCode: res.status, user: null, repos: [] } };
    const repos = rres.ok ? await rres.json() : [];
    return { props: { user: await res.json(), repos, statusCode: false } };
  } catch (e) {
    return { props: { statusCode: 502, user: null, repos: [] } };
  }
}

export default Github;
