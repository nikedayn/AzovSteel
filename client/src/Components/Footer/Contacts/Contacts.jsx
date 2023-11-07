import s from './contacts.module.scss';

const Contacts = (props) => {
    return(
        <div className={s.contact_info}>
            <div className={s.contact_info_contacts}>
                <h3 className={s.contact_info_h3}>КОНТАКТИ</h3>
                <ul className={s.contact_info_list}>
                    <li className={s.contact_info_list_link}>
                        <a href="tel:8 800 555 35 35">8 800 555 35 35</a>
                    </li>
                    <li className={s.contact_info_list_link}>
                        <a href="mailto:atomes@help.com">atomes@help.com</a>
                    </li>
                </ul>
            </div>
            <button className={s.call_button}>ЗАМОВИТИ ДЗВІНОК</button>
        </div>
    )
};

export default Contacts;