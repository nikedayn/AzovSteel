import './clients_slide.scss';

import img1 from '../../../assets/img/client1.png';
import img2 from '../../../assets/img/client2.png';
import img3 from '../../../assets/img/client3.png';
import img4 from '../../../assets/img/client4.png';

const ClientsSlide = (props) => {
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

    let listItems = props.itemsInformation.map((itemInformation, index) => {
        return  <li className={`${props.class}_list_item`}>
                    {imgThatNeed(itemInformation.imgNumber)}
                </li>
    })

    return(
        <ul className={`${props.class}_list`}>
            {listItems}
        </ul>
    )
};

export default ClientsSlide;