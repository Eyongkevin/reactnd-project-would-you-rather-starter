import React, { Fragment } from 'react'


export default function ScoreBoard(props){
    const { board } = props
    return(
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
    )
}














