import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import BoxHeader from './BoxHeader'

class QuestionDetails extends Component{
    render(){
        const { summary } = this.props
        if(summary === null){
            return <p>Sorry! the question does not exist</p>
        }
        const {
            name,
            avatarURL,
            optionOneText,
            optionTwoText,
            questionId,
            timestamp
        } = summary
        
        return(
            <div>
                <div className="ui equal width center aligned padded grid">
                    <BoxHeader name={name} avatarURL={avatarURL} timestamp={timestamp} />
                    <div className="three row question ">
                        <div className="column ui center">
                            <div className= "ui hidden divider"></div>
                            <div className="row">
                                {optionOneText} &nbsp;
                                <div className="ui circular labels">
                                    <i className="ui label">OR</i>
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
    const {avatarURL} = users[author]
    const { loggedInUser }  = auth
    
    let { name } = users[author]
        if ( name === users[loggedInUser].name ){
            name = 'You ask'
        }else{
            name = name + ' asks'
        }

  
    return {
      summary: question
        ? {
            name: name,
            avatarURL: avatarURL,
            optionOneText: question.optionOne.text,
            optionTwoText: question.optionTwo.text,
            timestamp: question.timestamp,
            questionId : quesId
            
        }
        : null
    }
  }

  
export default connect(mapStateToProps)(QuestionDetails)