import React from 'react'


const Task = (props) => {
    
    const styleBefore = {
        color: "red"
    }
    const styleAfter = {
        color:"green"
    }
    const BetterLook = {
        color:"black"
    }

    const {text, date, important, id, finishDate, active} = props.task;
    if(active) {
    return ( 
        <div>
            <p>
                <strong style ={important? styleBefore: null}>{text} - do <span> {date} </span></strong>
                <button onClick={() =>props.change(id)}>Zostało zrobione</button>
                <button onClick={() => props.delete(id)}>X</button>
            </p>
        </div>
     );
} else {
    const finish = new Date(finishDate).toLocaleString()
    return (
        <div>
        <p>
            <strong style={styleAfter}>{text} <span style={BetterLook}> Wykonano {finish} </span>BRAWO TY!</strong>
            <button onClick={() => props.delete(id)}>X</button>
        </p>
    </div>

    )
}
} 
 
export default Task;