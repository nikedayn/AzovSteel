import s from './filter.module.scss';

const Filter = (props) => {
    return(
        <div className={s.filter}>
            <h3 className={s.filter_headline}>ФІЛЬТР</h3>
            <ul className={s.filter_options_list}>
                <li className={s.filter_options_list_item}>
                    {/* <form action='mark' className={s.mark}>
                        <input className={s.mark_input} type="checkbox" name="" id="mark" />
                        <label className={s.mark_label} htmlFor="mark">Марка</label>
                        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 1L6.5 6L1 1" stroke="#000000" stroke-width="2"/>
                        </svg>
                        <ul className={s.mark_list}>
                            <li className={s.mark_list_item}>
                                <input type="checkbox" name="" id="mark1"/>
                                <label htmlFor="mark1">20</label>
                            </li>
                            <li className={s.mark_list_item}>
                                <input type="checkbox" name="" id="mark2"/>
                                <label htmlFor="mark2">10</label>
                            </li>
                            <li className={s.mark_list_item}>
                                <input type="checkbox" name="" id="mark"/>
                                <label htmlFor="mark3">15</label>
                            </li>
                            <li className={s.mark_list_item}>
                                <button>Скасувати все</button>
                            </li>
                        </ul>
                    </form> */}
                    <select className={s.filter_input} defaultValue='0' name="" id="">
                        <option className={s.filter_option} value='0'>Марка</option>
                        <option className={s.filter_option} value="1">20</option>
                        <option className={s.filter_option} value="2">10</option>
                        <option className={s.filter_option} value="3">15</option>
                    </select>
                </li>
                <li className={s.filter_options_list_item}>
                    <select className={s.filter_input} name="ГОСТ" id="">
                        <option className={s.filter_option} value='0'>ГОСТ</option>
                        <option className={s.filter_option}value="1">ГОСТ25660-01</option>
                        <option className={s.filter_option}value="2">ГОСТ25660-02</option>
                        <option className={s.filter_option}value="3">ГОСТ25660-03</option>
                        <option className={s.filter_option}value="4">ГОСТ25660-04</option>
                        <option className={s.filter_option}value="5">ГОСТ25660-05</option>
                    </select>
                </li>
                <li className={s.filter_options_list_item}>
                    <input className={s.filter_options_list_input} type="number" name="" id="" placeholder='Ширина, мм'/>
                </li>
                <li className={s.filter_options_list_item}>
                    <input className={s.filter_options_list_input} type="number" name="" id="" placeholder='Товщина, мм'/>
                </li>
                <li className={s.filter_options_list_item}>
                    <input className={s.filter_options_list_input} type="number" name="" id="" placeholder='Довжина, мм'/>
                </li>
            </ul>
            <div className={s.filter_btns}>
                <button className={s.filter_apply_btn}>
                    Застосувати
                </button>
                <button className={s.filter_reset_filter_btn}>
                    Скинути фільтр
                </button>
            </div>
        </div>
    )
};

export default Filter;