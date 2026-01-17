import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Homepage from "@/pages/HomePage";
import Product from "@/pages/Product";
import Pricing from "@/pages/Pricing";
import PageNotFound from "@/pages/PageNotFound";
import Login from "@/pages/Login";
import AppLayout from "@/pages/AppLayout";
import CityList from "@/components/CityList";
import CountryList from "@/components/CountryList/CountryList";
import City from "@/components/City/City";
import { CitiesContextProvider } from "./contexts/CitiesContextProvider";
import Form from "@/pages/Form";

function App() {
    return (
        <CitiesContextProvider>
            <BrowserRouter basename={"/"}>
                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="app" element={<AppLayout />}>
                        <Route path="cities" element={<CityList />} />
                        <Route path="city/:id" element={<City />} />
                        <Route path="countries" element={<CountryList />} />
                        <Route path="form" element={<Form />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </CitiesContextProvider>
    );
}

export default App;
