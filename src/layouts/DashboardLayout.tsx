import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Sidebar from "../components/shared/Sidebar";

export default function DashboardLayout() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header variant="dashboard" />
      <div style={{ display: "flex", flexGrow: 1, position: "relative" }}>
        <Sidebar />
        <div style={{ width: "calc(100vw - 17.4rem - 1px)" }}>
          <main role='main' aria-label='Page Content' style={{ width: "100%" }}>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
