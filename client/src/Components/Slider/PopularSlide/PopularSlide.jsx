import './popular_slide.scss';

import img1 from '../../assets/img/popular1.png';
import img2 from '../../assets/img/popular2.png';
import img3 from '../../assets/img/popular3.png';
import img4 from '../../assets/img/popular4.png';

const PopularSlide= (props) => {
    let imgThatNeed = (itemNumber) => {
        switch(itemNumber) {
            case 1: {
                return <img src={img1} className='img1' alt=""/>
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
                    <h3>{itemInformation.text}</h3>
                </li>
    })

    return(
        <ul className={`${props.class}_list`}>
            {listItems}
        </ul>
    )
};

export default PopularSlide