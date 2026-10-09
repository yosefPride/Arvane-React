import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/layout/Layout/Layout";
import { ROUTES } from "@/constants/routes";
import NotFound from "@/pages/NotFound/NotFound";

/** Code-split a page: its chunk is fetched the first time the route is visited. */
const page = (load) => () => load().then((module) => ({ Component: module.default }));

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: ROUTES.home, lazy: page(() => import("@/pages/Home/Home")) },
        { path: ROUTES.menu, lazy: page(() => import("@/pages/Menu/Menu")) },
        { path: ROUTES.menuItem, lazy: page(() => import("@/pages/MenuItem/MenuItem")) },
        { path: ROUTES.cart, lazy: page(() => import("@/pages/Cart/Cart")) },
        { path: ROUTES.locations, lazy: page(() => import("@/pages/Locations/Locations")) },
        { path: ROUTES.contact, lazy: page(() => import("@/pages/Contact/Contact")) },
        { path: ROUTES.reserve, lazy: page(() => import("@/pages/ReserveTable/ReserveTable")) },
        { path: ROUTES.about, lazy: page(() => import("@/pages/About/About")) },
        { path: ROUTES.events, lazy: page(() => import("@/pages/Events/Events")) },
        { path: ROUTES.giftCards, lazy: page(() => import("@/pages/GiftCards/GiftCards")) },
        { path: ROUTES.joinTeam, lazy: page(() => import("@/pages/JoinTeam/JoinTeam")) },
        { path: ROUTES.memberships, lazy: page(() => import("@/pages/Memberships/Memberships")) },
        { path: ROUTES.termsPrivacy, lazy: page(() => import("@/pages/Legal/TermsPrivacy")) },
        { path: ROUTES.notice, lazy: page(() => import("@/pages/Legal/Notice")) },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);
