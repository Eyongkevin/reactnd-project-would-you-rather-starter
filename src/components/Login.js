import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Select } from 'semantic-ui-react'
import { handleLoginUser } from '../actions/auth'
import logo from '../logo.svg'

class Login extends Component{
    state = {
        userSelected: ''
    }

    handleChange = (e, data) =>{
        const userSelected = data.value;
        
        this.setState(() =>({
            userSelected,
            
        }))
    }
    submitLogin = (e) =>{
        e.preventDefault()
        const { dispatch } = this.props;

        dispatch(handleLoginUser(this.state.userSelected))

    }
    render(){
        const {IsAuth, LoginUsers, loggedOutUser } = this.props

        if(IsAuth){
            return <Redirect to= '/' />
        }
        const UserOptions = LoginUsers.map((user) =>{
            return {
                key: user.id,
                value: user.id,
                text: user.name,
                image: {avatar: true, src: user.avatarURL}
            }
        })
          
          

        return(
            <div className="ui container"> 
 
                <div className="ui raised segment">
                    <div className="ui stackable column doubling centered grid">
                        <div className="ui middle aligned center aligned grid">
                            <div className="row" >
                                <div className="column">
                                    <h1 className="ui orange header">
                                        Whould You Rather?
                                        <div className="sub header">We're happy to have you here.</div>
                                    </h1>
                                    
                                    <div className="ui hidden divider"></div>
                                    <img alt="logo" src={logo} className="ui small image centered" />
                                    <h3 className="ui orange header">
                                        Login
                                        <div className='sub header'>Please Select a User to Log in as</div>

                                    </h3>
                                    <form className="ui form">
                                        <div className="ui stacked element">
                                            <div className="field required">
                                            <Select placeholder='Log in as...'
                                                 options={UserOptions} 
                                                 onChange={this.handleChange}/>

                                            </div>
                                            <div className="ui element">
                                            {loggedOutUser &&
                                            <div>
                                                <span className="recentlyLogedInfo">Recently logged in as..</span>
                                            <i className="ui image label">
                                                 
                                                <img alt="Logged out user" src={loggedOutUser.avatarURL} />
                                                {loggedOutUser.name}
                                            </i>
                                            </div>}

                                            </div>

                                            <button className="ui button orange fluid" 
                                                    disabled = {this.state.userSelected === ''} 
                                                    onClick = {this.submitLogin}
                                                    >Log In</button>

                                        </div>
                                    </form> 
                                    <h6>Programmed with <i aria-hidden="true" className="like icon red"></i> by
                                        <a href="https://www.linkedin.com/in/eyong-enowanyo/" target="_blank" rel="noopener noreferrer" className="ui orange "> Eyong Kevin Enowanyo</a></h6>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


function mapStateToProps({users, auth}){
    const LoginUsers = Object.keys(users).map((userID) =>{
        return ({
            id: userID,
            name:users[userID].name,
            avatarURL: users[userID].avatarURL

        })
    })
    const loggedOutUserId = auth ? auth.loggedOutUserId: null
 
    return{
        LoginUsers,
        IsAuth: auth ? auth.IsAuth : false,
        loggedOutUser: loggedOutUserId ? users[loggedOutUserId] : null
    }

}


export default  connect(mapStateToProps)(Login);