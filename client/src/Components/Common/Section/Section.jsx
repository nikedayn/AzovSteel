import './section.scss';

const Section = (props) => {
    return(
        <section className={`${props.class}_section`}>
            <div className="container">
                {props.content}
            </div>
        </section>
    )
};

export default Section;