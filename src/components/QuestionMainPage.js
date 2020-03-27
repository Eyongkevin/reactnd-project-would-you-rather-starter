import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestionResults } from '../utils/helpers'
import QuesionResult from './QuestionResult'
import QuestionChoose from './QuestionChoose'
import PageNotFound from './PageNotFound'
import PropTypes from 'prop-types'

class QuestionMainPage extends Component{
    render(){
        const { results } = this.props
        if(results === null){
            // Redirect to a 404 error page
            return <PageNotFound />
        }
        return(
            <div>
                {results.chosedQuestion
                ? <QuesionResult results={results} />
                : <QuestionChoose results ={results} />
                }
            </div>
        )
    }
    
}

function mapStateToProps ({users, auth, questions}, { match }){
    const { id } = match.params
    const question = questions[id]

    return{
        results: question ? formatQuestionResults(question, users[question.author], auth.loggedInUser ) : null
    }
}

// Run typechecking on the props
QuestionMainPage.propTypes = {
    results: PropTypes.object
    }
      
export default connect(mapStateToProps)(QuestionMainPage)

