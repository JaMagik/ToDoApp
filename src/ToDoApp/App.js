import './App.css';
import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  counter = 3;
  state = {
    tasks : [
      {
        id:0,
        text: "Może mnie to ominie",
        date: "2022:10:01",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id:1,
        text: "Dużo tego było, ale nie pamiętam",
        date: "2022:10:02",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id:2,
        text: "Zrobię jutro",
        date: "2022:10:03",
        important: true,
        active: true,
        finishDate: null,
      },
      
    ]
  }
  deleteTask = (id) =>{
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
  }
  changeTaskStatus = (id) => {
    let tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if(task.id === id) {
        task.active = false;
        task.finishDate = new Date ().getTime()
      }
      this.setState({
        tasks
      })
    })
  }
  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null,
    }
    this.counter++
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true
  }
  render() {
  return (
    <div className="App">
      <h1>To Do App</h1>
      <AddTask add = {this.addTask}/>
      <TaskList tasks = {this.state.tasks} delete ={this.deleteTask} change={this.changeTaskStatus}/>
    </div>
  );
  }
}

export default App;
