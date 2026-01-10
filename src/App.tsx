import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Homepage from "./pages/HomePage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";

function App() {
    // const base = `/${getProjectName()}`;

    return (
        <BrowserRouter basename={"/"}>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="app" element={<AppLayout />}>
                    <Route path="cities" element={<p>List of cities</p>} />
                    <Route path="countries" element={<p>Countries</p>} />
                    <Route path="form" element={<p>Form</p>} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/product" element={<Product />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
