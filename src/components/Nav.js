import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleLogoutUser } from '../actions/auth'

class Nav extends Component {

  handleLogout = (e) =>{
      e.preventDefault()
      this.props.dispatch(handleLogoutUser(this.props.loggedUserID))
  }
  render() {
    const { loggedUser,  IsAuth} = this.props

    return (
      <div >
        <nav className='nav'>
          <ul>
            <li>
              <NavLink to='/' className='link-item' exact activeClassName='active'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/add' className='link-item' activeClassName='active'>
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink to='/leaderboard' className='link-item' activeClassName='active'>
                Leader Board
              </NavLink>
            </li>
            { IsAuth
              ? <li className="fr">
              <span> Hi, {loggedUser.name} </span>
              <img
                    src={loggedUser.avatarURL}
                    alt={`Avatar of ${loggedUser.name}`}
                    className="ui avatar image profile-image"
                />

              <a href='/' className='link-item' onClick={this.handleLogout}>
                Logout
              </a>
            </li>
              : null}
          </ul>
        </nav>
        <div className= "ui hidden divider"></div>
      </div>
    )
  }
}

function mapStateToProps({users, auth}){
    const loggedUser = auth ? users[auth.loggedInUser]: {}
    const loggedUserID = auth ? auth.loggedInUser: null
    return{
        loggedUser: loggedUser,
        IsAuth: auth ? auth.IsAuth : false,
        loggedUserID: loggedUserID
    }

}


export default  connect(mapStateToProps)(Nav)