import s from './types_buttons.module.scss';

import Button from '../../Common/Button/Button';

const TypesButtons = (props) => {
    return(
        <div className={s.types_buttons}>
            <Button
                class='watch'
                content='ДИВИТИСЬ ВСЕ'
            />
            <Button
                class='download'
                content='СКАЧАТИ ПРАЙС-ЛИСТ'
            />
        </div>
    )
};

export default TypesButtons;