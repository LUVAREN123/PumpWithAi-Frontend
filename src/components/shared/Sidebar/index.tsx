import { NavLink } from "react-router-dom";

import './styles.css'

export default function Sidebar() {
    const routes = [
        {
            path: "/dashboard",
            label: "Home",
            icon: "home"
        },
        {
            path: "/dashboard/orders",
            label: "My Orders",
            icon: "shopping_cart"
        },
        {
            path: "/dashboard/referrals",
            label: "Referrals",
            icon: "campaign"
        },
        {
            path: "/support",
            label: "Support",
            icon: "contact_support"
        },
    ]

  return (
    <nav id="sidebar" role='navigation' aria-label='Primary Navigation'>
        {routes.map((route, index) => (
            <NavLink
                key={index}
                to={route.path}
                className="sidebar-link"
                aria-label={`Go to ${route.label}`}
                style={({ isActive }) => ({
                    pointerEvents: isActive ? 'none' : 'auto'
                })}
            >
                <span className="material-symbols-rounded">{route.icon}</span>
                <span>{route.label}</span>
            </NavLink>
        ))}
    </nav>
  )
}
