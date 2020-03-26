import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { formatBoardScores } from '../utils/helpers'

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
                {boardScores.map((board) =>(

                <Fragment>
                    <div className="ui equal width center aligned padded grid">
                            <div className="three row">
                                <div className="orange column ui left aligned questionColumn">
                                    <img
                                        alt="user face"
                                        src={board.avatarURL}
                                        className="ui avatar image mini"
                                    />
                                    <span className="question-title">
                                        <span>{board.name} </span>

                                    </span>
                                    
                                    
                                </div>
                            </div>
                            <div className="three row question ">                       
                            <div className="ui divided two column grid ">
                                <div className="stretched row">
                                    <div className="thirteen wide column">
                                        <div className= "ui hidden divider"></div>
                                        <div className="row">
                                            <span className="board-Q">Answered Questions: </span>
                                            <span className="board-QS">{board.answered}</span>
                                        </div>
                                        <div className= "ui hidden divider"></div>
                                        <div className="row">
                                            <span className="board-Q">Created Questions: </span>
                                            <span className="board-QS">{board.created}</span>
                                        </div>
                                    
                                    </div>
            
                                    <div className="three wide column">
                                    <div className="row">Score</div>
                                    <div className="row">
                                        <div className="ui green circular label">{board.score}</div>
                                    </div>
                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className= "ui hidden divider"></div>
                </Fragment>
                ))}
                
            </div>
            
        )
    }
}

function mapStateToProps({users, questions, auth }){
    const boardScores = users ? Object.keys(users).map(userId =>{
        return formatBoardScores(users[userId], questions, auth.loggedInUser) 
    }) : null

    return{
        boardScores
    }
}

export default  connect(mapStateToProps)(LeaderBoard)