import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/helpers'
class QuestionDetails extends Component{
    render(){
        const { summary } = this.props
        if(summary === null){
            return <p>Sorry! the question does not exist</p>
        }
        const {
            avatarURL,
            optionOneText,
            optionTwoText,
            questionId,
            timestamp,
            loggedInUser,
        } = summary
        let { name } = summary
        if (loggedInUser === name){
            name = 'You ask'
        }else{
            name = name + ' asks'
        }
        return(
            <div>
                <div className="ui equal width center aligned padded grid">
                        <div className="three row">
                            <div className="orange column ui left aligned questionColumn">
                                <img
                                    src={avatarURL}
                                    className="ui avatar image mini "
                                />
                                <span className="question-title">
                                    <span>{name} </span>
                                  
                                    <span><strong>Would you rather?</strong></span>
                                    <span className = 'date-display'>
                                        <i aria-hidden="true" className="time icon"></i>
                                            {formatDate(timestamp)}
                                    </span>

                                </span>
                                
                                
                            </div>
                        </div>
                        <div className="three row question ">
                            <div className="column ui center">
                                <div className= "ui hidden divider"></div>
                                <div className="row">
                                    {optionOneText} &nbsp;
                                    <div className="ui circular labels">
                                        <a className="ui label">OR</a>
                                    </div> &nbsp;
                                    {optionTwoText}

                                </div>
                                <div className= "ui hidden divider"></div>
                                <div className="row">
                                <Link to={`/questions/${questionId}`} className='btn'>
                                    
                                    <button className="ui orange basic button">View Poll</button>
                                </Link>
                                </div>
                            </div>
   
                        </div>
                    </div>
                <div className= "ui hidden divider"></div>
            </div>
            
        )
    }
}


function mapStateToProps ({users, auth, questions}, { quesId }) {
    const question = questions[quesId]
    const author = question.author
    const {name, avatarURL} = users[author]
    const { loggedInUser }  = auth
    

  
    return {
      summary: question
        ? {
            name: name,
            avatarURL: avatarURL,
            optionOneText: question.optionOne.text,
            optionTwoText: question.optionTwo.text,
            timestamp: question.timestamp,
            questionId : quesId,
            loggedInUser: users[loggedInUser].name
            
        }
        : null
    }
  }

  
export default connect(mapStateToProps)(QuestionDetails)