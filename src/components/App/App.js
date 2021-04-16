import React from 'react'
import ArticleForm from '../ArticleForm';
import ArticleList from '../ArticleList'

import './App.css'

import articles from './Articles.json'

function App(){

    console.log(articles);    
    
    return (
        <div>
            <header>
                <div className="p-5 text-center bg-light">
                    <h1>Header</h1>
                </div>                
            </header>
            <ArticleForm/>
            <ArticleList data={articles}/>
        </div>       
    )
}

export default App;