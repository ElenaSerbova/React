import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

class ArticleForm extends Component{

    constructor(props)   {
        super(props);

        this.state = {
            title: "Title",
            text: "Some text",
            isValid: true,
            isAgree: false,
            isValidTitle: true,
            isValidText: true,
            isCreated: false
        }

        this.submitHandler = this.submitHandler.bind(this);
        this.titleChangeHandler = this.titleChangeHandler.bind(this);
        this.textChangeHandler = this.textChangeHandler.bind(this);
        this.agreeChangeHandler = this.agreeChangeHandler.bind(this);
        
    }

    submitHandler(event){
        console.log(event);
        event.preventDefault();

        let {isValidText, isValidTitle, isAgree} = this.state;

        if(isValidTitle && isValidText && isAgree){

            const baseUrl = "https://localhost:44342/api/article";

            const article = {
                Title: this.state.title,
                Text: this.state.text
            }

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(article)
            }
    
            fetch(baseUrl, options)
                .then((response) => {
                    if(response.ok)
                    {
                       this.setState({isCreated: true});
                    }
                });
        
        }
        else{
            console.log("not valid");
        }
    }

    titleChangeHandler(e){
        let value = e.currentTarget.value;
        let isValid = this.validateText(value);
        this.setState((prevState, props)=> { 
            return {title: value, isValidTitle: isValid}
        });
    }

    textChangeHandler(e){
        let value = e.currentTarget.value;
        let isValid = this.validateText(value);
        this.setState((prevState, props)=> { 
            return {text: value, isValidText: isValid}
        });    
    }

    agreeChangeHandler(e){
        this.setState({isAgree: e.currentTarget.checked})
    }   

    validateText(text){
        return text.length > 2;
    }

    render(){

        if(this.state.isCreated)
        {
            return (<Redirect to="/Article/List" />);
        }
        else
        {
            return (    
                <div className="container">     
                    <form onSubmit={this.submitHandler}>
                        <div className="form-group">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input 
                                value={this.state.title} 
                                onChange={this.titleChangeHandler}                           
                                type="text" 
                                name="title" 
                                id="title" 
                                className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="text" className="form-label">Text</label>
                            <textarea 
                                value={this.state.text} 
                                onChange={this.textChangeHandler}                            
                                name="text" 
                                id="text" 
                                className="form-control"></textarea>
                        </div>   
                        <div className="form-group">
                            <label htmlFor="agree" className="form-label">Are you agree?</label>
                            <input 
                                onChange={this.agreeChangeHandler}                            
                                type="checkbox" 
                                name="isAgree" 
                                id="agree" 
                            />
                        </div>                 
                        <input 
                            disabled={!this.state.isValidTitle || !this.state.isValidText || !this.state.isAgree}
                            type="submit"
                            className="btn btn-primary" 
                            value="Create"/>
                    </form>   
                </div>            
            );
        }
    }
}

export default ArticleForm;