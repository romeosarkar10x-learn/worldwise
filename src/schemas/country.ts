import z from "zod";

export const sCountry = z.object({
    country: z.string(),
    emoji: z.string(),
});

export type Country = z.infer<typeof sCountry>;
