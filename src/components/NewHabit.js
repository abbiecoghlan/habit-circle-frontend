import React, { useEffect, useState, useContext } from 'react';
import { Button, Form, Segment, Grid, Header, Message } from 'semantic-ui-react'
import {Redirect, useHistory} from "react-router-dom"
import { UserContext } from '../context/user'
import { ProgressContext } from '../context/progress'
import { DateContext } from '../context/date'



const NewHabit = (props) => {

    const {user} = useContext(UserContext)
    const {createHabits, activeMonthHabits, addHabitToMonth} = useContext(ProgressContext)
    const { currentMonth, currentYear } = useContext(DateContext)
    const history = useHistory()


    const [form, setForm] = useState({
        habit1: "",
    })

    

    const handleChange = (e) => {
        console.log(form)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


 

    const handleSubmit = (e) => {
        e.preventDefault()

        const habit = [form.habit1]

        addHabitToMonth(habit, user.id, currentMonth)

        // {form.password_confirmation !== form.password_confirmation ? <p style={{ textAlign: "left" }} >Passwords do not match</p> : <p style={{ textAlign: "left" }} ></p>}
        // createHabits({username: form.username, name: form.name, password: form.password})
        setForm({
            habit1: "",
          })
          // history.push(`/tracker/${user.username}`)

        
    } 


   



    return ( 
        <>
        <Header as='h2'  style={{
            color:"#264653"
          }} textAlign='center'>
              Create new habits
           </Header>

         <Form style={{
          color: "#A8DADC", background: "#264653", width: '100%', textAlign: "center"
        }}  onSubmit={(e) => handleSubmit(e)} size='large'>
           <Segment inverted style={{
          color: "#A8DADC", background: "#264653", width: '100%', textAlign: "center"
        }}stacked>
                {activeMonthHabits.length <7 ?  
               <> <Form.Input fluid 
                icon='bullseye' 
                iconPosition='left' 
                placeholder='New habit'                 
                name="habit1"
                value={form.habit1}
                onChange={(e) => handleChange(e)}
                maxLength="13"
                />              <Button style={{ background: "#2a9d8f", color: "#FFFFFF", width: '50%', marginLeft: '25%', textAlign: "center" }}  fluid size='large'>
                Add Habit
              </Button></>: <h4>Maximum monthly habits reached! Delete a current habit if you'd like to create a new habit to track.</h4>}

                {/* {activeMonthHabits.length <6 ?  
                <Form.Input fluid 
                icon='bullseye' 
                iconPosition='left' 
                placeholder='New habit 2'                 
                name="habit2"
                value={form.habit1}
                onChange={(e) => handleChange(e)}
                maxLength="13"
                /> : null} */}






           </Segment>
         </Form>

      </>
    



    )

    
}



export default NewHabit