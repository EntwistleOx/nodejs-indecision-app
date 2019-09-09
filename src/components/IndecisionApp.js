import React from 'react'
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    
    handleClearsSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option) 
        }))
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option =  this.state.options[randomNum]
        this.setState(() => ({
            selectedOption: option
        }))
    }

    handleAddOption = (option) => {
        if(!option) {
            return 'Enter valid value to add'
        }else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exist'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
        // options: [...prevState.options, option] 
    }

    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem('options'))
            if(options) {
                this.setState(() => ({ options }))
            }
        } catch (error) {
            // Do nothing
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount: Fire just before component is removed')
    }
    
    render() {
        const subTitle = 'Put your life in the hands of a computer'
        return (
            <div>
                <Header subTitle={subTitle} />
                    <div className="container">
                        <Action 
                            hasOptions={this.state.options.length > 0}
                            handlePick={this.handlePick}
                        />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption} 
                        />
                    </div>
                    </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearsSelectedOption={this.handleClearsSelectedOption}
                /> 
            </div>
        )
    }
}

export default IndecisionApp