import s from './products_header.module.scss';

import img from '../../assets/img/catalog_img1.png';
import { Link } from 'react-router-dom';

const ProductsHeader = (props) => {
    return(
        <div className={s.products_header}>
            <div className={s.products_logo}>
                <img src={img} alt="stainless_img"/>
                <h2 className={s.products_name}>ЛИСТ НЕРЖАВІЮЧИЙ</h2>
            </div>
            <ul className={s.products_refs_list}>
                <li className={s.products_refs_list_item}>
                    <Link className={s.products_refs_list_link} to='/'>Головна</Link>
                </li>
                <li className={s.products_refs_list_item}>
                    <Link className={s.products_refs_list_link} to='/'>Каталог</Link>
                </li>
                <li className={s.products_refs_list_item}>
                    <Link className={s.products_refs_list_link} to='/'>Металопрокат</Link>
                </li>
                <li className={s.products_refs_list_item}>
                    <Link className={s.products_refs_list_link} to='/sheel_metal'>Листовий прокат</Link>
                </li>
                <li className={s.products_refs_list_item}>
                    <p className={s.products_refs_list_link}>Лист нержавіючий</p>
                </li>
            </ul>
        </div>
    )
};

export default ProductsHeader;