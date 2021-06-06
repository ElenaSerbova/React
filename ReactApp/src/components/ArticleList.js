import React, { Component } from 'react'
import ArticleItem from './ArticleItem'

class ArticleList extends Component{

    constructor(props){
        super(props);

        this.state = {
            data: [],
            isLoaded: false,
            error: null
        }
    }

    componentDidMount(){
        fetch("https://localhost:44342/api/article")
        .then(res => res.json())
        .then(
            data => {
             this.setState({data: data, isLoaded: true})   
            },
            error => {
                this.setState({isLoaded:true, error})
            }
        )
    }

    render(){

        const {data, isLoaded, error} = this.state;

        let articleComponents = null;

        if(error){
            articleComponents = <p>Error: {error.message}</p>
        }
        else if(!isLoaded){
            articleComponents = <p>Loading...</p>
        }
        else if(data.length){
            articleComponents = data.map((item)=>{
                return <ArticleItem key={item.id} articleData={item}/>
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
}

export default ArticleList;