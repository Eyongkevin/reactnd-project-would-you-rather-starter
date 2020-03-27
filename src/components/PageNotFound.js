import React from 'react'
import error_404 from '../images/error_404.png'

export default function PageNotFound(){
    return(
        <div className="ui equal width center aligned padded grid">
            <div className="three row">
                <div className="column">
                    <img
                        alt="404 error"
                        src={error_404}                 
                    />
                    <div>
                        <p>The Page you are looking for doesn't exist or another error occured. </p>
                    </div>                    
                </div>
            </div>
        </div>
               
    )
}