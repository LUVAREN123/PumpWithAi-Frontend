export const CHECKS = {
    "Dex Paid": "dex_paid",
    "GT Score": "good_gt_score",
    Socials: "has_social"
} as const satisfies Record<string, string>;

export type Check = typeof CHECKS[keyof typeof CHECKS];

export type CheckLabel = keyof typeof CHECKS;

export const CHECK_LABELS = Object.fromEntries(
    Object.entries(CHECKS).map(([label, slug]) => [slug, label])
) as Record<Check, CheckLabel>;