import { NavLink } from "react-router";

export default function PageNav() {
    return (
        <ul className="flex gap-[1.5em] list-none">
            <li>
                <NavLink to="/">Home</NavLink>{" "}
            </li>
            <li>
                <NavLink to="/product">Product</NavLink>{" "}
            </li>
            <li>
                <NavLink to="/pricing">Pricing</NavLink>{" "}
            </li>
        </ul>
    );
}
