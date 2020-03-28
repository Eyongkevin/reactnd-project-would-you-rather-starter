import React from 'react'
import { formatDate } from '../utils/helpers'

export default function BoxHeader(props){
    const { avatarURL, name, timestamp, wyr } = props 
    return(
        <div className="three row">
            <div className="orange column ui left aligned questionColumn">
                <img
                    alt="User face"
                    src={avatarURL}
                    className="ui avatar image mini "
                />
                <span className="question-title">
                    <span>{name} </span>{wyr? <span className="wyr">Would You Rather?</span>: null}

                    {timestamp 
                    ?
                    <span className = 'date-display'>
                        <i aria-hidden="true" className="time icon"></i>
                            {formatDate(timestamp)}
                    </span>
                    : null}

                </span>
                
                
            </div>
        </div>
    )
}