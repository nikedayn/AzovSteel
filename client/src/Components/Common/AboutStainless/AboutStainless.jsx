import s from './about_stainless.module.scss';

import img460 from '../../assets/img/stainless460.jpg';
import img398 from '../../assets/img/stainless398.jpg';

let imgThatNeed = (imgWidth) => {
    switch(imgWidth) {
        case 460: {
            return <img src={img460} alt="stainless_steel"/>
        }
        case 398: {
            return <img src={img398} alt="stainless_steel"/>
        }
    }
}

const AboutStainless = (props) => {
    return(
        <>
            <div className={s.about}>
                <h2 className={s.about_healidine}>Нержавіючі листи ціна від виробника</h2>
                <article className={s.about_article}>
                    <p className={s.about_text}>
                        Так само підвищення рівня громадянської свідомості не залишає шансу для своєчасного виконання надзавдання. А ще репліковані із зарубіжних джерел, сучасні дослідження неоднозначні та будуть оприлюднені.
                    </p>
                    <p className={s.about_text}>
                        Так само підвищення рівня громадянської свідомості не залишає шансу для своєчасного виконання надзавдання. А ще репліковані із зарубіжних джерел, сучасні дослідження неоднозначні та будуть оприлюднені.
                    </p>
                    <p className={s.about_text}>
                        Таким чином, межа навчання кадрів не дає нам іншого вибору, крім визначення існуючих фінансових та адміністративних умов. Ясність нашої позиції очевидна: зміцнення та розвиток внутрішньої структури виявляє термінову потребу пріорітизації розуму над емоціями! Лише елементи політичного процесу набирають популярності серед певних верств населення, а отже, мають бути віддані соціально-демократичній анафемі.
                    </p>
                </article>
            </div>
            {imgThatNeed(props.imgWidth)}
        </>
    )
};

export default AboutStainless;