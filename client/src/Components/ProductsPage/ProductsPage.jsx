import Section from "../Common/Section/Section";
import Filter from "./Filter/Filter";
import ProductsHeader from "./ProductsHeader/ProductsHeader";
import ProductsList from "./ProductsList/ProductsList";
import AboutStainless from "../Common/AboutStainless/AboutStainless";

const ProductsPage = (props) => {
    console.log(props.products);
    return(
        <main>
            <Section
                class='filter'
                content={[
                    <ProductsHeader/>,
                    <Filter/>
                ]}
            />
            <Section
                class='products'
                content={[
                    <ProductsList
                        tabelItems = {props.products}
                    />,
                ]}
            />
            <Section
                class='about_stainlesss'
                content={[
                    <AboutStainless
                        imgWidth={398}
                    />
                ]}
            />
        </main>
    )
};

export default ProductsPage;