import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Product from "./pages/product";
import Home from "./pages/home";
import Pricing from "./pages/pricing";
import getRepoName from "./utils/getRepoName";

function App() {
    return (
        <BrowserRouter basename={`/${getRepoName()}`}>
            <Routes>
                <Route path="home" element={<Home />}></Route>
                <Route path="product" element={<Product />}></Route>
                <Route path="pricing" element={<Pricing />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
