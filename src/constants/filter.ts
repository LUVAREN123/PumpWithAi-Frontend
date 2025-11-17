import z from "zod";
import { NETWORKS, type Network } from "./network";
import type { Dex } from "./dex";
import { SORT_OPTIONS, type SortOption } from "./sort";
import { CHECKS, type Check } from "./checks";

export const durations = ["5m", "1h", "6h", "24h"] as const;
export type Duration = typeof durations[number]
export const DURATION_LABELS = Object.fromEntries(
    durations.map(d => [d, d.toUpperCase()])
) as Record<Duration, string>;

export const FiltersSchema = z.object({
    networks: z.array(z.custom<Network>())
                .default(Object.values(NETWORKS)),
    dexes: z.array(z.custom<Dex>()).default([]),
    sort: z.custom<SortOption>().default(SORT_OPTIONS["Trending (6H)"]),

    liquidityMin: z.number().optional(),
    liquidityMax: z.number().optional(),

    marketcapMin: z.number().optional(),
    marketcapMax: z.number().optional(),

    volumeMin: z.number().optional(),
    volumeMax: z.number().optional(),

    ageMin: z.number().optional(),
    ageMax: z.number().optional(),

    txMin: z.number().optional(),
    txMax: z.number().optional(),
    txDuration: z.custom<Duration>().default("24h"),

    buysMin: z.number().optional(),
    buysMax: z.number().optional(),
    buysDuration: z.custom<Duration>().default("24h"),

    sellsMin: z.number().optional(),
    sellsMax: z.number().optional(),
    sellsDuration: z.custom<Duration>().default("24h"),

    buyTaxMin: z.number().optional(),
    buyTaxMax: z.number().optional(),
    sellTaxMin: z.number().optional(),
    sellTaxMax: z.number().optional(),

    checks: z.array(z.custom<Check>()).default([CHECKS["Dex Paid"]])
})

export type Filters = z.infer<typeof FiltersSchema>;