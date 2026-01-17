import styles from "./CountryItem.module.css";
import type { Country } from "@/schemas/country";

export default function CountryListItem({ country }: { country: Country }) {
    return (
        <li className={styles.countryItem}>
            <span>{country.emoji}</span>
            <span>{country.country}</span>
        </li>
    );
}
