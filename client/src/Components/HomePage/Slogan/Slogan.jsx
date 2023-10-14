import s from './slogan.module.scss';

import Button from "../../Common/Button/Button";

const Slogan = (props) => {
    return(
        <>
            <h1 className={s.main_slogan}>Надійний постачальник
            Вигідний партнер</h1>
            <p className={s.under_text}>Оптовий продаж металопрокату
                від виробника</p>
            <Button
                class={'write_us'}
                content={'НАПИСАТИ НАМ'}
            />
        </>
    )
};

export default Slogan;