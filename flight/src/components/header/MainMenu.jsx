import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
} from "../../data/mainMenuData";
import CategoriesMegaMenu from "./CategoriesMegaMenu";
import {
  isActiveParentChaild,
  isActiveLink,
  isActiveParent,
} from "../../utils/linkActiveChecker";

const MainMenu = ({ style = "" }) => {
  const location = useLocation();

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li
          className={`${
            isActiveParentChaild(homeItems, location.pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Home</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {homeItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, location.pathname)
                    ? "current"
                    : ""
                }
              >
                <RouterLink to={menu.routePath}>{menu.name}</RouterLink>
              </li>
            ))}
          </ul>
        </li>
        {/* End home page menu */}

        <li className="menu-item-has-children -has-mega-menu">
          <a href="#">
            <span className="mr-10">Categories</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <div className="mega">
            <CategoriesMegaMenu />
          </div>
        </li>
        {/* End categories menu items */}

        <li className={location.pathname === "/destinations" ? "current" : ""}>
          <RouterLink to="/destinations">Destinations</RouterLink>
        </li>
        {/* End Destinatinos single menu */}

        <li
          className={`${
            isActiveParentChaild(blogItems, location.pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Blog</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {blogItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, location.pathname)
                    ? "current"
                    : ""
                }
              >
                <RouterLink to={menu.routePath}>{menu.name}</RouterLink>
              </li>
            ))}
          </ul>
        </li>
        {/* End blogItems */}

        <li
          className={`${
            isActiveParentChaild(pageItems, location.pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Pages</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {pageItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, location.pathname)
                    ? "current"
                    : ""
                }
              >
                <RouterLink to={menu.routePath}>{menu.name}</RouterLink>
              </li>
            ))}
          </ul>
        </li>
        {/* End pages items */}

        <li
          className={`${
            isActiveParentChaild(dashboardItems, location.pathname)
              ? "current"
              : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Dashboard</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav ">
            {dashboardItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, location.pathname)
                    ? "current"
                    : ""
                }
              >
                <RouterLink to={menu.routePath}>{menu.name}</RouterLink>
              </li>
            ))}
          </ul>
        </li>

        <li className={location.pathname === "/contact" ? "current" : ""}>
          <RouterLink to="/contact">Contact</RouterLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
