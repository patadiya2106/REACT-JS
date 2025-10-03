import { createBrowserRouter } from "react-router";
import App from "../src/App";
import Home from "../src/Compontes/Home/Home";
import Features from "../src/Compontes/Features/Features";
import Pricing from "../src/Compontes/Pricing/Pricing";
import Testimonials from "../src/Compontes/Testimonials/Testimonials";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "features",
                Component: Features
            },
            {
                path: "pricing",
                Component: Pricing
            },
            {
                path: "testimonials",
                Component: Testimonials
            },
        ]
    }
])