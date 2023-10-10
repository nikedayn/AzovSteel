import './nav_list_item.scss';
import { Link } from 'react-router-dom';

const NavListItem = (props) => {
    return(
        <li className={`${props.class}_item`}>
            <Link to={props.linkInformation.path} className={`${props.class}_link`}>{props.linkInformation.text}</Link>
        </li>
    )
};

export default NavListItem;