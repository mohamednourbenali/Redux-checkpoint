import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from 'react-redux';
import { editTask } from '../redux/action/action';

const Edit = ({editTask,tasks}) => {

    const [text,setText] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const HandleSubmite =(e)=>{
        e.preventDefault()
        const newTask = {...tasks , text}
        editTask(newTask)
        setText("")
        handleClose()
      }


    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Edit Task
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task</Modal.Title>    
                </Modal.Header>

                <Modal.Body>
                    <input type="text" placeholder="Edit task..." value={text} onChange={(e)=>setText(e.target.value)}/>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={HandleSubmite}>Save changes</Button>
                </Modal.Footer> 
            </Modal>   
        </div>
    )
}

export default connect(null,{editTask})(Edit)

