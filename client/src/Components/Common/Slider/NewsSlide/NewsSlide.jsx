import './news_slide.scss';

const NewsSlide = (props) => {
    let listItems = props.itemsInformation.map((itemInformation, index) => {
        return  <li className={`${props.class}_list_item`}>
                    <div className={`${props.class}_list_item_name_and_date`}>
                        <h3 class={`${props.class}_list_item_name`}>{itemInformation.headline}</h3>
                        <p class={`${props.class}_list_item_date`}>{itemInformation.date}</p>
                    </div>
                    <p class={`${props.class}_list_item_text`}>{itemInformation.text}</p>
                </li>
    })

    return(
        <ul className={`${props.class}_list`}>
            {listItems}
        </ul>
    )
};

export default NewsSlide;