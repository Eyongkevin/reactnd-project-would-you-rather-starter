import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatBoardScores } from '../utils/helpers'
import ScoreBoard from './ScoreBoard'

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

function mapStateToProps({users, questions, auth }){
    const boardScores = users ? Object.keys(users).map(userId =>{
        return formatBoardScores(users[userId], questions, auth.loggedInUser) 
    }) : null

    return{
        boardScores: boardScores.sort((a,b) => b.score - a.score)
    }
}

export default  connect(mapStateToProps)(LeaderBoard)