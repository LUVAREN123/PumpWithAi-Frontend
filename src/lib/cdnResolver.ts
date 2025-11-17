import type { Network } from "../constants/network"
import type { Dex } from "../constants/dex"

const CDN = "https://cdn.pumpwithai.com"

export const networkLogo = (slug: Network) => `${CDN}/assets/networks/${slug}.svg`
export const dexLogo = (slug: Dex) => `${CDN}/assets/dexes/${slug}.svg`