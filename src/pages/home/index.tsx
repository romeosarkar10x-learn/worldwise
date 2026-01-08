import PageNav from "@/components/PageNav";
import { Link } from "react-router";

export default function Home() {
    return (
        <>
            <PageNav />
            <h1>This is the home page!</h1>
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
