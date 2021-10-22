import React from 'react'
import {connect} from 'react-redux';
import { addTask } from '../redux/action/action';
import {useState} from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';


const mapDispatchToProps = dispatch =>{
    return {addTask : task => dispatch(addTask(task))}
}
const AddTask = (props) => {
    const [newTask,setNewTask] = useState("");
    const [newId,setNewId] = useState(Math.random());
    const handleAdd=(e)=>{
       props.addTask({
           id : newId,
           task : newTask,
           done : false
       })
       setNewTask("");
       setNewId(Math.random()) 
    }
    return (
        <div style={{justifyContent:"center"}}>
            <Form.Control size="lg" type="text" placeholder="new Task..." value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
            <Button onClick={handleAdd}>Add</Button>
        </div>
    )
}

export default connect(null,mapDispatchToProps) (AddTask)
