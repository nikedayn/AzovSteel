import './advantages_list_item.scss';

//images
import img1 from '../../../assets/img/reasons_logo1.png';
import img2 from '../../../assets/img/reasons_logo2.png';
import img3 from '../../../assets/img/reasons_logo3.png';
import img4 from '../../../assets/img/reasons_logo4.png';
import img5 from '../../../assets/img/reasons_logo5.png';
import img6 from '../../../assets/img/reasons_logo6.png';
import img7 from '../../../assets/img/reasons_logo7.png';
import img8 from '../../../assets/img/reasons_logo8.png';


const AdvantagesListItem = (props) => {
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
        }
    }

    return(
        <li className={`${props.class}_item`}>
            {imgThatNeed(props.itemInformation.imgNumber)}
            <p class={`${props.class}_text`}>{props.itemInformation.text}</p>
        </li>
    )
};

export default AdvantagesListItem;