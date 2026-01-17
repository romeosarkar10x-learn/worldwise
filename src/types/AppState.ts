import type { City } from "@/schemas/city";

export type AppState = { state: "loading" } | { state: "err" } | { state: "ok"; cities: City[] };
