import s from './footer_bottom.module.scss';

import instagram from '../../assets/img/instagram.svg';
import agency from '../../assets/img/agency.svg';

const FooterBottom = (props) => {
    return(
        <>
            <p className={s.footer_end_text}>© 2009-2020 ООО “AzovSteel” Усі права захищенні</p>
            <div className={s.foter_end_img}>
                <svg className={s.footer_img} xmlns="http://www.w3.org/2000/svg" enableBackground="new 5 5 13 13" viewBox="5 5 15 15" id="telegram">
                    <path fill="#fff" d="m5.491 11.74 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"></path>
                </svg>
                <img className={s.footer_img_insta} src={instagram} alt=""/>
                <img className={s.footer_company} src={agency} alt=""/>
            </div>
        </>
    )
};

export default FooterBottom;