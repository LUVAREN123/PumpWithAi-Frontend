import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

export default function MainLayout() {
  return (
    <>
        <Header />
        <main id='main' role='main' aria-label='Page Content'>
            <Outlet />
        </main>
        <Footer />
    </>
  )
}
