import React from 'react'

//function Article(props){}
//const Article = (props) => {}

class Article extends React.Component{

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

        let articleStyles = {
            color: 'blue',
            border: '1px black solid',
            margin: '5px'
        } 

        return (
            <article style={articleStyles}>
                <h1>{article.title}</h1>
                <p>{this.state.isOpen ? article.text : article.text.substr(0, 15) + '...'}</p> 
                <button onClick={this.buttonClickHandler} style={this.state.buttonColor}>
                    {this.state.isOpen ? 'Close' : 'Open'}
                </button>        
            </article>
        )
    }
}




export default Article

