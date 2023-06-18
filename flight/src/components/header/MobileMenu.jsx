import "../../styles/main.scss"

import { Link as RouterLink } from "react-router-dom";
import {
  ProSidebarProvider,
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
  categorieMobileItems,
} from "../../data/mainMenuData";
import {
  isActiveLink,
  isActiveParent,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";

import Social from "../common/Social";
import ContactInfo from "./ContactInfo";

const MobileMenu = () => {
  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <RouterLink to="/">
          <img src="/img/general/logo-dark.svg" alt="brand" />
        </RouterLink>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

      <ProSidebarProvider>
        <Sidebar width="400" backgroundColor="#fff">
          <Menu>
            <SubMenu title="Home">
              {homeItems.map((item, i) => (
                <MenuItem
                  key={i}
                  component={
                    <RouterLink
                      to={item.routePath}
                      className={
                        isActiveLink(item.routePath, window.location.pathname)
                          ? "menu-active-link"
                          : ""
                      }
                    />
                  }
                >
                  {item.name}
                </MenuItem>
              ))}
            </SubMenu>
            {/* End All Home Menu */}

            <SubMenu title="Categories">
              {categorieMobileItems.map((item) => (
                <SubMenu title={item.title} key={item.id}>
                  {item.menuItems.map((single) => (
                    <SubMenu title={single.title} key={single.id}>
                      {single.menuList.map((menu, i) => (
                        <MenuItem
                          key={i}
                          component={
                            <RouterLink
                              to={menu.routePath}
                              className={
                                isActiveLink(menu.routePath, window.location.pathname)
                                  ? "menu-active-link"
                                  : ""
                              }
                            />
                          }
                        >
                          {menu.name}
                        </MenuItem>
                      ))}
                    </SubMenu>
                  ))}
                </SubMenu>
              ))}
            </SubMenu>
            {/* End All Categories Menu */}

            <MenuItem
              component={
                <RouterLink
                  to="/destinations"
                  className={
                    window.location.pathname === "/destinations"
                      ? "menu-active-link"
                      : ""
                  }
                />
              }
            >
              Destinations
            </MenuItem>
            {/* End Destinations Menu */}

            <SubMenu title="Blog">
              {blogItems.map((item, i) => (
                <MenuItem
                  key={i}
                  component={
                    <RouterLink
                      to={item.routePath}
                      className={
                        isActiveLink(item.routePath, window.location.pathname)
                          ? "menu-active-link"
                          : ""
                      }
                    />
                  }
                >
                  {item.name}
                </MenuItem>
              ))}
            </SubMenu>
            {/* End All Blog Menu */}

            <SubMenu title="Pages">
              {pageItems.map((item, i) => (
                <MenuItem
                  key={i}
                  component={
                    <RouterLink
                      to={item.routePath}
                      className={
                        isActiveLink(item.routePath, window.location.pathname)
                          ? "menu-active-link"
                          : ""
                      }
                    />
                  }
                >
                  {item.name}
                </MenuItem>
              ))}
            </SubMenu>
            {/* End All Pages Menu */}

            <SubMenu title="Dashboard">
              {dashboardItems.map((item, i) => (
                <MenuItem
                  key={i}
                  component={
                    <RouterLink
                      to={item.routePath}
                      className={
                        isActiveLink(item.routePath, window.location.pathname)
                          ? "menu-active-link"
                          : ""
                      }
                    />
                  }
                >
                  {item.name}
                </MenuItem>
              ))}
            </SubMenu>
            {/* End All Dashboard Menu */}

            <MenuItem
              component={
                <RouterLink
                  to="/contact"
                  className={
                    window.location.pathname === "/contact"
                      ? "menu-active-link"
                      : ""
                  }
                />
              }
            >
              Contact
            </MenuItem>
            {/* End Contact Menu */}
          </Menu>
        </Sidebar>
      </ProSidebarProvider>

      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer">
        <ContactInfo />
        <div className="mt-10">
          <h5 className="text-16 fw-500 mb-10">Follow us on social media</h5>
          <div className="d-flex x-gap-20 items-center">
            <Social />
          </div>
        </div>
        <div className="mt-20">
          <RouterLink
            className="button -dark-1 px-30 fw-400 text-14 bg-blue-1 h-50 text-white"
            to="/others-pages/login"
          >
            Become An Expert
          </RouterLink>
        </div>
      </div>
      {/* End pro-footer */}
    </>
  );
};

export default MobileMenu;
