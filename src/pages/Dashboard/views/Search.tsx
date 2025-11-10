import React, { useState } from "react";
import type { StepName } from "..";
import { useWallets } from "@privy-io/react-auth/solana";
import { useConnectWallet } from "@privy-io/react-auth";
import sendSOL from "../../../services/sendSOL";

export default function Search({ setStep }: { setStep: React.Dispatch<React.SetStateAction<StepName>> }) {
  const [active, setActive] = useState<string>("Liquidity Lock %")

  const { wallets } = useWallets()
  const { connectWallet } = useConnectWallet()

  const handleTransaction = () => {
    connectWallet({
      walletList: ['detected_solana_wallets', 'phantom', 'solflare', 'coinbase_wallet', 'bitget_wallet', 'binance', 'binanceus']
    })
    console.log(wallets)
    sendSOL(wallets[0])
  }

  const templates = [
    {
      label: "Liquidity Lock %",
      description: "Find stable, community-backed tokens that show real trading activity and steady social sentiment. (Solid Liquidity)"
    },
    {
      label: "Fresh Launch Radar",
      description: "Spot brand-new Pump.fun or DexScreener launches showing organic early traction and whale-free distribution."
    },
    {
      label: "Social Hype Mode",
      description: "Find coins going viral on Crypto Twitter and Telegram before they reach major exposure."
    },
    {
      label: "Whale Momentum",
      description: "Filter for tokens whales are accumulating — smart money signals strong conviction."
    },
    {
      label: "Pump & Dump det..",
      description: "Automatically hides tokens with red flags, sudden liquidity drains, or unhealthy holder patterns."
    },
    {
      label: "Moonshot Picks",
      description: "Filter for small-cap, high-volatility tokens with a hint of hype and strong early trading signals."
    },
    {
      label: "Rebound Sniper",
      description: "Find tokens that dumped hard but are now showing rebound signals — where traders are re-entering before the full recovery."
    },
    {
      label: "Community Revival",
      description: "Spot older projects getting revived by new investor attention and rising social or trading activity — potential comeback coins."
    },
  ]

  return (
    <>
      <button
        className="navigation-btn"
        onClick={() => setStep("interactive")}
      >
        <span className="material-symbols-rounded">close</span>
      </button>
      <div className="templates-section">
        <div className="templates-header">
          <h2>Choose from Templates</h2>
          <p>Select a ready-made filter strategy to instantly analyze tokens that match your trading style</p>
        </div>
        <div className="templates-container">
          {templates.map((template, idx) => (
            <Template
              key={idx}
              label={template.label}
              description={template.description}
              setActive={setActive}
              active={active}
            />
          ))}
        </div>
        <button className="show-more-btn">Check all templates</button>
      </div>
      <div className="divider">
        <span className="line" />
        <span>OR</span>
        <span className="line" />
      </div>
      <button className="advanced-btn">
        <div>
          <h3>Start from Scratch</h3>
          <p>Find stable, community-backed tokens that show real trading activity and steady social sentiment. (Solid Liquidity)</p>
        </div>
        <span>Select</span>
      </button>
      <div className="payment-footer">
        <div className="total-fee">
          <span>Total Fees: 0.2 SOL</span>
          <p>(You’ll need to pay this fee to start the AI Engine in the next page)</p>
        </div>
        <button className="payment-btn" onClick={() => handleTransaction()}>
          <img src="/logoBright.svg" alt="logo" />
          Start AI Search
        </button>
      </div>
    </>
  )
}

function Template({
  label,
  description,
  active,
  setActive
}: {
  label: string,
  description: string,
  active: string,
  setActive: React.Dispatch<React.SetStateAction<string>>
}) {
  return (
    <button
      className="template-box"
      data-active={active == label}
      onClick={(e) => {
        e.currentTarget.blur()
        setActive(label)
      }}
    >
      <div>
        <span>{label}</span>
        <div className="template-checkbox">
          <div className="template-checkbox-marker"></div>
        </div>
      </div>
      <p>{description}</p>
    </button>
  )
}