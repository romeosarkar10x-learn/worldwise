// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useState } from "react";

import styles from "./Form.module.css";
import { convertToEmoji } from "@/utils/convertToEmoji";
import Button from "@/components/Button";
import BackButton from "@/components/BackButton";

function formatDate(date: Date | undefined) {
    if (date === undefined) {
        return "";
    }

    return date.toISOString().slice(0, 16);
}

function Form() {
    const [cityName, setCityName] = useState("");
    const [country, setCountry] = useState("");
    const [date, setDate] = useState<Date | undefined>();
    const [notes, setNotes] = useState("");

    const emoji = convertToEmoji(country);

    return (
        <form className={styles.form}>
            <div className={styles.row}>
                <label htmlFor="cityName">City name</label>
                <input id="cityName" onChange={(e) => setCityName(e.target.value)} value={cityName} />
                {<span className={styles.flag}>{emoji}</span>}
            </div>

            <div className={styles.row}>
                <label htmlFor="date">When did you go to {cityName}?</label>
                <input
                    id="date"
                    type="datetime-local"
                    onChange={(e) => {
                        if (e.target.value === "") {
                            setDate(undefined);
                            return;
                        }

                        const newDate = new Date(Date.parse(e.target.value));
                        setDate(newDate);
                    }}
                    value={formatDate(date)}
                />
            </div>

            <div className={styles.row}>
                <label htmlFor="notes">Notes about your trip to {cityName}</label>
                <textarea id="notes" onChange={(e) => setNotes(e.target.value)} value={notes} />
            </div>

            <div className={styles.buttons}>
                <Button type="primary" onClick={() => {}}>
                    Add
                </Button>
                <BackButton />
            </div>
        </form>
    );
}

export default Form;
