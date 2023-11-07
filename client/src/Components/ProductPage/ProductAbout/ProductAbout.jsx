import s from './product_about.module.scss';

const ProductsAbout = (props) => {
    let characteristicsList = [
        {
            name: 'Товщина',
            value: `${props.product.width}`
        },
        {
            name: 'Довжина',
            value: `${props.product.length}`
        },
        {
            name: 'Ширина',
            value: `${props.product.thickness}`
        },
        {
            name: 'Марка сталі',
            value: `${props.product.mark}`
        },
        {
            name: 'ГОСТ',
            value: `${props.product.GOST}`
        },
    ]

    let descriptions = props.descriptions.map((description, index) => {
        return <p className={s.product_description}>
            {description}
        </p>
    })

    let characteristics = characteristicsList.map((characteristic, index) => {
        return <li class={s.characteristics_list_item}>
            <p class={s.characteristics_list_name}>{characteristic.name}</p>
            <p class={s.characteristics_list_value}>{characteristic.value}</p>
        </li>
    })

    return(
        <>
            <article className={s.description}>
                <h2 class={s.about_text}>ОПИС</h2>
                {descriptions}
            </article>
            <article className={s.characteristics}>
                <h2 class={s.characteristics_h2}>ХАРАКТЕРИСТИКИ</h2>
                <ul class={s.characteristics_list}>
                    {characteristics}
                </ul>
            </article>
        </>
    )
};

export default ProductsAbout;