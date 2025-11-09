import { NavLink } from 'react-router-dom'

import './styles.css'
import { useOverlay } from '../../../contexts/OverlayContext'

export default function Header({
    variant = "main"
}:{
    variant?: "main" | "dashboard"
}) {
    const routes = [
        {
            path: "/",
            label: "Home"
        },
        {
            path: "/about",
            label: "About"
        },
        {
            path: "/guides",
            label: "Guides"
        },
        {
            path: "/support",
            label: "Support"
        },
    ]

    const { openOverlay } = useOverlay()

  return (
    <header id="header" role='banner' aria-label='Site Header' no-select="true" data-variant={variant}>
        <NavLink
            to={variant == "main" ? "/" : "/dashboard"}
            className='logo'
            aria-label='Go to homepage'
            style={({ isActive }) => ({
                pointerEvents: isActive ? 'none' : 'auto'
            })}
            end
        >
            <img src="/logoBright.svg" alt="PumpWithAI logo" />
        </NavLink>
        {variant == "main" && <nav id="nav" role='navigation' aria-label='Primary Navigation'>
            {routes.map((route, index) => (
                <NavLink
                    key={index}
                    to={route.path}
                    className="nav-link"
                    aria-label={`Go to ${route.label}`}
                    style={({ isActive }) => ({
                        pointerEvents: isActive ? 'none' : 'auto'
                    })}
                >
                    {route.label}
                </NavLink>
            ))}
        </nav>}
        <div className="auth-header" role="navigation" aria-label="Authentiation Options">
            {
                variant == "main"
                    &&
                <>
                    <button
                        className="auth-btn register"
                        onClick={() => openOverlay({ type: "register" })}
                        aria-label="Register a new account"
                    >
                        Sign up
                    </button>
                    <button
                        className="auth-btn login"
                        onClick={() => openOverlay({ type: "login" })}
                        aria-label="Log in to your account"
                    >
                        Login
                    </button>
                </>
            }
            {
                variant == "dashboard"
                    &&
                <button className="user-profile">
                    <div className="user-icon">
                        <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                    </div>
                    <div className="user-title">Halsey L.</div>
                    <div className="dropdown-arrow">
                        <span className="material-symbols-rounded">keyboard_arrow_down</span>
                    </div>
                </button>
            }
        </div>
    </header>
  )
}