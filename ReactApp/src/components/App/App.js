import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import Header from '../../containers/header/header.js'
import Routing from '../../routes/route.js'

import './App.css'

function App(){       
    
    return (
        <div> 
            <BrowserRouter>            
                <Header/>           
                <Routing/>
            </BrowserRouter>    
        </div>       
    )
}

export default App;