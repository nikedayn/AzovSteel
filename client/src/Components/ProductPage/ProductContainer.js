import { connect } from "react-redux";
import ProductPage from "./ProductPage";

const mapStateToProps = (state) => ({
    productThatNow: state.productsReducer.productThatNow,
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);