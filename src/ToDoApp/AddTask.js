import React, { Component } from 'react';
import "./AddTask.css";

class AddTask extends Component {
    minDate = new Date().toISOString().slice(0,10)
    state = {
        text: '',
        checked: true,
        date: this.minDate
    }
    handleText = e => {
        this.setState ({
            text:e.target.value
        })
    }
    handleChange = e => {
        this.setState ({
            checked: e.target.checked
        })
    }
    handleDate = e => {
        this.setState ({
            date: e.target.value
        })
    }
    handleClick = e => {
        const {text, checked, date} = this.state
        if(text.length > 2) {
            const add = this.props.add(text,date,checked)
        if(add) {
            this.setState({
                text: '',
                checked: false,
                date: this.minDate
            })
        }
    } else {
        alert("Za krótka nazwa")
    }

    }
    render() {
        let maxDate = this.minDate.slice(0,4)*1+1;
        maxDate = maxDate + "-12-31"
        return (
            <div className='form'>
            <input type='text' placeholder='Dodaj zadanie' value ={this.state.text} onChange={this.handleText}></input>
            <input type='checkbox' checked={this.state.checked} onChange = {this.handleChange} id="important"></input>
            <label htmlFor='important'>Priorytet</label>
            <br/>
            <label htmlFor='date'>Do kiedy zrobić</label>
            <br />
            <input type='date' value={this.state.date} min = {this.minDate} max = {maxDate} onChange={this.handleDate}/>
            <button onClick={this.handleClick}>dodaj</button>
            </div>
        )
    }
}
export default AddTask