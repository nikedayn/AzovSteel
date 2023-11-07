import s from './products_list.module.scss';
import { Link } from 'react-router-dom';

const ProductsList = (props) => {
    let tabelItems = props.tabelItems.map((tabelItem, index) => {
        return <tr className={s.products_tabel_list_item}>
            <td className={s.products_tabel_list_name}>
                <Link to='/product'>
                    {tabelItem.name}
                </Link>
            </td>
            <td className={s.products_tabel_list_mark}>
                {tabelItem.mark}
            </td>
            <td className={s.products_tabel_list_GOST}>
                {tabelItem.GOST}
            </td>
            <td className={s.products_tabel_list_width}>
                {tabelItem.width}
            </td>
            <td className={s.products_tabel_list_thickness}>
                {tabelItem.thickness}
            </td>
            <td className={s.products_tabel_list_length}>
                {tabelItem.length}
            </td>
            <td className={s.products_tabel_list_price}>
                {`від ${tabelItem.price} грн. / т`}
            </td>
            <td className={s.products_tabel_list_price}>
                <button className={s.products_tabel_list_to_cart_btn}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_880_2223)">
                            <path d="M24.9318 5.42369H4.60293L4.30075 2.0573C4.25133 1.50678 3.78995 1.08496 3.23724 1.08496H1.06778C0.478059 1.08496 0 1.56302 0 2.15274C0 2.74246 0.478059 3.22051 1.06778 3.22051H2.26104C2.91315 10.4856 1.22779 -8.2919 3.48914 16.9027C3.57629 17.8889 4.10911 18.9589 5.02699 19.686C3.37209 21.7994 4.88416 24.915 7.57613 24.915C9.81042 24.915 11.3863 22.6866 10.6201 20.5761H16.4642C15.699 22.6839 17.2714 24.915 19.5082 24.915C21.2932 24.915 22.7454 23.4628 22.7454 21.6778C22.7454 19.8928 21.2932 18.4405 19.5082 18.4405H7.58335C6.77224 18.4405 6.06543 17.9512 5.76035 17.2382L22.8248 16.2353C23.2907 16.208 23.6849 15.8811 23.7981 15.4284L25.9677 6.75043C26.1359 6.07753 25.6265 5.42369 24.9318 5.42369ZM7.57613 22.7795C6.96872 22.7795 6.47449 22.2853 6.47449 21.6778C6.47449 21.0703 6.96872 20.5761 7.57613 20.5761C8.18359 20.5761 8.67782 21.0703 8.67782 21.6778C8.67782 22.2853 8.18359 22.7795 7.57613 22.7795ZM19.5081 22.7795C18.9007 22.7795 18.4064 22.2853 18.4064 21.6778C18.4064 21.0703 18.9007 20.5761 19.5081 20.5761C20.1156 20.5761 20.6098 21.0703 20.6098 21.6778C20.6098 22.2853 20.1156 22.7795 19.5081 22.7795ZM21.9165 14.1495L5.47291 15.1158L4.79462 7.55919H23.5642L21.9165 14.1495Z" fill="#387C43"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_880_2223">
                                <rect width="26" height="26" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </td>
        </tr>
    })

    return(
        <table className={s.products_tabel}>
            <thead className={s.products_tabel_head}>
                <tr className={s.products_tabel_head_row}>
                    <th className={s.products_tabel_headline}>Найменування</th>
                    <th className={s.products_tabel_headline}>Марка</th>
                    <th className={s.products_tabel_headline}>ГОСТ</th>
                    <th className={s.products_tabel_headline}>Dy</th>
                    <th className={s.products_tabel_headline}>D1</th>
                    <th className={s.products_tabel_headline}>D</th>
                    <th className={s.products_tabel_headline}>Ціна</th>
                    <th className={s.products_tabel_headline}></th>
                </tr>
            </thead>
            <tbody className={s.products_tabel_list}>
                {tabelItems}
            </tbody>
        </table>
    )
};

export default ProductsList;