import React, { Component } from 'react'
import { Form, Radio } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { handleSaveQuestionChosenAnswer } from '../actions/questions'
import BoxHeader from './BoxHeader'


class QuestionChoose extends Component{
    state ={
        chosenOption: ''
    }
    /**
     * @description set state with the chosen option
     * @param {array} e - event
     * @param {string} value - the option chosen
     */
    handleOptionChange = (e, {value}) =>{
        this.setState({
            chosenOption : value
        });
    }

    /**
     * @description dispatch an action to save the option chosen for a question
     */
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
                        
                    <BoxHeader name={name} avatarURL={avatarURL} timestamp={timestamp} wyr={false} />

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