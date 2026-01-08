import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Product from "./pages/product";
import Home from "./pages/home";
import Pricing from "./pages/pricing";
// import getProjectName from "./utils/getProjectName";
import NotFound from "./pages/notFound";

function App() {
    // const base = `/${getProjectName()}`;

    return (
        <BrowserRouter basename={"/"}>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="product" element={<Product />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
