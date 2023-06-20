import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";
import "../../styles/main.scss";

const Header1 = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <>
      {" "}
      <header className={`header ${navbar ? "is-sticky bg-white" : ""}`}>
        <div className="header__container header__container-1500 mx-auto px-30 sm:px-20">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <RouterLink to="/" className="header-logo mr-50">
                  <img src="/img/general/logo-dark-3.svg" alt="logo icon" />
                  <img src="/img/general/logo-dark-3.svg" alt="logo icon" />
                </RouterLink>
                {/* End logo */}

                <div className="header-menu">
                  <div className="header-menu__content">
                    <MainMenu style="text-dark-1" />
                  </div>
                </div>
                {/* End header-menu */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}

            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="d-flex items-center is-menu-opened-hide md:d-none">
                  {/* <RouterLink
                    href="/others-pages/login"
                    className="button px-30 fw-400 text-14 -blue-1 bg-dark-4 h-50 text-white"
                  >
                    Become An Expert
                  </RouterLink> */}
                  {/* <RouterLink
                    href="/others-pages/signup"
                    className="button px-30 fw-400 text-14 border-dark-4 -blue-1 h-50 text-dark-4 ml-20"
                  >
                    Sign In / Register
                  </RouterLink> */}

                  <RouterLink
                    to="/finalauth" // Adaugăm ruta corespunzătoare pentru Part2Auth
                    className="button px-30 fw-400 text-14 border-dark-4 -blue-1 h-50 text-dark-4 ml-20"
                  >
                    Autentificare
                  </RouterLink>
                </div>
                {/* End d-flex */}

                {/* Start mobile menu icon */}
                <div className="d-none xl:d-flex x-gap-20 items-center pl-30 text-dark-1">
                  <div>
                    <RouterLink
                      href="/others-pages/login"
                      className="d-flex items-center icon-user text-inherit text-22"
                    />
                  </div>
                  <div>
                    <button
                      className="d-flex items-center icon-menu text-inherit text-20"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobile-sidebar_menu"
                      data-bs-target="#mobile-sidebar_menu"
                    />

                    <div
                      className="offcanvas offcanvas-start  mobile_menu-contnet"
                      tabIndex="-1"
                      id="mobile-sidebar_menu"
                      aria-labelledby="offcanvasMenuLabel"
                      data-bs-scroll="true"
                    >
                      <MobileMenu />
                      {/* End MobileMenu */}
                    </div>
                  </div>
                </div>
                {/* End mobile menu icon */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
      {/* End header */}
    </>
  );
};

export default Header1;
