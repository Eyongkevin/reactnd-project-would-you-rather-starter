import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
    state={
        optionOneText: '',
        optionTwoText: '',
        returnToHome: false
    }
    handleOptionOneChange = (e) =>{
        const text = e.target.value
        this.setState(() =>({
            optionOneText: text
        }))
    }
    handleOptionTwoChange = (e) =>{
        const text = e.target.value
        this.setState(() =>({
            optionTwoText: text
        }))
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        const {optionOneText, optionTwoText } = this.state;
        const { dispatch } = this.props

        dispatch(handleAddQuestion(optionOneText, optionTwoText))

        this.setState(() =>({
            optionOneText: '',
            optionTwoText: '',
            returnToHome: true
        }))
    }
    render(){
        const {optionOneText, optionTwoText, returnToHome } = this.state

        if (returnToHome === true){
            return <Redirect to='/' />
        }
        return(
            <div className="ui equal width center aligned padded grid">
                <h3 className="ui center aligned header">Create New Question</h3>
                <div className="stretched  row">
                <div className="ten wide column">
                        <form className="ui form" onSubmit={this.handleSubmit}>
                                <div className="field">                         
                                    <input 
                                    placeholder="Enter Option One Text Here"
                                    value={optionOneText}
                                    onChange={this.handleOptionOneChange} />
                                </div>
                                    &nbsp;
                                    <div className="ui circular labels ">
                                        <i className="ui label">OR</i>
                                    </div> 
                                    &nbsp;
                                <div className="field">                          
                                    <input 
                                    placeholder="Enter Option Two Text Here"
                                    value={optionTwoText}
                                    onChange={this.handleOptionTwoChange} />
                                </div>
                                <button 
                                    type="submit"
                                    className="ui button newQSubmit"
                                    disabled={optionOneText ==='' || optionTwoText === ''}>
                                 Submit
                                 </button>
                        </form>
                </div>
                    
                </div>
                
            </div>
        )
    }
}
function mapStateToProps({ auth }) {
    return {
      auth
    }
  }
export default connect(mapStateToProps)(NewQuestion)