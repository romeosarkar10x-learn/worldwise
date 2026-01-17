import type { City } from "@/schemas/city";
import { createContext } from "react";

export type FetchType<T extends object> =
    | { isLoading: true }
    | ({ isLoading: false; isError: false } & T)
    | { isLoading: false; isError: true; error: unknown };

export type CitiesContextType = {
    cities: FetchType<{ data: City[] }>;
    currCity: ({ id: string } & FetchType<{ data: City }>) | { id: undefined };
    // setCurrCity: Dispatch<SetStateAction<{ id: string; data: FetchType<{ city: City }> } | object>>;
    setCurrCityID: (id: string) => void;
};

export const CitiesContext = createContext<CitiesContextType | undefined>(undefined);
