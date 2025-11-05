import React from "react";
import type { RouteObject } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home"))
const About = React.lazy(() => import("../pages/About"))
const Support = React.lazy(() => import("../pages/Support"))
const Docs = React.lazy(() => import("../pages/Docs"))
const Dashboard = React.lazy(() => import("../pages/Dashboard"))

const routes: RouteObject[] = [
    {
        path: "/",
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "support", element: <Support /> },
            { path: "docs", element: <Docs /> },
        ]
    },
    {
        path: "/dashboard",
        children: [
            { index: true, element: <Dashboard /> }
        ]
    }
]

export default routes