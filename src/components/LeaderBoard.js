import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatBoardScores } from '../utils/helpers'
import ScoreBoard from './ScoreBoard'
import PropTypes from 'prop-types'

class LeaderBoard extends Component{
    render(){
        const { boardScores } = this.props
        const boardLength = boardScores.length;
        return(
            <div>
                <div className="ui center aligned medium header">
                    Results
                    <div className='ui orange label'>{boardLength}</div>
                </div>
                <div>
                    {boardScores.map((board) =>(
                        <ScoreBoard key={board.id} board={board} />
                    ))}
                </div>
                
            </div>
            
        )
    }
}

/**
 * @description  compute for each user its total number of question asked, answered and total score.
 * @param {array} users - contain information about the user
 * @param {array} questions - contain information about questions
 * @param {array} auth - contain details about the logged in user
 * @returns { array } array of number of questions asked, answered, total score, avatar, name and id of users
 */
function mapStateToProps({users, questions, auth }){
    const boardScores = users ? Object.keys(users).map(userId =>{
        return formatBoardScores(users[userId], questions, auth.loggedInUser) 
    }) : null

    return{
        boardScores: boardScores.sort((a,b) => b.score - a.score)
    }
}

// Run typechecking on the props
LeaderBoard.propTypes = {
    boardScores: PropTypes.array
  }

export default  connect(mapStateToProps)(LeaderBoard)