import React from 'react'
import emptyQuestion from '../emptyQuestion.jpg'

export default function PageNotFound(){

    return(
        <div className="ui equal width center aligned padded grid">
            <div className="three row">
                <div className="column">
                    <img
                        src={emptyQuestion}                 
                    />
                    <div>
                        <p>Sorry there is nothing at the moment.</p>
                    </div>                    
                </div>
            </div>
        </div>
               
    )
}