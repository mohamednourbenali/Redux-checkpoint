import {ADDTASK,EDITTASK,DELETTASK,COMPLETETASK} from "../action/actionTypes"

const initialState ={
    tasks : [
        {
            id : 1,
            task : "Learn react redux",
            done : false
        },
        {
            id : 2,
            task : "Learn API",
            done : true
        }
    ]
}
const reducer =(state = initialState,action)=>{
    switch (action.type){
        case ADDTASK:
            return {
                tasks : [...state.tasks,action.payload]
            }
        case COMPLETETASK:
            return( {
                ...state,tasks : state.tasks.map(el=>(el.id === action.payload)?{...el, done : (el.done)?false:true}:el)
            })
        case DELETTASK:
            return({
                ...state,tasks : state.tasks.filter(el=>(el.id !== action.payload))
            })
        case EDITTASK :
            return ({
                ...state,tasks : state.tasks.map(el=>(el.id===action.payload.id)?action.payload:el)
            })
        default:
            return state
    }
}

export default reducer 