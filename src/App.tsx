import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Product from "./pages/product";
import Home from "./pages/home";
import Pricing from "./pages/pricing";
import getRepoName from "./utils/getRepoName";
import { getPackageJSON } from "./utils/getPackageJSON";

function App() {
    const base = `/${getRepoName(getPackageJSON().repository.url)}`;

    return (
        <BrowserRouter basename={base}>
            <Routes>
                <Route path="home" element={<Home />}></Route>
                <Route path="product" element={<Product />}></Route>
                <Route path="pricing" element={<Pricing />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
