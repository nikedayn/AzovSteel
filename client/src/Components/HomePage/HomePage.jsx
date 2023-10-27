import Section from "../Common/Section/Section";
import Slogan from "./Slogan/Slogan";
import ForAllList from "../Common/ForAllList/ForAllList";
import TypesButtons from "./TypesButtons/TypesButtons";
import Slider from "../Common/Slider/Slider";
import ServisePart from "./ServicesPart/ServicesPart";
import AdvantagesPart from "./AdvantagesPart/AdvantagesPart";
import NewsBtn from "./NewsBtn/NewsBtn";

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

let services = [
    {
        text: 'Різка металопрокату',
        imgNumber: 1
    },
    {
        text: 'Шліфовка труб та металопракату',
        imgNumber: 2
    },
    {
        text: 'Термообробка(закалка металовиробів)',
        imgNumber: 3
    },
    {
        text: 'Нанесення антикоррозійних покриттів',
        imgNumber: 4
    },
    {
        text: 'Лиття деталей і заготовок',
        imgNumber: 5
    },
    {
        text: 'Токарні, фрезерні та слесарні роботи по металу',
        imgNumber: 6
    },
    {
        text: 'Цинкування металовиробів',
        imgNumber: 7
    },
    {
        text: 'Ізоляція труб',
        imgNumber: 8
    }
]

let advantages = [
    {
        text: 'Великий вибір якісної продукції',
        imgNumber: 1
    },
    {
        text: 'Широкий вибір металовиробів в одному місці',
        imgNumber: 2
    },
    {
        text: 'Допомога у митному таможенні вантажів',
        imgNumber: 3
    },
    {
        text: 'Доставляємо продукцію по Україні або інших країнах',
        imgNumber: 4
    },
    {
        text: 'Персональний підхід до клієнтів',
        imgNumber: 5
    },
    {
        text: 'Знижки і бонуси постійним клієнтам',
        imgNumber: 6
    },
    {
        text: 'Надання товарного кредиту та відстрочення оплати',
        imgNumber: 7
    },
    {
        text: 'Великий вибір послуг на складі: упаковка, різання у розмірі та ін.',
        imgNumber: 8
    }
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
            <Section
                class={'special'}
                content={[
                    <Slider
                        class='special'
                        text='СПЕЦІАЛЬНІ ПРОПОЗИЦІЇ'
                        sliderData={props.special.slides}
                        slideIsNow={props.special.slideIsNow}
                        sliderFunction={props.changeSlide}
                    />
                ]}
            />
            <Section
                class={'services'}
                content={[
                    <ServisePart
                        text='ПОСЛУГИ'
                        class='services'
                        listItems={services}
                        listType={'services'}
                    />
                ]}
            />
            <Section
                class={'clients'}
                content={[
                    <Slider
                        class='clients'
                        text='НАШІ КЛІЄНТИ'
                        sliderData={props.clients.slides}
                        slideIsNow={props.clients.slideIsNow}
                        sliderFunction={props.changeSlide}
                    />
                ]}
            />
            <Section
                class={'advantages'}
                content={[
                    <AdvantagesPart
                        text='ЧОМУ ОБИРАЮТЬ НАС?'
                        class='advantages'
                        listItems={advantages}
                        listType={'advantages'}
                    />
                ]}
            />
            <Section
                class={'news'}
                content={[
                    <Slider
                        class='news'
                        text='НОВИНИ'
                        sliderData={props.news.slides}
                        slideIsNow={props.news.slideIsNow}
                        sliderFunction={props.changeSlide}
                    />,
                    <NewsBtn/>
                ]}
            />
        </main>
    )
};

export default HomePage;