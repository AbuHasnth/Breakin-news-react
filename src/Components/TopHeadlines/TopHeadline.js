import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [article, setArticle]= useState([]);
    useEffect(()=>{
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=9cf93a6d47c94a4896b5dd5e1f420392')
        .then(res=> res.json())
        .then(data =>setArticle(data.articles));
    },[])
    console.log(article)
    
    


    return (
        <div>
            <h1>Top Headlinde {article.length}</h1>
            {
                article?.map (article=><News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;