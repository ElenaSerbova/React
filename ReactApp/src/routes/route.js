import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router-dom';


import ArticleList from '../containers/articles/articleList.js'
import ArticleForm from '../components/ArticleForm'
import ArticleDetails from '../components/articleDetails'
import ChildRoutes from '../components/ChildRoutes'
import Search from '../components/Search'
import NotFound from '../components/NotFound'

export default class Routing extends React.Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route path="/Article/List" render={routeProps=>(
                        <ArticleList />
                    )}/>
                    <Route path="/Article/Create" component={ArticleForm}/>
                    <Route path="/Article/:id" render={(routeProps)=>(
                        <ArticleDetails match={routeProps.match}/>
                    )}/>

                    <Route path="/Category" component={ChildRoutes}/>
                    <Route path="/Search" component={Search}/>
                    <Route exact path="/" children={()=><h2>Home</h2>}/>
                    <Route component={NotFound}/>
                </Switch>
            </main>
        )
    }
};