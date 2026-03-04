"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, {
  useState,
  useEffect,
  useCallback,
  type MouseEvent,
} from "react";
interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(true);

  // Function to toggle the collapse state
  const toggleNavbar = useCallback((): void => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  }, []); // Empty dependency array means this function is stable

  // 2. Use useEffect for the scroll-based 'is-sticky' logic (replaces componentDidMount)
  useEffect(() => {
    const handleScroll = (): void => {
      const elementId = document.getElementById("navbar");
      if (elementId) {
        if (window.scrollY > 170) {
          elementId.classList.add("is-sticky");
        } else {
          elementId.classList.remove("is-sticky");
        }
      }
    };

    document.addEventListener("scroll", handleScroll);

    // Clean-up function (replaces componentWillUnmount logic for listeners)
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only on mount and cleanup on unmount

  // 3. Derived values based on state
  const classOne: string = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo: string = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  const preventDefault = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
  };

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="tuam-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/">
                <span className="navbar-brand">
                  <img src="/images/logo.png" alt="logo" />
                </span>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded={!collapsed}
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      href="/"
                      className={`${pathname == "/" ? "active" : ""} nav-link`}
                    >
                      Início
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href={"#"}
                      className="nav-link"
                      onClick={preventDefault}
                    >
                      Sobre nós <i className="flaticon-down-arrow"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/associations"
                          className={`${pathname == "/associations" ? "active" : ""} nav-link`}
                        >
                          Associações
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/team"
                          className={`${pathname == "/team" ? "active" : ""} nav-link`}
                        >
                          Corpo Directivo
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/productions"
                          className={`${pathname == "/productions" ? "active" : ""} nav-link`}
                        >
                          Produções
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/blogs"
                      className={`${pathname == "/blogs" ? "active" : ""} nav-link`}
                    >
                      Actividades
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/programs"
                      className={`${pathname == "/programs" ? "active" : ""} nav-link`}
                    >
                      Programas
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/bands"
                      className={`${pathname == "/bands" ? "active" : ""} nav-link`}
                    >
                      Banda CECAB
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/address"
                      className={`${pathname == "/address" ? "active" : ""} nav-link`}
                    >
                      Contactos
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="p-1">{children}</div>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <span>
                      <img src="/images/white-logo.png" alt="image" />
                    </span>
                  </Link>

                  <p>
                    CECAB-STP - Cooperativa de Produção e Exportação de Cacau
                    Biológico de São Tomé e Príncipe
                  </p>
                </div>

                <ul className="social">
                  <li>
                    <Link href="https://www.facebook.com/" target="_blank">
                      <i className="flaticon-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/" target="_blank">
                      <i className="flaticon-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/" target="_blank">
                      <i className="flaticon-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/" target="_blank">
                      <i className="flaticon-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Menu</h3>

                <ul className="footer-quick-links">
                  <li>
                    <Link href="/">
                      <span>Início</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/associations">
                      <span>Associações</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/productions">
                      <span>Produção</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/team">
                      <span>Corpo Directivo</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs">
                      <span>Actividades</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/programs">
                      <span>Programas</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/bands">
                      <span>Banda CECAB</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/address">
                      <span>Contacte-nos</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Contactos</h3>

                <ul className="footer-contact-info">
                  <li>
                    <span>Localização:</span> Rua Barão de Água Izé, São Tomé
                  </li>
                  <li>
                    <span>Email:</span>{" "}
                    <Link href="mailto:tuam@gmail.com">
                      adias.cecab@gmail.com
                    </Link>
                  </li>
                  <li>
                    <span>Telefone:</span>{" "}
                    <Link href="tel:+(321)948754"> +239 222 3049</Link>
                  </li>

                  <li>
                    <Link
                      href="https://goo.gl/maps/NHJF2NwZFWDATAAq6"
                      target="_blank"
                    >
                      Ver Localização no Google Mapa
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-6 col-md-6">
                <p>
                  <i className="far fa-copyright"></i> Site oficial da CECAB,
                  desenvolvido por by{" "}
                  <Link
                    href="https://www.facebook.com/profile.php?id=100089163908291"
                    target="_blank"
                  >
                    SitesTop
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
