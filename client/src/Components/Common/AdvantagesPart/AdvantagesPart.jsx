import './advantages_part.scss';

import ForAllList from '../ForAllList/ForAllList';

const AdvantagesPart = (props) => {
    return(
        <>
            <h2 class={`${props.class}_h2`}>{props.text}</h2>
            <ForAllList
                listItems={props.listItems}
                class={props.class}
                type={props.listType}
            />
        </>
    )
};

export default AdvantagesPart;