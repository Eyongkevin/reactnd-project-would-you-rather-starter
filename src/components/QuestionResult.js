import React from 'react'
import BoxHeader from './BoxHeader'
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
                        <BoxHeader name={name} avatarURL={avatarURL} timestamp={timestamp} />   
                        
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
