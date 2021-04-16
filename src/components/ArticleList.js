import React from 'react'
import Article from './Article'

function ArticleList (props){

    const {data} = props;
    let articleComponents = null;

    if(data.length){
        articleComponents = data.map((item)=>{
            return <Article key={item.id} articleData={item}/>
        });
    }
    else{
        articleComponents = <p>No articles</p>
    }

    return (
        <div>
            {articleComponents}
        </div>
    );
}

export default ArticleList;