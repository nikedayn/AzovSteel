import './special_slider.scss';

import img1 from '../../assets/img/sanya_pipes_dubl2.png';
import img2 from '../../assets/img/sanya_klapan_dubl2.png';

const SpecialSlide = (props) => {
    let imgThatNeed = (itemNumber) => {
        switch(itemNumber) {
            case 1: {
                return <img src={img1} className='giga_pipe' alt=""/>
            }
            case 2: {
                return <img src={img2} alt=""/>
            }
        }
    }

    let listItems = props.itemsInformation.map((itemInformation, index) => {
        return  <li className={`${props.class}_list_item`}>
                    <div class={`${props.class}_list_item_text`}>
                        <p className={`${props.class}_list_item_text_p`}>{itemInformation.name}</p>
                        <p className={`${props.class}_list_item_text_price`}>{itemInformation.prise}</p>
                        <a href="" className={`${props.class}_list_item_text_podrobnie`}>Докладніше</a>
                    </div>
                    {imgThatNeed(itemInformation.imgNumber)}
                </li>   
    })

    return(
        <ul className={`${props.class}_list`}>
            {listItems}
        </ul>
    )
};

export default SpecialSlide;