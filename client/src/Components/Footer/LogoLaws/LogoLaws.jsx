import s from './logo_laws.module.scss';
import Logo from '../../Header/LeftPart/Logo/Logo';

const LogoLaws = (props) => {
    return(
       <div className={s.logo_laws}>
            <Logo/>
            <div className={s.confidents}>
                <h3 className={s.confidents_text}>Політика конфіденційності</h3>
                <p className={s.confidents_laws}>Вся надана на сайті інформація не є публічною офертою, яка визначається положеннями Статті 666 Цивільного кодексу</p>
            </div>
       </div>
    )
};

export default LogoLaws;