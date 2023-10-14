import './statistics_list_item.scss';

const StatisticsListItem = (props) => {
    return(
        <li className={`${props.class}_item`}>
            <h2>{props.itemInformation.value}</h2>
            <hr/>
            <p>{props.itemInformation.text}</p>
        </li>
    )
};

export default StatisticsListItem;