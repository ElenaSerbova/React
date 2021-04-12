import React from 'react'

import Article from './Article'

import './App.css'

function App(){

    let article1 = {
        title: "React",
        text: "JavaScript-библиотека для создания пользовательских интерфейсов"
    }

    let article2 = {
        title: "Angular",
        text: "JavaScript-фреймворк с открытым исходным кодом. Предназначен для разработки одностраничных приложений."
    }
    
    return (
        <div>
            <header>Header</header>
            <Article articleData={article1} />
            <Article articleData={article2} />
        </div>
       
    )
}

export default App;