import React, { Component, Fragment } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleLogoutUser } from '../actions/auth'
import { Redirect } from 'react-router-dom'

class Nav extends Component {
  state = {
       activeItem: '/' 
    }

  handleItemClick = (e, { value }) => this.setState({ activeItem: value })

  handleLogout = (e) =>{
      this.props.dispatch(handleLogoutUser(this.props.loggedUserID))
  }
  render() {
    const { activeItem } = this.state
    const { loggedUser,  IsAuth} = this.props

    return (
      <Fragment>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            value='/'
            active={activeItem === '/'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='newQuestion'
            value='/add'
            active={activeItem === '/add'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='leaderBoard'
            value='/leaderBoard'
            active={activeItem === '/leaderboard'}
            onClick={this.handleItemClick}
          />
          
          <Menu.Menu position='right'>
          {IsAuth 
            ?
            <Fragment>
                <Menu.Item
                    name={loggedUser.name}
                    />
                <img
                    src={loggedUser.avatarURL}
                    className="ui avatar image"
                />
                
                <Menu.Item
                name='logout'
                value='logout'
                active={activeItem === 'logout'}
                onClick={this.handleLogout}
                />
            </Fragment>
            : null}
          </Menu.Menu>    
        </Menu>
        {IsAuth
            ?<Redirect to={activeItem} /> 
          : null} 
        </Fragment>
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