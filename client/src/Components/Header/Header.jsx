import './header.scss';

//components
import Section from '../Common/Section/Section';
import LeftPart from './LeftPart/LeftPart';
import ForAllList from '../Common/ForAllList/ForAllList';
import RightPart from './RightPart/RightPart';
import CatalogSearchAndLocation from './CatalogSearchAndLocation/CatalogSearchAndLocation';
import Button from '../Common/Button/Button';

let navLinks = [
    {
        path: '/about_company',
        text: 'Про компанію'
    },
    {
        path: '/price-lists',
        text: 'Прайс-листи'
    },
    {
        path: '/production',
        text: 'Виробництво'
    },
    {
        path: '/procurement',
        text: 'Закупівлі'
    },
    {
        path: '/contacts',
        text: 'Контакти'
    }
]

const Header = (props) => {
    return(
        <header>
            <Section 
                content={[
                    <LeftPart/>,
                    <ForAllList 
                        listItems={navLinks} 
                        class={'menu'} 
                        type={'navigation'}
                    />,
                    <RightPart/>
                ]} 
                class={'top_header'}
            />
            <hr class="header_line"/>
            <Section 
                content={[
                    <CatalogSearchAndLocation/>,
                    <Button
                        class={'singin_or_login'}
                        content={[
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_877_2225)">
                                <path d="M13.0001 14.6448C5.18802 14.6448 0.885681 18.3404 0.885681 25.0511C0.885681 25.5752 1.31047 26 1.83458 26H24.1655C24.6896 26 25.1144 25.5752 25.1144 25.0511C25.1144 18.3408 20.8121 14.6448 13.0001 14.6448ZM2.81801 24.1022C3.19125 19.0847 6.61203 16.5426 13.0001 16.5426C19.3881 16.5426 22.8089 19.0847 23.1825 24.1022H2.81801Z" fill="black"/>
                                <path d="M13 0C9.4115 0 6.70557 2.76037 6.70557 6.42063C6.70557 10.1881 9.52921 13.2527 13 13.2527C16.4707 13.2527 19.2944 10.1881 19.2944 6.42093C19.2944 2.76037 16.5884 0 13 0ZM13 11.3552C10.5755 11.3552 8.60337 9.14174 8.60337 6.42093C8.60337 3.80006 10.4525 1.8978 13 1.8978C15.5067 1.8978 17.3966 3.84211 17.3966 6.42093C17.3966 9.14174 15.4244 11.3552 13 11.3552Z" fill="black"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_877_2225">
                                <rect width="26" height="26" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>,
                            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 1L6.5 6L1 1" stroke="#387C43" stroke-width="2"/>
                            </svg>
                        ]}
                    />,
                    <Button
                        class={'cart_and_number'}
                        content={[
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_880_2223)">
                                <path d="M24.9318 5.42369H4.60293L4.30075 2.0573C4.25133 1.50678 3.78995 1.08496 3.23724 1.08496H1.06778C0.478059 1.08496 0 1.56302 0 2.15274C0 2.74246 0.478059 3.22051 1.06778 3.22051H2.26104C2.91315 10.4856 1.22779 -8.2919 3.48914 16.9027C3.57629 17.8889 4.10911 18.9589 5.02699 19.686C3.37209 21.7994 4.88416 24.915 7.57613 24.915C9.81042 24.915 11.3863 22.6866 10.6201 20.5761H16.4642C15.699 22.6839 17.2714 24.915 19.5082 24.915C21.2932 24.915 22.7454 23.4628 22.7454 21.6778C22.7454 19.8928 21.2932 18.4405 19.5082 18.4405H7.58335C6.77224 18.4405 6.06543 17.9512 5.76035 17.2382L22.8248 16.2353C23.2907 16.208 23.6849 15.8811 23.7981 15.4284L25.9677 6.75043C26.1359 6.07753 25.6265 5.42369 24.9318 5.42369ZM7.57613 22.7795C6.96872 22.7795 6.47449 22.2853 6.47449 21.6778C6.47449 21.0703 6.96872 20.5761 7.57613 20.5761C8.18359 20.5761 8.67782 21.0703 8.67782 21.6778C8.67782 22.2853 8.18359 22.7795 7.57613 22.7795ZM19.5081 22.7795C18.9007 22.7795 18.4064 22.2853 18.4064 21.6778C18.4064 21.0703 18.9007 20.5761 19.5081 20.5761C20.1156 20.5761 20.6098 21.0703 20.6098 21.6778C20.6098 22.2853 20.1156 22.7795 19.5081 22.7795ZM21.9165 14.1495L5.47291 15.1158L4.79462 7.55919H23.5642L21.9165 14.1495Z" fill="black"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_880_2223">
                                <rect width="26" height="26" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>,
                            <span className="number">8</span> 
                        ]}
                    />
                ]} 
                class={'bottom_header'}
            />
        </header>
    )
};

export default Header;