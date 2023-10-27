import './services_part.scss';

import img from '../../assets/img/man_cut_pipes.jpg';
import ForAllList from '../../Common/ForAllList/ForAllList';

const ServicePart = (props) => {
    return(
        <>
            <h2 class={`${props.class}_h2`}>{props.text}</h2>
            <div class={`${props.class}_variants`}>
                <ForAllList
                    listItems={props.listItems}
                    class={props.class}
                    type={props.listType}
                />
                <img class={`${props.class}_img`} src={img}alt="man_cut_pipes"/>
            </div>
        </>
    )
};

export default ServicePart;