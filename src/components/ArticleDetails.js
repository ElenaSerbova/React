import {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'

class ArticleDetails extends Component{

    render(){

        console.log(this.props);

        const id = this.props.match.params.id;

        const articles = this.props.data;

        const article = articles.find((element) => element.id === id);

        let body;

       if(article){
            body = (                
                <article className="card-body">
                    <h1 className="card-title">{article.title}</h1>
                    <p className="card-text">{article.text}</p>                          
                </article>                   
            );
       }
       else {
           //body =  <h3>Article not found </h3>;

           return <Redirect to="/Article/List"></Redirect>
       }


       return (
        <div className="card"> 
            {body}
            <Link to='/Article/List' className="btn btn-info w-25">Article List</Link>
        </div>
       );
    }

}

export default ArticleDetails