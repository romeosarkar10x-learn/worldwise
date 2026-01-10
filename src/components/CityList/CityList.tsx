import styles from "./CityList.module.css";

export default function CityList() {
    return (
        <ul className={styles.cityList}>
            <li>CITY 0</li>
            <li>CITY 1</li>
            <li>CITY 2</li>
            <li>CITY 3</li>
        </ul>
    );
}
