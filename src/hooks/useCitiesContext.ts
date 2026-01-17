import { CitiesContext } from "@/contexts/CitiesContext";
import { useContext } from "react";

export function useCitiesContext() {
    const citiesContext = useContext(CitiesContext);

    if (citiesContext === undefined) {
        const message = "'citiesContext' is undefined";
        console.error(message);
        throw new Error(message);
    }

    return citiesContext;
}
