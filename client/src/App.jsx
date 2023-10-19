//header
import Header from "./Components/Header/Header";

//footer
import Footer from "./Components/Footer/Footer";

//для новых страниц
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeContainer from "./Components/HomePage/HomeContainer";

const App = () => {
    return(
        <div className="wraper">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomeContainer/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default App;