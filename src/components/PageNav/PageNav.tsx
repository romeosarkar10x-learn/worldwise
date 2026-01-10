import { NavLink } from "react-router";
import styles from "./PageNav.module.css";
import Logo from "../Logo";

export default function PageNav() {
    return (
        <nav className={styles.nav}>
            <Logo />
            <ul className="flex gap-[1.5em] list-none">
                <li>
                    <NavLink to="/product">Product</NavLink>
                </li>
                <li>
                    <NavLink to="/pricing">Pricing</NavLink>
                </li>
                <li>
                    <NavLink className={styles.ctaLink} to="/login">
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
