import Spinner from "@/components/Spinner";
import Message from "@/components/Message";
import type { Country } from "@/schemas/country";
import CountryListItem from "@/components/CountryListItem";
import style from "./CountryList.module.css";
import { useCitiesContext } from "@/hooks/useCitiesContext";

export default function CountryList() {
    const { cities } = useCitiesContext();

    if (cities.isLoading) {
        return <Spinner />;
    }

    if (cities.isError) {
        return <Message message={"Add your first city by clicking on a city on the map"} />;
    }

    const countries = new Map<string, Country>();

    cities.data.forEach((city) => {
        const country: Country = { country: city.country, emoji: city.emoji };

        if (!countries.has(country.country)) {
            countries.set(country.country, country);
            console.log(country);
        }
    });

    return (
        <ul className={style.countryList}>
            {Array.from(countries.values()).map((country) => (
                <CountryListItem country={country} />
            ))}
        </ul>
    );
}
