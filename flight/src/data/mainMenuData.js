export const homeItems = [
  {
    name: "Home ",
    routePath: "/home/home",
  },
];
export const blogItems = [
  {
    name: "Blog Single",
    routePath: "/blog/blog-details/1",
  },
];
export const pageItems = [
  {
    name: "404",
    routePath: "/404",
  },
  {
    name: "About",
    routePath: "/others-pages/about",
  },
  {
    name: "Become Expert",
    routePath: "/others-pages/become-expert",
  },
  {
    name: "Help Center",
    routePath: "/others-pages/help-center",
  },
  {
    name: "Login",
    routePath: "/others-pages/login",
  },
  {
    name: "Register",
    routePath: "/others-pages/signup",
  },
  {
    name: "Terms",
    routePath: "/others-pages/terms",
  },
  {
    name: "Invoice",
    routePath: "/others-pages/invoice",
  },
  {
    name: "UI Elements",
    routePath: "/others-pages/ui-elements",
  },
];
export const dashboardItems = [
  {
    name: "Dashboard",
    routePath: "/dashboard/db-dashboard",
  },
  {
    name: "Booking History",
    routePath: "/dashboard/db-booking",
  },
  {
    name: "Wishlist",
    routePath: "/dashboard/db-wishlist",
  },
  {
    name: "Settings",
    routePath: "/dashboard/db-settings",
  },
  {
    name: "Vendor Dashboard",
    routePath: "/vendor-dashboard/dashboard",
  },
  {
    name: "Vendor Add Hotel",
    routePath: "/vendor-dashboard/add-hotel",
  },
  {
    name: "Vendor Booking",
    routePath: "/vendor-dashboard/booking",
  },
  {
    name: "Vendor Hotels",
    routePath: "/vendor-dashboard/hotels",
  },
  {
    name: "Vendor Recovery",
    routePath: "/vendor-dashboard/recovery",
  },
  {
    name: "Logout",
    routePath: "/others-pages/login",
  },
];

export const categorieMegaMenuItems = [
  {
    id: 1,
    menuCol: [
      {
        id: 1,
        megaBanner: "/img/backgrounds/2.png",
        title: "Things to do on your flights",
        btnText: "See Flights",
        btnRoute: "/flight/flight-list-v1",
        menuItems: [
          {
            id: 1,
            title: "Flight List",
            menuList: [
              {
                name: "Flight List v1",
                routePath: "/flight/flight-list-v1",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const categorieMobileItems = [
  {
    id: 1,
    title: "Flights",
    menuItems: [
      {
        id: 1,
        title: "Flight List",
        menuList: [
          {
            name: "Flight List v1",
            routePath: "/flight/flight-list-v1",
          },
        ],
      },
    ],
  },
];
