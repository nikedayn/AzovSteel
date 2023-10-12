import './button.scss';

const Button = (props) => {
    return(
        <button className={`${props.class}_btn`}>
            {props.content}
        </button>
    );
};

export default Button;