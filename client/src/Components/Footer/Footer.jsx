import './footer.scss';
import Section from '../Common/Section/Section';
import LogoLaws from './LogoLaws/LogoLaws';
import FooterLinks from './FooterLinks/FooterLinks';
import Contacts from './Contacts/Contacts';
import FooterBottom from './FooterBottom/FooterBottom';

let companyInfo = [
    {
        path: '/',
        text: 'Головна'
    },
    {
        path: '/about_company',
        text: 'Про компанію'
    },
    {
        path: '/deliver_and_pay',
        text: 'Доставка і Оплата'
    }
]

let catalogInfo = [
    {
        path: '/',
        text: 'Трубний прокат'
    },
    {
        path: '/about_company',
        text: 'Жароміцний прокат'
    },
    {
        path: '/deliver_and_pay',
        text: 'Трубопровідна арматура'
    },
    {
        path: '/',
        text: 'Металоконструкції'
    },
    {
        path: '/about_company',
        text: 'Нержавіючий прокат'
    },
    {
        path: '/deliver_and_pay',
        text: 'Феросплави'
    },
    {
        path: '/',
        text: 'Чорний прокат'
    },
    {
        path: '/about_company',
        text: 'Металічні порошки'
    },
    {
        path: '/deliver_and_pay',
        text: 'Листовий прокат'
    }
]

const Footer = (props) => {
    return(
        <footer>
            <Section
                class={'top_footer'}
                content={[
                    <LogoLaws/>,
                    <FooterLinks
                        class='company'
                        listItems={companyInfo}
                        text='КОМПАНІЯ'
                    />,
                    <FooterLinks
                        class='catalog'
                        listItems={catalogInfo}
                        text='КАТАЛОГ'
                    />,
                    <Contacts/>
                ]}
            />
            <Section
                class={'bottom_footer'}
                content={<FooterBottom/>}
            />
        </footer>
    )
};

export default Footer;