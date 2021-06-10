import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import LoginForm from '../../components/loginForm.js';
import { login, logout, showLoginForm, inputLogin, inputPassword } from './headerActions.js'

class Header extends React.Component {
    render() {
        let newPostButton = this.props.header.isLogged ?
            <div className="menu">
                <ul>
                    <li>
                        <Link className="link" to="/Article/Create">Новая статья</Link>
                    </li>
                    <li>
                        <a className="link" onClick={() => {  this.props.logout()}}>Выход</a>
                    </li>
                </ul>
            </div>:
            '';

        let loginButton = this.props.header.isLogged ?
            <span className="nameLabel">Привет, {this.props.header.name}</span> :
            <a className="link" onClick={() => { this.props.showLoginForm(!this.props.header.isLoginFormShowed); }}>Логин</a>
        
        let loginForm = this.props.header.isLoginFormShowed ?
            <LoginForm onLogin={this.props.login} login={this.props.header.name} password={this.props.header.password} onChangeLogin={this.props.inputLogin} onChangePassword={this.props.inputPassword} /> :
            '';

        return (
            <header>
                <div id="photoTitle"></div>
                <div id="title">Personal Portal</div>
                <div className="rightMenu">
                    {newPostButton}
                    {loginButton}
                    {loginForm}
                </div>
                <menu className="menu">
                    <ul>
                        <li>
                            <NavLink to="/Article/List">Блог</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/" className="nav-link">Home</NavLink>
                        </li>                       
                    </ul>
                </menu>
            </header>
        );
    }
};

let mapProps = (state) => {
    return {
        header: state.header
    }
}

let mapDispatch = (dispatch) => {
    return {
        login: bindActionCreators(login, dispatch),
        logout: bindActionCreators(logout, dispatch),
        showLoginForm: bindActionCreators(showLoginForm, dispatch),
        inputLogin: bindActionCreators(inputLogin, dispatch),
        inputPassword: bindActionCreators(inputPassword, dispatch)
    }
}

export default connect(mapProps, mapDispatch)(Header)