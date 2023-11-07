import s from './product_header.module.scss';
import ForAllList from '../../Common/ForAllList/ForAllList'

const ProductHeader = (props) => {
    return(
        <div className={s.name_and_path}>
            <h1 class={s.product_name}>{props.name}</h1>
            <ForAllList
                listItems={props.path}
                class='path'
                type='navigation'
            />
        </div>
    )
};

export default ProductHeader;