import './footer_links.scss';
import ForAllList from '../../Common/ForAllList/ForAllList';

const FooterLinks = (props) => {
    return(
        <div className={`${props.class}_info`}>
            <h3 className={`${props.class}_info_h3`}>{props.text}</h3>
            <ForAllList
                listItems={props.listItems}
                class={`${props.class}_info`}
                type={'navigation'}
            />
        </div>
    )
};

export default FooterLinks;