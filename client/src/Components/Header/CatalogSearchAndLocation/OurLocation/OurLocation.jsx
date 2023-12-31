import s from './our_location.module.scss';

const OurLocation = () => {
    return(
        <div className={s.our_location}>
            <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.89824 0.369141C2.74203 0.369141 0.987793 2.12338 0.987793 4.27959C0.987793 6.98971 4.90208 11.6191 4.90208 11.6191C4.90208 11.6191 8.80869 6.85643 8.80869 4.27959C8.80869 2.12338 7.05451 0.369141 4.89824 0.369141ZM6.0781 5.42457C5.75277 5.74984 5.32554 5.9125 4.89824 5.9125C4.47101 5.9125 4.04364 5.74984 3.71844 5.42457C3.06785 4.77404 3.06785 3.71551 3.71844 3.06491C4.03348 2.74974 4.45254 2.57616 4.89824 2.57616C5.34394 2.57616 5.76293 2.74981 6.0781 3.06491C6.7287 3.71551 6.7287 4.77404 6.0781 5.42457Z" fill="black"/>
            </svg>
            <article className={s.our_location_text}>
                <p>Донецька обл., м. Маріуполь</p>
                <p>Пн-Вс 8:00 - 21:00</p>
            </article>
        </div>
    );
};

export default OurLocation;