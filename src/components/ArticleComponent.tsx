import { format } from 'date-fns'
import {Article} from '../interfaces/article'
import localeIt from 'date-fns/locale/it';
import {useNavigate} from 'react-router-dom'

// export interface Article {
//     id:           number;
//     title:        string;
//     url:          string;
//     image_url:    string;
//     news_site:    string;
//     summary:      string;
//     published_at: Date;
//     updated_at:   Date;
//     featured:     boolean;
//     launches:     Launch[];
//     events:       any[];
// }


export default function ArticleComponent({article,clickable}:{article: Article|null,clickable:boolean}){
    const navigate = useNavigate();
    function handleClick(){
        if(clickable && article !== null){
            navigate("/article/"+article.id)
        }
    }
    if(article !== null){
    const date = new Date(article.published_at);
    return(
    <div className='article d-flex align-items-center flex-column rounded-3 p-3' onClick={handleClick}>
        <div className='flex-grow-1'>
        <h4 className='text-center mb-2'>{article.title}</h4>
        <img src={article.image_url} alt={article.title} className='rounded-3 w-100 mt-2'/>
        <p className='pt-2 text-justify'>{article.summary}</p>
        </div>
        <p><strong>Data di pubblicazione: </strong>{format(date,'d LLLL yyyy HH:mm:ss',{locale: localeIt})}</p>
    </div>
    )
}else{
    return <></>
}
}