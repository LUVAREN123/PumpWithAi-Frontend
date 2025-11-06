import React from "react";
import type { RouteObject } from "react-router-dom";

const MainLayout = React.lazy(() => import("../layouts/MainLayout"))
const DashboardLayout = React.lazy(() => import("../layouts/DashboardLayout"))

const Home = React.lazy(() => import("../pages/Home"))
const About = React.lazy(() => import("../pages/About"))
const Support = React.lazy(() => import("../pages/Support"))
const Guides = React.lazy(() => import("../pages/Guides"))
const Dashboard = React.lazy(() => import("../pages/Dashboard"))
const Orders = React.lazy(() => import("../pages/Orders"))
const Referrals = React.lazy(() => import("../pages/Referrals"))

const routes: RouteObject[] = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "support", element: <Support /> },
            { path: "guides", element: <Guides /> },
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: "orders", element: <Orders /> },
            { path: "referrals", element: <Referrals /> }
        ]
    }
]

export default routes