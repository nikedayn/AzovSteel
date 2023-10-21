import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    popularSlider: {
        slideIsNow: 1,
        slides: [
            {
                id: 1,
                slideList: [
                    {
                        text: 'Швелер',
                        imgNumber: 1
                    },
                    {
                        text: 'Швелер',
                        imgNumber: 1
                    },
                    {
                        text: 'Швелер',
                        imgNumber: 1
                    },
                    {
                        text: 'Швелер',
                        imgNumber: 1
                    },
                ]
            },
            {
                id: 2,
                slideList: [
                    {
                        text: `Балка
                        двотаврова`,
                        imgNumber: 2
                    },
                    {
                        text: `Балка
                        двотаврова`,
                        imgNumber: 2
                    },
                    {
                        text: `Балка
                        двотаврова`,
                        imgNumber: 2
                    },
                    {
                        text: `Балка
                        двотаврова`,
                        imgNumber: 2
                    },
                ]
            },
            {
                id: 3,
                slideList: [
                    {
                        text: 'Арматура',
                        imgNumber: 3
                    },
                    {
                        text: 'Арматура',
                        imgNumber: 3
                    },
                    {
                        text: 'Арматура',
                        imgNumber: 3
                    },
                    {
                        text: 'Арматура',
                        imgNumber: 3
                    },
                ]
            }
        ]
    },
    specialSlider: {
        slideIsNow: 1,
        slides: [
            {
                id: 1,
                slideList: [
                    {
                        name: 'Труба котельна 377х11 мм, ту 14-3р-55-2001 сталь 12х1мф. 11тн',
                        prise: '100 000грн/тн.',
                        imgNumber: 1
                    },
                    {
                        name: 'Клапан запорний 15бн3бк, Dy 100 мм, Укр 16 - 8шт',
                        prise: '90 000грн/тн.',
                        imgNumber: 2
                    },
                    {
                        name: 'Труба котельна 377х11 мм, ту 14-3р-55-2001 сталь 12х1мф. 11тн',
                        prise: '100 000грн/тн.',
                        imgNumber: 1
                    }
                ]
            },
            {
                id: 2,
                slideList: [
                    {
                        name: 'Клапан запорний 15бн3бк, Dy 100 мм, Укр 16 - 8шт',
                        prise: '90 000грн/тн.',
                        imgNumber: 2
                    },
                    {
                        name: 'Труба котельна 377х11 мм, ту 14-3р-55-2001 сталь 12х1мф. 11тн',
                        prise: '100 000грн/тн.',
                        imgNumber: 1
                    },
                    {
                        name: 'Клапан запорний 15бн3бк, Dy 100 мм, Укр 16 - 8шт',
                        prise: '90 000грн/тн.',
                        imgNumber: 2
                    }
                ]
            },
            {
                id: 3,
                slideList: [
                    {
                        name: 'Клапан запорний 15бн3бк, Dy 100 мм, Укр 16 - 8шт',
                        prise: '90 000грн/тн.',
                        imgNumber: 2
                    },
                    {
                        name: 'Клапан запорний 15бн3бк, Dy 100 мм, Укр 16 - 8шт',
                        prise: '90 000грн/тн.',
                        imgNumber: 2
                    },
                    {
                        name: 'Клапан запорний 15бн3бк, Dy 100 мм, Укр 16 - 8шт',
                        prise: '90 000грн/тн.',
                        imgNumber: 2
                    }
                ]
            },
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
                        break;
                    }
                    else {
                        state.popularSlider.slideIsNow--;
                        break;
                    }
                }
                else if (action.payload.whitchWay == 'right') {
                    if (state.popularSlider.slideIsNow == state.popularSlider.slides.length) {
                        state.popularSlider.slideIsNow = 1;
                        break;
                    }
                    else {
                        state.popularSlider.slideIsNow++;
                        break;
                    }
                }
            }
            case 'special': {
                if (action.payload.whitchWay == 'left') {
                    if (state.specialSlider.slideIsNow == 1) {
                        state.specialSlider.slideIsNow = state.specialSlider.slides.length;
                        console.log(state.specialSlider.slideIsNow);
                        break;
                    }
                    else {
                        state.specialSlider.slideIsNow--;
                        console.log(state.specialSlider.slideIsNow);
                        break;
                    }
                }
                else if (action.payload.whitchWay == 'right') {
                    if (state.specialSlider.slideIsNow == state.specialSlider.slides.length) {
                        state.specialSlider.slideIsNow = 1;
                        console.log(state.specialSlider.slideIsNow);
                        break;
                    }
                    else {
                        state.specialSlider.slideIsNow++;
                        console.log(state.specialSlider.slideIsNow);
                        break;
                    }
                }
            }
        }
    });
});

export default slidersReducer;