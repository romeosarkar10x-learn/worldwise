import { Link } from "react-router";

export default function PageNav() {
    return (
        <ul className="flex gap-[1.5em] list-none">
            <li>
                <Link to="/">Home</Link>{" "}
            </li>
            <li>
                <Link to="/product">Product</Link>{" "}
            </li>
            <li>
                <Link to="/pricing">Pricing</Link>{" "}
            </li>
        </ul>
    );
}
