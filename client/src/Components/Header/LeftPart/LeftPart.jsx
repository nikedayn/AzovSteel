import s from './left_part.module.scss';

import Logo from './Logo/Logo';

const LeftPart = (props) => {
    return(
        <div className={s.left_part}>
            <Logo/>
            <p className={s.where_do_we_deliver}>Оптові поставки металопрокату Україною та країнами ЄС</p>
        </div>
    )
};

export default LeftPart;