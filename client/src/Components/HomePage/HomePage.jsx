import Section from "../Common/Section/Section";
import Slogan from "./Slogan/Slogan";
import ForAllList from "../Common/ForAllList/ForAllList";
import TypesButtons from "./TypesButtons/TypesButtons";
import Slider from "../Slider/Slider";

let ourSuccesses = [
    {
        value: '27000 +',
        text: 'товарних позицій'
    },
    {
        value: '15 років',
        text: 'роботи у галузі'
    },
    {
        value: '2200 +',
        text: 'постійних клієнтів'
    }
];

let categiries = [
    {
        text: 'ТРУБНИЙ ПРОКАТ',
        links: [
            {
                path: '/',
                text: 'Сортовий прокат'
            },
            {
                path: '/',
                text: 'Фасонний прокат'
            },
            {
                path: '/',
                text: 'Листовий прокат'
            },
            {
                path: '/',
                text: 'Стрічка металева'
            }
        ],
    },
    {
        text: `ДЕТАЛІ 
        ТРУБОПРОВІДІВ`,
        links: [
            {
                path: '/',
                text: 'Металлочерепица'
            },
            {
                path: '/',
                text: 'Профнастил'
            },
            {
                path: '/',
                text: 'Додаткові елементи'
            },
            {
                path: '/',
                text: 'Водостічна система'
            }
        ],
    },
    {
        text: `ТРУБОПРОВІДНА
        АРМАТУРА`,
        links: [
            {
                path: '/',
                text: 'Сайдинг металевий'
            },
            {
                path: '/',
                text: 'Панелі'
            },
            {
                path: '/',
                text: 'Додаткові елементи'
            },
            {
                path: '/',
                text: 'Елементи безпеки'
            }
        ],
    },
    {
        text: `КОЛЬОРОВИЙ
        МЕТАЛОПРОКАТ`,
        links: [
            {
                path: '/',
                text: 'Сортовий прокат'
            },
            {
                path: '/',
                text: 'Фасонний прокат'
            },
            {
                path: '/',
                text: 'Листовий прокат'
            },
            {
                path: '/',
                text: 'Стрічка металева'
            }
        ],
    },
]

const HomePage = (props) => {
    return(
        <main>
            <Section
                class={'home'}
                content={[
                    <Slogan/>,
                    <ForAllList
                        listItems={ourSuccesses} 
                        class={'our_successes'} 
                        type={'statistics'}
                    />
                ]}
            />
            <Section
                class={'types'}
                content={[
                    <ForAllList
                        listItems={categiries} 
                        class={'types'} 
                        type={'categories'}
                    />,
                    <TypesButtons/>
                ]}
            />
            <Section
                class={'popular'}
                content={[
                    <Slider
                        class='popular'
                        text='ПОПУЛЯРНІ РОЗДІЛИ'
                        sliderData={props.popular.slides}
                        slideIsNow={props.popular.slideIsNow}
                        sliderFunction={props.changeSlide}
                    />
                ]}
            />
        </main>
    )
};

export default HomePage;