import './for_all_list.scss';

import NavListItem from './NavListItem/NavListItem';
import StatisticsListItem from './StatisticsListItem/StatisticsListItem';
import CategoriesListItem from './CategoriesListItem/CategoriesListItem';
import ServicesListItem from './ServisesListItem/ServicesListItem';
import AdvantagesListItem from './AdvantagesListItem/AdvantagesListItem';
import ConfigurationListItem from './ConfigurationListItem/ConfigurationListItem';

const ForAllList = (props) => {
    let listItems = props.listItems.map((listItem, index) => {
        switch(props.type) {
            case 'navigation': {
                return <NavListItem key={`naw${props.class}${index}`} itemInformation={listItem} class={`${props.class}_list`}/>
            }

            case 'statistics': {
                return <StatisticsListItem itemInformation={listItem} class={`${props.class}_list`}/>
            }

            case 'categories': {
                return <CategoriesListItem itemNumber={index+1} itemInformation={listItem} class={`${props.class}_list`}/>
            }

            case 'services': {
                return <ServicesListItem  itemInformation={listItem} class={`${props.class}_list`}/>
            }
            case 'advantages': {
                return <AdvantagesListItem itemInformation={listItem} class={`${props.class}_list`}/>
            }
            case 'configuration': {
                return <ConfigurationListItem itemInformation={listItem} class={`${props.class}_list`}/>
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