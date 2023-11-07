//header
import Header from "./Components/Header/Header";

//footer
import Footer from "./Components/Footer/Footer";

//для новых страниц
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeContainer from "./Components/HomePage/HomeContainer";
import CatalogPage from "./Components/CatalogPage/CatalogPage";
import ProductsContainer from "./Components/ProductsPage/ProductsContainer";
import ProductContainer from "./Components/ProductPage/ProductContainer";

const App = () => {
    return(
        <div className="wraper">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomeContainer/>}/>
                    <Route path="/sheel_metal" element={<CatalogPage/>}/>
                    <Route path="/stainless_sheel_metal" element={<ProductsContainer/>}/>
                    <Route path="/product" element={<ProductContainer/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default App;