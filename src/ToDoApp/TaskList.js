import React from 'react';
import Task from './Task';



const TaskList = (props) => {

    const active = props.tasks.filter(task =>task.active)
    const done = props.tasks.filter(task => !task.active)
   
        active.sort((a,b) => {
            a = a.text.toLowerCase();
            b = b.text.toLowerCase();
            if (a < b) return -1
            if (a > b) return 1
            return 0
        })


   
        done.sort((a,b) => {
            if(a.finishDate < b.finishDate) {
                return 1
            }
            if (a.finishDate > b.finishDate) {
                return -1
            }
            return 0
        })
    
    
    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)

    return ( 
        <>
            <div className='active'>
                <h1>Zadania do zrobienia <em>({active.length})</em></h1>
                {activeTasks}  
            </div>
            <div className='done'>
                <h1>Zadania zrobione <em>({done.length})</em></h1>
                {doneTasks}
            </div>
              </>
    );
}
 
export default TaskList;