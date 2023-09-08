//header
import Header from "./Components/Header/Header";

//для новых страниц
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductsContainer from "./Components/ProductsPage/ProductsContainer";

const App = () => {
    return(
        <div className="wraper">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<ProductsContainer/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;