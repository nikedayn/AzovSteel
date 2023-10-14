import './nav_list_item.scss';
import { Link } from 'react-router-dom';

const NavListItem = (props) => {
    return(
        <li className={`${props.class}_item`}>
            <Link to={props.itemInformation.path} className={`${props.class}_link`}>{props.itemInformation.text}</Link>
        </li>
    )
};

export default NavListItem;