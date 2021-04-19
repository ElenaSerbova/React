import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import ArticleForm from '../ArticleForm'
import ArticleList from '../ArticleList'
import Nav from '../Nav/Nav'
import ArticleDetails from '../ArticleDetails'
import NotFound from '../NotFound'

import './App.css'

import articles from './Articles.json'
import ChildRoutes from '../ChildRoutes'
import Search from '../Search'


function App(){

    console.log(articles);    
    
    return (
        <div> 
            <BrowserRouter>
            
                <header>
                    <div className="p-5 text-center bg-light">
                        <h1>Header</h1>
                    </div>     
                    <Nav/>           
                </header>
           
                <Switch>
                    <Route exact path="/" children={()=><h2>Home</h2>}/>

                    <Route path="/Article/List" render={routeProps=>(
                        <ArticleList  data={articles} />
                    )}/>

                    <Route path="/Article/Create" component={ArticleForm}/>

                    <Route path="/Article/:id" render={(routeProps)=>(
                        <ArticleDetails data={articles} match={routeProps.match}/>
                    )}/>

                    <Route path="/Category" component={ChildRoutes}/>
                    <Route path="/Search" component={Search}/>

                    <Route component={NotFound}/>

                </Switch>
            </BrowserRouter>    
        </div>       
    )
}

export default App;