import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    popularSlider: {
        slideIsNow: 1,
        slides: [
            {
                id: 3,
                slideList: [
                    {
                        text: '3',
                        imgNumber: 3
                    },
                    {
                        text: '3',
                        imgNumber: 3
                    },
                    {
                        text: '3',
                        imgNumber: 3
                    },
                    {
                        text: '3',
                        imgNumber: 3
                    },
                ]
            },
            {
                id: 1,
                slideList: [
                    {
                        text: '1',
                        imgNumber: 1
                    },
                    {
                        text: '1',
                        imgNumber: 1
                    },
                    {
                        text: '1',
                        imgNumber: 1
                    },
                    {
                        text: '1',
                        imgNumber: 1
                    },
                ]
            },
            {
                id: 2,
                slideList: [
                    {
                        text: '2',
                        imgNumber: 2
                    },
                    {
                        text: '2',
                        imgNumber: 2
                    },
                    {
                        text: '2',
                        imgNumber: 2
                    },
                    {
                        text: '2',
                        imgNumber: 2
                    },
                ]
            }
        ]
    }
}

export const changeSlide = createAction('sliders/change', (sliderType, whitchWay) => ({
    payload: {
        sliderType: sliderType,
        whitchWay: whitchWay
    }
}));

const slidersReducer = createReducer(initialState, (builder) => {
    builder.addCase(changeSlide, (state, action) => {
        switch(action.payload.sliderType) {
            case 'popular': {
                if (action.payload.whitchWay == 'left') {
                    if (state.popularSlider.slideIsNow == 1) {
                        state.popularSlider.slideIsNow = state.popularSlider.slides.length;
                        console.log(state.popularSlider.slideIsNow);
                        break;
                    }
                    else {
                        state.popularSlider.slideIsNow--;
                        console.log(state.popularSlider.slideIsNow);
                        break;
                    }
                }
                else if (action.payload.whitchWay == 'right') {
                    if (state.popularSlider.slideIsNow == state.popularSlider.slides.length) {
                        state.popularSlider.slideIsNow = 1;
                        console.log(state.popularSlider.slideIsNow);
                        break;
                    }
                    else {
                        state.popularSlider.slideIsNow++;
                        console.log(state.popularSlider.slideIsNow);
                        break;
                    }
                }
            }
        }
    });
});

export default slidersReducer;