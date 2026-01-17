import z from "zod";
import { sCountry } from "./country";

export const sCity = sCountry.extend({
    id: z.string(),
    cityName: z.string(),
    date: z.string(),
    notes: z.string(),
    position: z.object({
        lat: z.number(),
        lng: z.number(),
    }),
});

export type City = z.infer<typeof sCity>;
