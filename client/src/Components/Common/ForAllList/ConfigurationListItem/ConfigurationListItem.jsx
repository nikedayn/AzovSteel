const ConfigurationListItem = (props) => {
    return(
        <li className={`${props.class}_item`}>
            <p className={`${props.class}_name`}>{props.itemInformation.text}</p>
            <input placeholder={props.itemInformation.placeholder} type="number" className={`${props.class}_input`}/>
        </li>
    )
};

export default ConfigurationListItem;