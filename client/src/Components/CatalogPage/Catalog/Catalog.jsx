import s from './catalog.module.scss';
import catalogLogo from '../../assets/img/sheet_metal_logo.png';
import { Link } from 'react-router-dom';

import ForAllList from '../../Common/ForAllList/ForAllList';

let catalog = [
    {
        path: '/stainless_sheel_metal',
        text: 'Лист Г/К',
        imgNumber: 9
    },
    {
        path: '/stainless_sheel_metal',
        text: 'Лист Х/К',
        imgNumber: 10
    },
    {
        path: '/stainless_sheel_metal',
        text: 'Лист НЛГ',
        imgNumber: 11
    },
    {
        path: '/stainless_sheel_metal',
        text: 'Лист ОЦ',
        imgNumber: 12
    },
    {
        path: '/stainless_sheel_metal',
        text: 'Лист РИФЛ',
        imgNumber: 13
    },
    {
        path: '/stainless_sheel_metal',
        text: 'Лист нержавіючої сталі',
        imgNumber: 14
    },
    {
        path: '/stainless_sheel_metal',
        text: 'Лист ПВЛ',
        imgNumber: 15
    },
    {
        path: '/stainless_sheel_metal',
        text: 'Лист полімер',
        imgNumber: 16
    },
]

const Catalog = (props) => {
    return(
        <>
            <div className={s.catalog_header}>
                <div className={s.catalog_logo}>
                    <img src={catalogLogo} alt="" />
                    <h2 className={s.catalog_name}>ЛИСТОВИЙ ПРОКАТ</h2>
                </div>
                <ul className={s.catalog_refs_list}>
                    <li className={s.catalog_refs_list_item}>
                        <Link className={s.catalog_refs_list_link} to='/'>Головна</Link>
                    </li>
                    <li className={s.catalog_refs_list_item}>
                        <Link className={s.catalog_refs_list_link} to='/'>Каталог</Link>
                    </li>
                    <li className={s.catalog_refs_list_item}>
                        <Link className={s.catalog_refs_list_link} to='/'>Металопрокат</Link>
                    </li>
                    <li className={s.catalog_refs_list_item}>
                        <p className={s.catalog_refs_list_link}>Листовий прокат</p>
                    </li>
                </ul>
            </div>
            <ForAllList
                listItems={catalog}
                class='catalog'
                type='services'
            />
        </>
    )
};

export default Catalog;