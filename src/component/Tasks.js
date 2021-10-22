import React from 'react'
import Edit from './Edit'
import {connect} from "react-redux"
import { completetask,deleteTask } from '../redux/action/action'
import Button from 'react-bootstrap/Button';

const mapStateToProps=state=>{
    return {tasks : state.tasks}
}


const Tasks = ({tasks,completetask,deleteTask}) => {
    return (
        <div>
            {tasks.map((el)=>
            <div style={{display:"flex"}}>
                <h1 style={(el.done===true)?{textDecoration:"line-through"}:{textDecoration:"none"}}>{el.task}</h1>
                <Edit tasks={tasks}/>
                <Button onClick={()=>deleteTask(el.id)}>DELETE</Button>
                <Button onClick={()=>completetask(el.id)}>COMPLETE</Button>
            </div>)}
        </div>
    )
}

export default connect(mapStateToProps,{deleteTask,completetask})(Tasks)
