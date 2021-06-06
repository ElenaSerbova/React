import React from 'react'
import {Link} from 'react-router-dom'

//function Article(props){}
//const Article = (props) => {}

class ArticleItem extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
            count: 0,
            buttonColor: {color: 'green'}
        }

        this.buttonClickHandler = this.buttonClickHandler.bind(this);
    }

    buttonClickHandler(){
        //this.setState({isOpen: true});

        this.setState((prevState, props) => {
            return {
                isOpen: !prevState.isOpen,
                buttonColor: prevState.isOpen ? {color: 'green'} : {color: 'blue'}
            }
        });

    }

    // buttonClickHandler = () => {
    //     console.log(this.data);
    // }

    render(){

        console.dir(this.state.count);

        let {articleData: article} = this.props;       

        return (
            <div className="card">
                <article className="card-body">
                    <h1 className="card-title"><Link to={`/Article/${article.id}`}>{article.title}</Link></h1>
                    <p className="card-text">{this.state.isOpen ? article.text : article.text.substr(0, 15) + '...'}</p> 
                    <button onClick={this.buttonClickHandler} className="btn btn-primary">
                        {this.state.isOpen ? 'Close' : 'Open'}
                    </button>        
                </article>
            </div>
        )
    }
}




export default ArticleItem

