export const NETWORKS = {
  Ethereum: "eth",
  "BNB Chain": "bsc",
  Arbitrum: "arbitrum",
  "Polygon POS": "polygon_pos",
  opBNB: "opbnb",
  ZkSync: "zksync",
  Base: "base",
  Mantle: "mantle",
  Optimism: "optimism",
  Avalanche: "avax",
  Fantom: "ftm",
  Linea: "linea",
  Cronos: "cro",
  "Gnosis XDAI": "xdai",
  Tron: "tron",
  "Kucoin Community Chain": "kcc",
  Blast: "blast",
  Scroll: "scroll",
  "Manta Pacific": "manta-pacific",
  "Merlin Chain": "merlin-chain",
  Bitlayer: "bitlayer",
  "zkLink Nova": "zklink-nova",
  Gravity: "gravity-alpha",
  "Morph L2": "morph-l2",
  Berachain: "berachain",
  Abstract: "abstract",
  Hashkey: "hashkey",
  Sonic: "sonic",
  Story: "story",
  Unichain: "unichain",
  "World Chain": "world-chain",
  Soneium: "soneium",
  "Monad Testnet": "monad-testnet",
  Zircuit: "zircuit",
  Solana: "solana",
  "Sui Network": "sui-network",
} as const satisfies Record<string, string>;

export type Network = typeof NETWORKS[keyof typeof NETWORKS];

export type NetworkLabel = keyof typeof NETWORKS;

export const NETWORK_LABELS = Object.fromEntries(
  Object.entries(NETWORKS).map(([label, slug]) => [slug, label])
) as Record<Network, NetworkLabel>;

export const NetworkType = NETWORKS