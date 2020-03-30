import React, { Fragment } from 'react'
import BoxHeader from './BoxHeader'

export default function ScoreBoard(props){
    const { avatarURL,
            name,
            answered,
            created,
            score } = props.board
    return(
        <Fragment>
            <div className="ui equal width center aligned padded grid">
                <BoxHeader name={name} avatarURL={avatarURL} timestamp={null} />
                <div className="three row question ">                       
                    <div className="ui divided two column grid ">
                        <div className="stretched row">
                            <div className="thirteen wide column">
                                <div className= "ui hidden divider"></div>
                                <div className="row">
                                    <span className="board-Q">Answered Questions: </span>
                                    <span className="board-QS">{answered}</span>
                                </div>
                                <div className= "ui hidden divider"></div>
                                <div className="row">
                                    <span className="board-Q">Created Questions: </span>
                                    <span className="board-QS">{created}</span>
                                </div>
                            
                            </div>
    
                            <div className="three wide column">
                            <div className="row">Score</div>
                            <div className="row">
                                <div className="ui green circular label">{score}</div>
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














