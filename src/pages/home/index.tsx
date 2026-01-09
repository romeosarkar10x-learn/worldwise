import PageNav from "@/components/PageNav";
import { Link } from "react-router";
import styles from "./Gadha.module.css";

export default function Home() {
    return (
        <>
            <PageNav />
            <h1>This is the home page!</h1>
            <p>This is a paragraph</p>
            <ul className={styles["my-lit"]}>
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
            </ul>
            <ul>
                <li>
                    <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                    <Link to="/product">Product</Link>
                </li>
            </ul>
        </>
    );
}
