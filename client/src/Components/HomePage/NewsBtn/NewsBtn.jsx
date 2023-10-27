import './news_btn.scss';
import { Link } from 'react-router-dom';

const NewsBtn = (props) => {
    return(
        <Link to={'/all_news'}>
            <button className={'watch_all_news'}>
                ВСІ НОВИНИ
            </button>
        </Link>
    )
};

export default NewsBtn;