import { NavLink } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react'

import './styles.css'

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
            <SignedOut>
                <SignUpButton mode='modal' oauthFlow='popup'>
                    <button
                        className="auth-btn register"
                        aria-label="Register a new account"
                    >
                        Sign up
                    </button>
                </SignUpButton>
                <SignInButton mode='modal' oauthFlow='popup'>
                    <button
                        className="auth-btn login"
                        aria-label="Log in to your account"
                    >
                        Login
                    </button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton showName />
            </SignedIn>
        </div>
    </header>
  )
}