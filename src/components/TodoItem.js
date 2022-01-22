import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState} from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
/*
export const TodoItem=(props)=>{
    console.log(props)
    return(
        <ListGroup.Item id={props.todoItem.id} >{props.todoItem.item}</ListGroup.Item>
    )
}*/
export const TodoItem=({id,item,delItem})=>{
    console.log(id,item)
    const [done,setDone]=useState(false)

    return(
        <ListGroup.Item id={id} className="d-flex justify-content-between" >
            <FontAwesomeIcon className={done? "text-success":"text-secondary"} icon="check-square" size="2x" onClick={()=>setDone(!done)} />
            <span className={done? "text-decoration-line-through":""}>{item}</span>
            <FontAwesomeIcon className="text-danger" icon="trash" size="2x" onClick={()=>delItem(id)}/>
        </ListGroup.Item>
    )
}