import './slider.scss';

import Button from '../Common/Button/Button';
import ForAllList from '../Common/ForAllList/ForAllList';

const Slider = (props) => {
    let slides = props.sliderData.map((slide, index) => {
        console.log(slide);
        return <ForAllList class={`${props.class}_slider`} type={`${props.class}_slider`} listItems={slide.slideList}/>
    })

    return(
        <>
            <div className={`${props.class}_slider_header`}>
                <h2 className={`${props.class}_slider_headline`}>{props.text}</h2>
                <div className="slider_btns">
                    <Button
                        class='left_arrow'
                        content={
                            <svg className="left_arrow" width="17" height="11" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 1L6.5 6L1 1" stroke="#000000" strokeWidth="3"/>
                            </svg>
                        }
                    />
                    <Button
                        class='right_arrow'
                        content={
                            <svg className="right_arrow" width="17" height="11" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 1L6.5 6L1 1" stroke="#000000" strokeWidth="3"/>
                            </svg>
                        }
                    />
                </div>
            </div>
            <div className={`slider_body _${props.slideNumber}slides_body`}>
                {slides}
            </div>
        </>
    )
};

export default Slider;