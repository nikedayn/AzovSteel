import Section from "../Common/Section/Section";
import ProductHeader from "./ProductHeader/ProductHeader";
import ProductsBody from "./Product/ProductBody";
import ProductsAbout from "./ProductAbout/ProductAbout";

const ProductsPage = (props) => {
    return(
        <main>
            <Section
                class='buy'
                content={[
                    <ProductHeader
                        name={props.productThatNow.name}
                        path={props.productThatNow.path}
                    />,
                    <ProductsBody/>
                ]}
            />
            <Section
                class='about'
                content={[
                    <ProductsAbout
                        descriptions={props.productThatNow.description}
                        product={props.productThatNow}
                    />
                ]}
            />
        </main>
    )
};

export default ProductsPage;