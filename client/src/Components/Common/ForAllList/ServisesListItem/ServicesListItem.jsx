import { Link } from 'react-router-dom';

//images
import img1 from '../../../assets/img/service_logo1.png';
import img2 from '../../../assets/img/service_logo2.png';
import img3 from '../../../assets/img/service_logo3.png';
import img4 from '../../../assets/img/service_logo4.png';
import img5 from '../../../assets/img/service_logo5.png';
import img6 from '../../../assets/img/service_logo6.png';
import img7 from '../../../assets/img/service_logo7.png';
import img8 from '../../../assets/img/service_logo8.png';
import img9 from '../../../assets/img/catalog_img1.png';
import img10 from '../../../assets/img/catalog_img4.png';
import img11 from '../../../assets/img/catalog_img5.png';
import img12 from '../../../assets/img/catalog_img6.png';
import img13 from '../../../assets/img/catalog_img7.png';


const ServicesListItem = (props) => {
    let imgThatNeed = (itemNumber) => {
        switch(itemNumber) {
            case 1: {
                return <img src={img1} alt=""/>
            }
            case 2: {
                return <img src={img2} alt=""/>
            }
            case 3: {
                return <img src={img3} alt=""/>
            }
            case 4: {
                return <img src={img4} alt=""/>
            }
            case 5: {
                return <img src={img5} alt=""/>
            }
            case 6: {
                return <img src={img6} alt=""/>
            }
            case 7: {
                return <img src={img7} alt=""/>
            }
            case 8: {
                return <img src={img8} alt=""/>
            }
            case 9: {
                return <img src={img9} alt=""/>
            }
            case 10: {
                return <img src={img9} alt=""/>
            }
            case 11: {
                return <img src={img9} alt=""/>
            }
            case 12: {
                return <img src={img10} alt=""/>
            }
            case 13: {
                return <img src={img11} alt=""/>
            }
            case 14: {
                return <img src={img9} alt=""/>
            }
            case 15: {
                return <img src={img12} alt=""/>
            }
            case 16: {
                return <img src={img13} alt=""/>
            }
        }
    }

    return(
        <li className={`${props.class}_item`}>
            {imgThatNeed(props.itemInformation.imgNumber)}
            <Link to={props.itemInformation.path} className={`${props.class}_link`}>{props.itemInformation.text}</Link>
        </li>
    )
};

export default ServicesListItem;