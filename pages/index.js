// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { Layout } from "../components/Layout";
import { skills, experiences, projects } from "../profile";
import Link from "next/link";

const Home = () => (
  <Layout>
    {/** first section */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="/3052.png" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Medardo Paz</h1>
              <h3>FullStack</h3>
              <p>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
                (N. del T. persona que se dedica a la imprenta) desconocido usó
                una galería de textos y los mezcló de tal manera que logró hacer
                un libro de textos especimen. No sólo sobrevivió 500 años, sino
                que tambien ingresó como texto de relleno en documentos
                electrónicos, quedando esencialmente igual al original. Fue
                popularizado en los 60s con la creación de las hojas Letraset,
                las cuales contenian pasajes de Lorem Ipsum, y más recientemente
                con software de autoedición, como por ejemplo Aldus PageMaker,
                el cual incluye versiones de Lorem Ipsum.
              </p>
              <a href="/hireme">Hire Me</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/** second section */}

    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Habilidades</h1>

            {skills.map(({ skill, percentaje }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentaje}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experiencia</h1>

            <ul>
              {experiences.map(({ title, description, from, to }, i) => (
                <li key={i}>
                  <h3>{title}</h3>
                  <h5>
                    {from}-{to}
                  </h5>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/**portfolio */}

    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portafolio</h1>
            </div>
            {projects.map(({ name, description, image }, i) => (
              <div className="col-md-4 p-2" key={i}>
                <div className="card h-100">
                  <div className="overflow">
                    <img
                      src={`/${image}`}
                      alt=""
                      className="img-fluid card-img-top"
                    />
                  </div>
                  <div className="card-body">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <a href="#">ver mas</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/portafolio">
              <a className="btn btn-outline-light">Más proyectos</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Home;
