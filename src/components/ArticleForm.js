import React, {Component} from 'react'

class ArticleForm extends Component{

    constructor(props)   {
        super(props);

        this.state = {
            title: "Title",
            text: "Some text",
            isValid: true,
            isAgree: false,
            isValidtitle: true,
            isValidtext: true
        }

        this.submitHandler = this.submitHandler.bind(this);
        // this.titleChangeHandler = this.titleChangeHandler.bind(this);
        // this.textChangeHandler = this.textChangeHandler.bind(this);
        // this.agreeChangeHandler = this.agreeChangeHandler.bind(this);

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    submitHandler(event){
        console.log(event);
        event.preventDefault();

        if(this.state.isValidTitle){
            alert("Created article");
        }
    }

    // titleChangeHandler(e){
    //     let value = e.currentTarget.value;
    //     let isValid = this.validateText(value);
    //     this.setState((prevState, props)=> { 
    //         return {title: value, isTitleValid: isValid}
    //     });
    // }

    // textChangeHandler(e){
    //     let value = e.currentTarget.value;
    //     let isValid = this.validateText(value);
    //     this.setState((prevState, props)=> { 
    //         return {text: value, isTextValid: isValid}
    //     });    
    // }

    // agreeChangeHandler(e){
    //     this.setState({isAgree: e.currentTarget.checked})
    // }

    onChangeHandler(e){
        const target = e.currentTarget;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        let isValid = false;
        let newState = {};

        if(target.type !== 'checkbox'){
            isValid = this.validateText(value);
            newState[target.name] = value;
            newState['isValid' + target.name] = isValid;
            console.log('isValid' + target.name)
        }
        else{
            newState.isAgree = value;
        }

        this.setState(newState);

    }

    validateText(text){
        return text.length > 2;
    }

    render(){
        return (            
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input 
                        value={this.state.title} 
                        //onChange={this.titleChangeHandler}
                        onChange={this.onChangeHandler}
                        type="text" 
                        name="title" 
                        id="title" 
                        className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="text" className="form-label">Text</label>
                    <textarea 
                        value={this.state.text} 
                        //onChange={this.textChangeHandler}
                        onChange={this.onChangeHandler}
                        name="text" 
                        id="text" 
                        className="form-control"></textarea>
                </div>   
                <div className="form-group">
                    <label htmlFor="agree" className="form-label">Are you agree?</label>
                    <input 
                        //onChange={this.agreeChangeHandler}
                        onChange={this.onChangeHandler}
                        type="checkbox" 
                        name="isAgree" 
                        id="agree" 
                    />
                </div>                 
                <input 
                    disabled={!this.state.isValidtitle || !this.state.isValidtext || !this.state.isAgree}
                    type="submit"
                    className="btn btn-primary" 
                    value="Create"/>
            </form>            
        );
    }
}

export default ArticleForm;