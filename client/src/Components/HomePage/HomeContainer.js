import { connect } from "react-redux";
import HomePage from "./HomePage";
import { changeSlide } from "../../redux/reducers/slidersReducer";

const mapStateToProps = (state) => ({
    popular: state.slidersReducer.popularSlider,
    special: state.slidersReducer.specialSlider
})

const mapDispatchToProps = {
    changeSlide: changeSlide
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);