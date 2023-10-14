import './popular_slider_list_item.scss';

import img1 from '../../../../assets/img/popular1.png';
import img2 from '../../../../assets/img/popular2.png';
import img3 from '../../../../assets/img/popular3.png';
import img4 from '../../../../assets/img/popular4.png';

const PopularSliderListItem = (props) => {
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
        }
    }

    return(
        <li className={`${props.class}_item`}>
            {imgThatNeed(props.itemInformation.imgNumber)}
            <h3>{props.itemInformation.text}</h3>
        </li>
    )
};

export default PopularSliderListItem;