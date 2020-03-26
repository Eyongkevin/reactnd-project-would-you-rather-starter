import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionDetails from './QuestionDetails'
import NoQuestion from './NoQuestions'

class Dashboard extends Component{
    state = { showUnanswered: true }

    handleUnanswered = (e) =>{
        e.preventDefault()
        this.setState({
            showUnanswered: true
        })
    }
    handleAnswered = (e) =>{
        e.preventDefault()
        this.setState({
            showUnanswered: false
        })
    }

    render() {
        const { showUnanswered } = this.state
        const { UnansweredIDs, answeredIDs } = this.props
        const setUnansweredClass = showUnanswered ? 'active item': 'item'
        const setAnsweredClass = showUnanswered ? 'item': 'active item'
        const showedQuestionIDs = showUnanswered ? UnansweredIDs: answeredIDs
        
            return(
                <div>
                    <div className="ui centered grid">
                        <div className="center aligned column">
                            <div className="ui compact menu">
                                <a className={setUnansweredClass} onClick = {this.handleUnanswered}>
                                            Unanswered
                                            <div className="ui red circular label">{UnansweredIDs.length}</div>
                                </a>
                                <a className={setAnsweredClass} onClick={this.handleAnswered}>
                                            Answered
                                            <div className="ui green circular label">{answeredIDs.length}</div>
                                            
                                </a>
                            </div>      
                        </div>
                    </div>
                    <div className= "ui hidden divider"></div>

                    {showedQuestionIDs.length ? showedQuestionIDs.map((id) =>(
                        <QuestionDetails key={id} quesId = {id}/>
                    )):<NoQuestion />}

                    
                </div>
                
            )
        }
}

function mapStateToProps({auth, questions}){
    const { loggedInUser }  = auth
    const answeredIDs = Object.keys(questions).filter((id) =>{
        return (questions[id].optionOne.votes.includes(loggedInUser) || 
                        questions[id].optionTwo.votes.includes(loggedInUser))
    })
    const UnansweredIDs = Object.keys(questions).filter((id) =>{
        return !answeredIDs.includes(id)
    })

    return{
        UnansweredIDs:  UnansweredIDs
                .sort((a,b) => questions[b].timestamp - questions[a].timestamp), 

        answeredIDs: answeredIDs
                .sort((a,b) => questions[b].timestamp - questions[a].timestamp) 
    }


}
export default connect(mapStateToProps)(Dashboard)


