import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton
} from "@clerk/clerk-react"

export default function AuthHeader() {
  return (
    <>
      <SignedOut>
        <SignUpButton mode="modal" oauthFlow="popup">
          <button className="auth-btn register">Sign up</button>
        </SignUpButton>
        <SignInButton mode="modal" oauthFlow="popup">
          <button className="auth-btn login">Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton showName />
      </SignedIn>
    </>
  )
}