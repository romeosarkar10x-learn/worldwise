import { formatDate } from "@/utils/formatDate";
import styles from "./CityListItem.module.css";
import type { City } from "@/schemas/city";
import { Link } from "react-router";

export default function CityListItem({ city }: { city: City }) {
    return (
        <li>
            <Link className={styles.cityItem} to={`../city/${city.id}`}>
                <span className={styles.emoji}>{city.emoji}</span>
                <h3 className={styles.name}>{city.cityName}</h3>
                <time className={styles.date}>{formatDate(city.date)}</time>
                <button className={styles.deleteBtn}>&times;</button>
            </Link>
        </li>
    );
}
