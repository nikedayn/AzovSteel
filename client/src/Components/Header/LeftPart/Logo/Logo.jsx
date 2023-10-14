import s from './logo.module.scss';

//logo images
import green_logo from '../../../assets/img/green_logo.svg';
import left_logo from '../../../assets/img/left_logo.svg';
import right_logo from '../../../assets/img/right_logo.svg';

import { Link } from 'react-router-dom';

const Logo = (props) => {
    return( 
        <Link to='/'>
            <div className={s.logo}>
                <picture className={s.logo_img}>
                    <img className={s.green_logo} src={green_logo} alt="green_logo"/>
                    <img className={s.left_logo} src={left_logo} alt="left_logo"/>
                    <img className={s.right_logo} src={right_logo} alt="right_logo"/>
                </picture>
                <div className={s.logo_text}>
                    <p className={s.name}>AZOVSTEEL</p>
                    <div className={s.under_logo}>
                        <hr/>
                        <p>Carpathians</p>
                        <hr/>
                    </div>
                </div>
            </div>
        </Link>
    )
};

export default Logo;