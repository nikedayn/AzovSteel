import Section from "../Common/Section/Section";
import Catalog from "./Catalog/Catalog";
import AboutStainless from "../Common/AboutStainless/AboutStainless";
import AdvantagesPart from "../Common/AdvantagesPart/AdvantagesPart";

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

const CatalogPage = (props) => {
    return(
        <main>
            <Section
                class='catalog'
                content={[
                    <Catalog/>
                ]}
            />
            <Section
                class='about_stainless'
                content={[
                    <AboutStainless
                        imgWidth={460}
                    />
                ]}
            />
            <Section
                class='advantages'
                content={[
                    <AdvantagesPart
                        text='ЧОМУ ОБИРАЮТЬ НАС?'
                        class='advantages'
                        listItems={advantages}
                        listType={'advantages'}
                    />
                ]}
            />
        </main>
    )
};

export default CatalogPage;