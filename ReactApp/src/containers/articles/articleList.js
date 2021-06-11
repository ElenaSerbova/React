import React from 'react';
import { connect } from 'react-redux';

import {getArticles } from './articleActions'
import ArticleItem from './components/articleItem';

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };       
    }

    componentDidMount() {
        console.log('did mount');
        this.props.getArticles();        
    } 

    render() { 

        console.log(this.props.posts)

        let posts = this.props.posts ? this.props.posts.map(item => {
            return (
                <ArticleItem key={item.Id} data={item} isFull={false} isLogged={this.props.isLogged}  />
            );
        }) :

        '';

        return (
            <div id="blog">
                <div id="lenta">
                    {posts}                    
                </div>               
            </div>
        );
    }
};

let mapProps = (state) => {
    return {
        posts: state.data,       
        error: state.error,
        isLogged: state.header.isLogged
    }
}

let mapDispatch = (dispatch) => {
    return {
        getArticles: () => { dispatch(getArticles())},        
    }
}

export default connect(mapProps, mapDispatch)(ArticleList) 