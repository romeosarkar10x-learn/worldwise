import { useEffect, useState } from "react";
import { CitiesContext, type FetchType } from "./CitiesContext";
import z from "zod";
import { sCity, type City } from "@/schemas/city";

const API_BASE_URL = "http://localhost:8080";

export function CitiesContextProvider({ children }: { children: React.ReactNode }) {
    const [citiesState, setCitiesState] = useState<FetchType<{ data: City[] }>>({ isLoading: true });
    const [currCity, setCurrCity] = useState<({ id: string } & FetchType<{ data: City }>) | { id: undefined }>({
        id: undefined,
    });

    useEffect(() => {
        (async function getCities() {
            let error: unknown;

            try {
                const res = await fetch(`${API_BASE_URL}/cities`);

                if (res.status !== 200) {
                    error = new Error(`${API_BASE_URL}/cities status !== 200 [${res.status}]`);
                    return;
                }

                const resBodyJSON = await res.json();

                const sAPIRes = z.array(sCity);

                const apiResValidated = await sAPIRes.parseAsync(resBodyJSON);
                setCitiesState({ isLoading: false, isError: false, data: apiResValidated });
            } catch (e) {
                error = e;
            } finally {
                if (error !== undefined) {
                    setCitiesState({ isLoading: false, isError: true, error });
                }
            }
        })();
    }, []);

    async function getCity(id: string) {
        let error: unknown;

        try {
            setCurrCity({ id, isLoading: true });
            const res = await fetch(`${API_BASE_URL}/cities/${id}`);

            if (res.status !== 200) {
                error = new Error(`${API_BASE_URL}/cities/${id} status !== 200 [${res.status}]`);
                return;
            }

            const resBodyJSON = await res.json();

            const city = await sCity.parseAsync(resBodyJSON);

            setCurrCity({ id, data: city, isLoading: false, isError: false });
        } catch (e) {
            error = e;
        } finally {
            if (error !== undefined) {
                setCurrCity({ id, isLoading: false, isError: true, error });
            }
        }
    }

    function setCurrCityID(id: string) {
        getCity(id);
    }

    return (
        <CitiesContext.Provider value={{ cities: citiesState, currCity, setCurrCityID }}>
            {children}
        </CitiesContext.Provider>
    );
}
