import s from './product_body.module.scss';

import img from '../../assets/img/product_img.png';
import ForAllList from '../../Common/ForAllList/ForAllList';

let inputs = [
    {
       text: 'Товщина',
       placeholder: '1,5' 
    },
    {
        text: 'Довжина',
        placeholder: '6' 
    },
    {
        text: 'Ширина',
        placeholder: '6' 
    },
]

const ProductsBody = (props) => {
    return(
        <>
            <div className={s.img_and_configurations}>
                <img src={img} alt=""/>
                <div className={s.product_configuration}>
                    <ForAllList
                        listItems={inputs} 
                        class={'configuration'} 
                        type={'configuration'}
                    />
                    <div className={s.additionally}>
                        <p className={s.additionally_text}>Додатково</p>
                        <select className={s.additionally_input} name="" id="">
                            <option className={s.additionally_option} value="1">Різання1</option>
                            <option className={s.additionally_option} value="2">Різання2</option>
                            <option className={s.additionally_option} value="3">Різання3</option>
                            <option className={s.additionally_option} value="4">Різання4</option>
                            <option className={s.additionally_option} value="5">Різання5</option>
                        </select>
                    </div>
                </div>
                <div className={s.quantity_and_sum}>
                    <div className={s.quantity}>
                        <div className={s.quantity_change}>
                            <button>
                                <span className={s.minus}></span>
                            </button>
                            <p className={s.number}>2</p>
                            <button>
                                <span className={s.plus}></span>
                            </button>
                        </div>
                        <p class={s.quantity_text}>шт</p>
                    </div>
                    <div className={s.sum}>
                        <p className={s.sum_titel}>Разом:</p>
                        <p className={s.sum_number}>48 925 грн.</p>
                    </div>
                    <button class={s.in_cart_btn}>В КОШИК</button>
                </div>
            </div>
        </>
    )
};

export default ProductsBody;