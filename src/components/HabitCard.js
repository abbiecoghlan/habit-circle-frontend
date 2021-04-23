import React, { useEffect, useState } from 'react';
import Circle from './Circle';
import NavBar from './NavBar'
import { useContext } from 'react'
import { ProgressContext } from '../context/progress'
import { Segment, Dimmer, Loader, Button, Card, Item, Form, Input } from 'semantic-ui-react';
import LoadWheel from './LoadWheel';
import {Redirect, Link} from "react-router-dom"
import { UserContext } from '../context/user'
import { DateContext } from '../context/date'


const HabitCard = ({habit, cardColor}) => {


    const { user } = useContext(UserContext)
    const { editHabit, deleteHabit } = useContext(ProgressContext)
    const { currentMonth } = useContext(DateContext)


    const [editMode, setEditMode] = useState(false)
    const [form, setForm] = useState({name: habit.name})


    const handleEdit = (e) => {
        // console.log(habit.id)
        // console.log(habit.name)
        editHabit(habit.id, form.name, habit.name)
        setEditMode(false)
    }


    //ADD POP UP
    const handleDelete = (e) => {
        const confirm = window.confirm("Habits can only be deleted for the current month. Previous data for this habit will not be impacted. Are you sure you want to delete this habit?")
      if (confirm) {
        deleteHabit(habit.id, habit.name, user.id, currentMonth)
      }
    }

    const handleChange = (e) => {
        setForm({
            name: e.target.value
        })
        console.log(form)
    }






  return (
      <>
 

<Card inverted style={{ color: cardColor}}  >
           <Card.Content extra>
            <Card.Header  style={{textAlign: "center", verticalAlign: 'top' }}> 
            
            {editMode ? <Form onSubmit={(e) => handleEdit(e)}> <Form.Input fluid style={{ color: "#264653", textAlign: "center", verticalAlign: 'top', padding: '5px' }}
                action='Save'
                id='form-input-control-first-name'
                name={habit.name}
                placeholder={habit.name}
                value={form.name}
                onChange={(e) => handleChange(e)}
                maxLength="15"
                /></Form> : <h3 style={{color: cardColor}} >{habit.name.toUpperCase()}</h3>}
            {/* {editMode ? {`edit ${habit.name}`} : {`${habit.name.toUpperCase()}`} } */}

                              
        {/* <Card.Content style={{ color: "#264653", textAlign: "left", verticalAlign: 'top' }} >
            <Form.Input 

                id='form-input-control-first-name'
                name={habit.name}

                
                placeholder={habit.name}
                value={habit.name}
                onChange={(e) => handleChange(e)}
            />
        </Card.Content> */}
           
            <Button id={habit.id} name={habit.name}  onClick={()=>setEditMode(!editMode)} style={{ background: "#A8DADC", color: "#FFFFFF" }} stackable size='small'>
            {!editMode ? `Edit Habit Name` : `Cancel`}
            </Button>
            <Button  onClick={(e) => handleDelete(e)} style={{ background: "#264653", color: "#FFFFFF" }} stackable size='small'>
            Delete Habit 
            </Button>
            </Card.Header>


        </Card.Content>

        {/* <Card.Content extra>

        </Card.Content> */}
        </Card>


    </>
  );
}

export default HabitCard;