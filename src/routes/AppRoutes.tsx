import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layouts/RootLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import ServicePage from "../pages/ServicePage.tsx";
import ContactPage from "../pages/ContactPage.tsx";
import PortfolioPage from "../pages/PortfolioPage.tsx";
import ServiceDetailsPage from "../pages/ServiceDetailsPage.tsx";
import NotFound from "../pages/NotFound.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "/service",
                element: <ServicePage/>
            },
            {
                path: "/service/:id",
                element: <ServiceDetailsPage/>
            },
            {
                path: "/portfolio",
                element: <PortfolioPage/>
            },
            {
                path: "contact-us",
                element: <ContactPage/>
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ]
    }
]);

export default router;