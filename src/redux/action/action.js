import {ADDTASK,EDITTASK,DELETTASK,COMPLETETASK} from './actionTypes';

export const addTask =( newTask) =>{
    return {
        type : ADDTASK,
        payload : newTask
    }
}

export const editTask = (newTask)=>{
    return {
        type : EDITTASK,
        payload : newTask
    }
}

export const deleteTask = (id) =>{
    return {
        type : DELETTASK,
        payload : id
    }
}

export const completetask = (id) =>{
    return {
        type : COMPLETETASK,
        payload : id
    }
}