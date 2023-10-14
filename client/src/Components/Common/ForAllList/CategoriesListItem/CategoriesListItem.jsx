import './categories_list_item.scss';

import { Link } from 'react-router-dom';
import img1 from '../../../assets/img/pipes.png';
import img2 from '../../../assets/img/pipeline_details.png';
import img3 from '../../../assets/img/pipeline_accessories.png';
import img4 from '../../../assets/img/non-ferrous_metal.png';
import ForAllList from '../ForAllList';

const CategoriesListItem = (props) => {
    let imgThatNeed = (itemNumber) => {
        switch(itemNumber) {
            case 1: {
                return <img className={`${props.class}_img${props.itemNumber}`} src={img1} alt=""/>
            }
            case 2: {
                return <img className={`${props.class}_img${props.itemNumber}`} src={img2} alt=""/>
            }
            case 3: {
                return <img className={`${props.class}_img${props.itemNumber}`} src={img3} alt=""/>
            }
            case 4: {
                return <img className={`${props.class}_img${props.itemNumber}`} src={img4} alt=""/>
            }
        }
    }

    return(
        <li className={`${props.class}_item`}>
            <h2 className={`${props.class}_h2`}>{props.itemInformation.text}</h2>
            <ForAllList
                listItems={props.itemInformation.links} 
                class={`${props.class}`} 
                type={'navigation'}
            />
            <Link to={'/categories'} className={'watch_all'}>Дивитись все</Link>
            {imgThatNeed(props.itemNumber)}
        </li>
    )
};

export default CategoriesListItem;