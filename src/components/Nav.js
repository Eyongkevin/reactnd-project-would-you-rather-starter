import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleLogoutUser } from '../actions/auth'
import PropTypes from 'prop-types'

class Nav extends Component {

  /**
   * @description log out user from app
   * @param {array} e - event
   */
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

/**
 * @description Get logged in user's details 
 * @param {array} users - contain information about the user
 * @param {array} auth - contain details about the logged in user
 * @returns {array} details about the logged in user
 */
function mapStateToProps({users, auth}){
    const loggedUser = auth ? users[auth.loggedInUser]: {}
    const loggedUserID = auth ? auth.loggedInUser: null
    return{
        loggedUser,
        IsAuth: auth ? auth.IsAuth : false,
        loggedUserID: loggedUserID
    }

}

// Run typechecking on the props
Nav.propTypes = {
  loggedUser: PropTypes.object,
  IsAuth: PropTypes.bool,
  loggedUserID: PropTypes.string
}
export default  connect(mapStateToProps)(Nav)