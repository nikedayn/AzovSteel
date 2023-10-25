import './slider.scss';

import {useRef} from 'react';
import PopularSlide from './PopularSlide/PopularSlide';
import SpecialSlide from './SpecialSlide/SpecialSlide';

const Slider = (props) => {
    let slideBefore;
    if(props.slideIsNow == 1) {
        slideBefore = props.sliderData.find(slide => slide.id == props.sliderData.length);
    }
    else {
        slideBefore = props.sliderData.find(slide => slide.id == props.slideIsNow - 1);   
    }

    let slideNow;
    slideNow = props.sliderData.find(slide => slide.id == props.slideIsNow);

    let slideAfter;
    if(props.slideIsNow == props.sliderData.length) {
        slideAfter = props.sliderData.find(slide => slide.id == 1);
    }
    else {
        slideAfter = props.sliderData.find(slide => slide.id == props.slideIsNow + 1);   
    }

    let slideItem = (itemsInformation) => {
        switch(props.class) {
            case 'popular': {
                return <PopularSlide itemsInformation={itemsInformation} class={`${props.class}_slider`}/>
            }
            case 'special': {
                return <SpecialSlide itemsInformation={itemsInformation} class={`${props.class}_slider`}/>
            }
        }
    }

    const refs = {
        sliderBody: useRef(null),
    }

    return(
        <>
            <div className={`${props.class}_slider_header`}>
                <h2 className={`${props.class}_slider_headline`}>{props.text}</h2>
                <div className="slider_btns">
                    <button onClick={() => {
                        if (!refs.sliderBody.current.classList.contains('slideRight')) {
                            refs.sliderBody.current.classList.add('slideLeft');
                        }
                    }} className='left_arrow_btn'>
                        <svg className="left_arrow" width="17" height="11" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 1L6.5 6L1 1" stroke="#000000" strokeWidth="3"/>
                        </svg>
                    </button>
                    <button onClick={() => {
                        if (!refs.sliderBody.current.classList.contains('slideLeft')) {
                            refs.sliderBody.current.classList.add('slideRight');
                        }
                    }}
                    className='right_arrow_btn'>
                        <svg className="right_arrow" width="17" height="11" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 1L6.5 6L1 1" stroke="#000000" strokeWidth="3"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div onAnimationEndCapture={() => {
                if (refs.sliderBody.current.classList.contains('slideLeft')) {
                    props.sliderFunction(props.class, 'left');
                    refs.sliderBody.current.classList.remove('slideLeft');
                }
                else if (refs.sliderBody.current.classList.contains('slideRight')) {
                    props.sliderFunction(props.class, 'right');
                    refs.sliderBody.current.classList.remove('slideRight');
                }
            }} ref={refs.sliderBody} className={`slider_body`}>
                {slideItem(slideBefore.slideList)}
                {slideItem(slideNow.slideList)}
                {slideItem(slideAfter.slideList)}
            </div>
        </>
    )
};

export default Slider;