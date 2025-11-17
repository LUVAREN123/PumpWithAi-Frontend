export const SORT_OPTIONS = {
    "Trending (5M)": "m5_trending",
    "Trending (1H)": "h1_trending",
    "Trending (6H)": "h6_trending",
    "Trending (24H)": "h24_trending",
    "Transaction Count (24H, Descending)": "h24_tx_count_desc",
    "Volume (24H, Descending)": "h24_volume_usd_desc",
    "Price Change Percentage (5M, Ascending)": "m5_price_change_percentage_asc",
    "Price Change Percentage (1H, Ascending)": "h1_price_change_percentage_asc",
    "Price Change Percentage (6H, Ascending)": "h6_price_change_percentage_asc",
    "Price Change Percentage (24H, Ascending)": "h24_price_change_percentage_asc",
    "Price Change Percentage (5M, Descending)": "m5_price_change_percentage_desc",
    "Price Change Percentage (1H, Descending)": "h1_price_change_percentage_desc",
    "Price Change Percentage (6H, Descending)": "h6_price_change_percentage_desc",
    "Price Change Percentage (24H, Descending)": "h24_price_change_percentage_desc",
    "Market Cap (Ascending)": "fdv_usd_asc",
    "Market Cap (Descending)": "fdv_usd_desc",
    "Liquidity (Ascending)": "reserve_in_usd_asc",
    "Liquidity (Descending)": "reserve_in_usd_desc",
    "Pool Created (Descending)": "pool_created_at_desc"
} as const satisfies Record<string, string>;

export type SortOption = typeof SORT_OPTIONS[keyof typeof SORT_OPTIONS];

export type SortOptionLabel = keyof typeof SORT_OPTIONS;

export const SORT_OPTION_LABELS = Object.fromEntries(
    Object.entries(SORT_OPTIONS).map(([label, slug]) => [slug, label])
) as Record<SortOption, SortOptionLabel>;
