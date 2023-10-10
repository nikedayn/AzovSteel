import './header.scss';

//components
import Section from '../Common/Section/Section';
import LeftPart from './LeftPart/LeftPart';
import ForAllList from '../Common/ForAllList/ForAllList';
import RightPart from './RightPart/RightPart';

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
                content={[<LeftPart/>,
                <ForAllList 
                    listItems={navLinks} 
                    class={'menu'} 
                    type={'navigation'}
                />,
                <RightPart/>
                ]} 
                class={'top_header'}
            />
        </header>
    )
};

export default Header;