import React from 'react'
import { formatDate } from '../utils/helpers'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function QuestionResult(props){
    const {
        name,
        optionOneText,
        optionTwoText ,
        timestamp,
        votedOptionOne,
        votedOptionTwo,
        optionOneVoteCnt,
        optionTwoVoteCnt,
        totalVotes,
        optionOnePercentage,
        optionTwoPercentage,
        avatarURL
    } = props.results
    const optionOneChosenStyle = votedOptionOne ? 'row chosenQuestionColor': 'row'
    const optionTwoChosenStyle = votedOptionTwo ? 'row chosenQuestionColor': 'row'

    return(
        <div>
                <div className="ui equal width center aligned padded grid">
                        <div className="three row">
                            <div className="orange column ui left aligned questionColumn">
                                <img
                                    alt="User face"
                                    src={avatarURL}
                                    className="ui avatar image mini "
                                />
                                <span className="question-title">
                                    <span>{name} </span>

                                    <span className = 'date-display'>
                                        <i aria-hidden="true" className="time icon"></i>
                                            {formatDate(timestamp)}
                                    </span>

                                </span>
                                
                                
                            </div>
                        </div>
                        
                        <div className="three row question ">
                            <div className="column ui center">
                                <span className="ui header">Result</span>
          
                                <div className="ui  grid">
                                    <div className="row">
                                            <div className="thirteen wide column">
                                                
                                            </div>
                                            <div className="three  wide column">
                                                Total Vote &nbsp;
                                                <div className="ui orange circular label">{totalVotes}</div>
                                            </div>
                                    </div>
                                    <div className={optionOneChosenStyle}>
                                        <div className="twelve wide column ">
                                            <strong>Would You Rather</strong>
                                            <span className="questionResult-wyr"> 
                                                    {` ${optionOneText} `}
                                            </span>
                                                ?
                                            <div className="ui orange tiny compact segment votes">
                                                {`${optionOneVoteCnt} vote(s)`}
                                            </div>
                                            {votedOptionOne
                                                ?
                                                <div>
                                                    <i aria-hidden="true" className="green checkmark large icon"></i>
                                                </div>
                                                : null}
                                        </div>
                                        <div className="three wide column">
                                            <CircularProgressbar 
                                                value={optionOnePercentage} 
                                                text={`${optionOnePercentage}%`} />                                      
                                        </div>
                                    </div>
                                    <div className={optionTwoChosenStyle}>
                                        <div className="twelve wide column">
                                            <strong>Would You Rather</strong>
                                            <span className="questionResult-wyr"> 
                                                    {` ${optionTwoText} `} 
                                            </span>
                                                ?
                                            <div className="ui orange tiny compact segment votes">
                                                {`${optionTwoVoteCnt} vote(s)`}
                                            </div>
                                            {votedOptionTwo
                                            ?
                                            <div>
                                                <i aria-hidden="true" className="green checkmark large icon"></i>
                                            </div>
                                            : null}
                                            
                                            

                                        </div>
                                        <div className="three wide column">
                                        <CircularProgressbar 
                                                value={optionTwoPercentage} 
                                                text={`${optionTwoPercentage}%`}                                                                
                                        />                                           
                                        </div>
                                    </div>

                                </div>
                            </div>
   
                        </div>
                    </div>
                    
                
        </div>
    )
    
    
}
