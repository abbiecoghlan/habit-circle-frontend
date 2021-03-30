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


const HabitMonthStatCard = ({habit}) => {

    const { user } = useContext(UserContext)
    const { activeMonthProgress } = useContext(ProgressContext)
    const { currentMonth } = useContext(DateContext)




  return (
      <>
 

    <Card >

           <Card.Content extra>
            <Card.Header style={{ color: "#264653", textAlign: "center", verticalAlign: 'top' }}> 
            
            {editMode ? <Form onSubmit={(e) => handleEdit(e)}> <Form.Input fluid style={{ color: "#264653", textAlign: "center", verticalAlign: 'top', padding: '5px' }}
                action='Save'
                id='form-input-control-first-name'
                name={habit.name}
                placeholder={habit.name}
                value={form.name}
                onChange={(e) => handleChange(e)}
                maxLength="15"
                /></Form> : <h3>{habit.name.toUpperCase()}</h3>}
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

export default HabitMonthStatCard;