const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        name: "Home",
      },
      {
        path: "about-us",
        component: () => import("pages/AboutPage.vue"),
        name: "AboutUs",
      },
      {
        path: "practise-areas",
        component: () => import("pages/PractiseAreasPage.vue"),
        name: "PractiseAreas",
        children: [
          {
            path: "criminal-law",
            name: "CriminalLaw",
            component: () => import("pages/PractiseAreasPage.vue"),
            children: [
              {
                path: "theft",
                name: "Theft",
                component: () => import("pages/PractiseAreasPage.vue"),
              },
              {
                path: "fraud",
                name: "Fraud",
                component: () => import("pages/PractiseAreasPage.vue"),
              },
            ],
          },
          {
            path: "family-law",
            name: "FamilyLaw",
            component: () => import("pages/PractiseAreasPage.vue"),
          },
        ],
      },
      {
        path: "team",
        component: () => import("pages/TeamPage.vue"),
        name: "Team",
      },
      {
        path: "contact-us",
        component: () => import("pages/ContactPage.vue"),
        name: "ContactUs",
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
