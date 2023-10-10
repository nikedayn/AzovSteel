import './for_all_list.scss';

import NavListItem from './NavListItem/NavListItem';

const ForAllList = (props) => {
     let listItems = props.listItems.map((listItem, ind) => {
        switch(props.type) {
            case 'navigation': {
                return <NavListItem linkInformation={listItem} class={`${props.class}_item`}/>
            }
        }
    })

    return(
        <ul className={`${props.class}_list`}>
            {listItems}
        </ul>
    )
};

export default ForAllList;