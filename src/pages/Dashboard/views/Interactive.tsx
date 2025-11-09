import React from "react"
import type { StepName } from ".."

export default function Interactive({ setStep }: { setStep: React.Dispatch<React.SetStateAction<StepName>> }) {
  const suggestions = [
    {
      label: "Liquidity Lock %",
      filterString: ""
    },
    {
      label: "Pump.fun Only",
      filterString: ""
    },
    {
      label: "Exclude Rugs / Blacklist",
      filterString: ""
    },
    {
      label: "Twitter Mentions (24hr)",
      filterString: ""
    },
  ]

  return (
    <>
      <button
        className="interactive-bar"
        onClick={() => setStep("search")}
      >
        <span>Click here to get started...</span>
        <div className="interactive-btn">
          <span className="material-symbols-rounded">arrow_upward_alt</span>
        </div>
      </button>
      <div className="default-suggestions">
        <span>Default Suggestions</span>
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            gap: "1.5rem"
          }}
        >
          {suggestions.map((suggestion, idx) => (
            <button
              key={idx}
              className="suggestion-btn"
            >
              {suggestion.label}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
