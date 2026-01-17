import styles from "./CityList.module.css";
import Spinner from "../Spinner";
import CityListItem from "@/components/CityListItem";
import Message from "../Message";
import { useCitiesContext } from "@/hooks/useCitiesContext";

export default function CityList() {
    const citiesCtx = useCitiesContext();

    if (citiesCtx.cities.isLoading) {
        return <Spinner />;
    }

    if (citiesCtx.cities.isError) {
        return <Message message="Err loading cities" />;
    }

    if (citiesCtx.cities.data.length === 0) {
        return <Message message="Add your first city by clicking on a city on the map!" />;
    }

    return (
        <ul className={styles.cityList}>
            {citiesCtx.cities.data.map((city) => (
                <CityListItem key={city.id} city={city} />
            ))}
        </ul>
    );
}
