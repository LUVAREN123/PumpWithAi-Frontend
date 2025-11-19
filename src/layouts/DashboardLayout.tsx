import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Sidebar from "../components/shared/Sidebar";
import { PrivyProvider } from "@privy-io/react-auth";
import { toSolanaWalletConnectors } from "@privy-io/react-auth/solana";
import DataProvider from "../contexts/DataContext";
import ModalProvider from "../contexts/ModalContext";

const PRIVY_APP_ID = import.meta.env.VITE_PRIVY_APP_ID

export default function DashboardLayout() {
  return (
    <PrivyProvider
      appId={PRIVY_APP_ID}
      config={{
        appearance: {
            walletChainType: 'solana-only',
            theme: 'dark',
        },
        externalWallets: {
          solana: { connectors: toSolanaWalletConnectors() }
        }
      }}
    >
      <DataProvider>
        <ModalProvider>
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
        </ModalProvider>
      </DataProvider>
    </PrivyProvider>
  )
}
