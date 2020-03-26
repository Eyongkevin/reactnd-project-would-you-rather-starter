import React, { Component } from 'react'
import { formatDate } from '../utils/helpers'
import { Form, Radio } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { handleSaveQuestionChosenAnswer } from '../actions/questions'


class QuestionChoose extends Component{
    state ={
        chosenOption: ''
    }
    handleOptionChange = (e, {value}) =>{
        this.setState({
            chosenOption : value
        });
    }
    submitChoice = (e) =>{
        e.preventDefault()
        const {dispatch, results } = this.props
        const { chosenOption } = this.state
        dispatch(handleSaveQuestionChosenAnswer(results.id, chosenOption))

    }
    render(){
        const {
            name,
            optionOneText,
            optionTwoText,
            timestamp,
            avatarURL
        } = this.props.results

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
                                <span className="ui header">Would you rather ..</span>
                                          
                                <div className="row ui center">
                                    <div className= "ui hidden divider"></div>
                                        <Form>
                                            <Form.Field>
                                            <Radio
                                                label={optionOneText}
                                                name='choose'
                                                value='optionOne'
                                                checked={this.state.chosenOption === 'optionOne'}
                                                onChange={this.handleOptionChange}
                                            />
                                            </Form.Field>
                                            <Form.Field>
                                            <Radio
                                                label={optionTwoText}
                                                name='choose'
                                                value='optionTwo'
                                                checked={this.state.chosenOption === 'optionTwo'}
                                                onChange={this.handleOptionChange}
                                            />
                                            </Form.Field>
                                        </Form>
           
                                    </div>

                                <div className="row ui center">
                                    <div className= "ui hidden divider"></div>
                                    <button 
                                        className="ui orange basic button"
                                        disabled = {this.state.chosenOption === ''}
                                        onClick = {this.submitChoice}>
                                                Submit
                                    </button>
           
                                </div>
                                
                            </div>
                        </div>

                </div>
    
            </div>
        )

    }
    
    
    
}

export default connect()(QuestionChoose)