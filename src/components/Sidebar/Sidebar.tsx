import AppNav from "@/components/AppNav";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";

import styles from "./Sidebar.module.css";
import { Outlet } from "react-router";

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />
            <Outlet />
            <p>List of cities:</p>

            <Footer />
        </div>
    );
}
