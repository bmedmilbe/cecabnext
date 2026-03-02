import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-title">
                <h2>Sempre a produzir com alta qualidade</h2>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-text">
                <p>
                  Desde 2004, a CECAB STP tem-se dedicado à produção e
                  exportação sustentável de Cacau Biológico em São Tomé e
                  Príncipe, trabalhando em estreita colaboração com associações
                  de agricultores locais nos diversos Distritos.
                </p>

                <Link href={`/productions`}>
                  <span className="read-more-btn">
                    Nossas produções <i className="flaticon-next"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
