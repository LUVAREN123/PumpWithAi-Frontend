import { NavLink } from 'react-router-dom'

import './styles.css'

export default function Header() {
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
            path: "/docs",
            label: "Docs"
        },
        {
            path: "/support",
            label: "Support"
        },
    ]

  return (
    <header id="header" role='banner' aria-label='Site Header' no-select="true">
        <NavLink
            to="/"
            className='logo'
            aria-label='Go to homepage'
            style={({ isActive }) => ({
                pointerEvents: isActive ? 'none' : 'auto'
            })}
        >
            <img src="/logo.svg" alt="Luvaren logo" />
        </NavLink>
        <nav id="nav" role='navigation' aria-label='Primary Navigation'>
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
        </nav>
        <div className="auth-header" role="navigation" aria-label="Authentiation Options">
          <button
            className="auth-btn register"
            onClick={() => {}}
            aria-label="Register a new account"
          >
            Sign up
          </button>
          <button
            className="auth-btn login"
            onClick={() => {}}
            aria-label="Log in to your account"
          >
            Login
          </button>
        </div>
    </header>
  )
}