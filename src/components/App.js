import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { handleInitialData } from '../actions/share';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';
import Nav from './Nav';
import QuestionMainPage from './QuestionMainPage';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
import PageNotFound from './PageNotFound';
import LoadingBar from 'react-redux-loading';
import PropTypes from 'prop-types'


class App extends Component{
  /**
   * @description Dispatch an action that loads all data from file
   */
  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }
  
  render(){
    const {loading, IsAuth } = this.props;
  
    return (
      <Router>
        <Fragment>
         <LoadingBar />
          <div className="ui container">
          <Nav />
          {loading === true
          ? 
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
          </div>
          :
          <div>
            <Switch>
              <ProtectedRoute path='/' exact component={Dashboard}
                                        isAuthenticated={IsAuth}/>
              <Route path="/login" exact component={withRouter(Login)}/>
              <ProtectedRoute path='/questions/:id' component={QuestionMainPage} 
                                        isAuthenticated={IsAuth}/>
              <ProtectedRoute path='/leaderboard' component={LeaderBoard} 
                                        isAuthenticated={IsAuth}/>
              <ProtectedRoute path='/add' component={NewQuestion} 
                                        isAuthenticated={IsAuth}/>
              <Route component={PageNotFound} />
            </Switch>
          </div>}
          </div>
        </Fragment>
      </Router>
    );
  }
  
}

/**
 * @description check that users and questions data are all loaded.
 * @param {array} users - contain information about the user
 * @param {array} questions - contain information about questions
 * @param {array} auth - contain details about the logged in user
 * @returns {array} `loadong` that determine if `users` and `questions` were loaded completely and `IsAuth` determine if a user is logged in or not
 */
function mapStateToProps({users, questions, auth}){
  const loading = Object.keys(users).length === 0 && Object.keys(questions).length === 0;
  const IsAuth = auth ? auth.IsAuth : false
  return{
    loading,
    IsAuth

  }
}

// Run typechecking on the props
App.propTypes = {
  loading: PropTypes.bool.isRequired,
  IsAuth: PropTypes.bool
}

export default connect(mapStateToProps)(App);
