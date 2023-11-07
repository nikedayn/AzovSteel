import { connect } from "react-redux";
import ProductsPage from "./ProductsPage";
import { changePage } from "../../redux/reducers/productsReducer";

const mapStateToProps = (state) => ({
    products: state.productsReducer.products,
    pageIsNow: state.productsReducer.pageIsNow
})

const mapDispatchToProps = {
    changePage: changePage
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);