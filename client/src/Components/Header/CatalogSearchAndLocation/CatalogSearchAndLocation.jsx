import Button from "../../Common/Button/Button";
import OurLocation from "./OurLocation/OurLocation";

import s from './catalog_search_and_location.module.scss';

const CatalogSearchAndLocation = () => {
    return(
        <div className={s.catalog_search_and_location}>
            <Button 
                class={'catalog'}
                content={[
                    <p>КАТАЛОГ</p>,
                    <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1L6.5 6L1 1" stroke="#FFFF" strokeWidth="3"/>
                    </svg>
                ]}
            />
            <input className={s.search_input} placeholder="Поиск по каталогу" type="search" name="" id=""/>
            <OurLocation/>
        </div>
    );
};

export default CatalogSearchAndLocation;