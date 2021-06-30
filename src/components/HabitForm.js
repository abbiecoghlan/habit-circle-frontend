import React, { useEffect, useState, useContext } from 'react';
import { Button, Form, Segment, Grid, Header, Message } from 'semantic-ui-react'
import {Redirect, useHistory} from "react-router-dom"
import { UserContext } from '../context/user'
import { ProgressContext } from '../context/progress'
import { DateContext } from '../context/date'
import LoadWheel from './LoadWheel';


const HabitForm = (props) => {

    const {user, loaded} = useContext(UserContext)
    const {createHabits} = useContext(ProgressContext)
    const { currentMonth, currentYear } = useContext(DateContext)
    const history = useHistory()

    // const [submitted, setSubmitted] = useState(false)

    // useEffect(() => {
    //     if (loaded){
    //         history.push(`/tracker/${user.username}`)
    //     }
    
    // }, [loaded])


    const [progressiveDisplay, setprogressiveDisplay] = useState({
        habit1: false,
        habit2: false,
        habit3: false,
        habit4: false,
        habit5: false,
        habit6: false,
        habit7: false,
        habit8: false
    })
    const [form, setForm] = useState({
        habit1: "",
        habit2: "",
        habit3: "",
        habit4: "",
        habit5: "",
        habit6: "",
        habit7: "",
        habit8: ""
    })

    

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleFocus = (e) => {
        if (progressiveDisplay[e.target.name] === false){
            setprogressiveDisplay({
                ...progressiveDisplay,
                [e.target.name] : true
            })
        }
    }
  

    const handleSubmit = (e) => {
        e.preventDefault()

        const habits = [form.habit1, form.habit2, form.habit3, form.habit4, form.habit5, form.habit6, form.habit7, form.habit8].filter((habit) => !!habit)
        const sortedHabits = habits.sort(function(a,b ){
            return a.length - b.length
        })

        createHabits(sortedHabits, user.id, currentMonth)

        // {form.password_confirmation !== form.password_confirmation ? <p style={{ textAlign: "left" }} >Passwords do not match</p> : <p style={{ textAlign: "left" }} ></p>}
        // createHabits({username: form.username, name: form.name, password: form.password})
        setForm({
            habit1: "",
            habit2: "",
            habit3: "",
            habit4: "",
            habit5: "",
            habit6: "",
            habit7: "",
            habit8: ""
        })
        history.push(`/tracker/${user.username}/home`)
        
    } 
    const monthName = new Date(currentYear, currentMonth - 1, 1).toLocaleString('default', { month: 'long' })

    return ( 
        // submitted ? <LoadWheel></LoadWheel> :

        <Grid  textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
         <Header as='h2'  style={{
          color:"#264653"
        }} textAlign='center'>
            Create habits
         </Header>
         <p style={{
          color:"#264653"
        }}  >Create up 8 habits to track this {monthName}.</p>
         <Form onSubmit={(e) => handleSubmit(e)} size='large'>
           <Segment inverted style={{
          color: "#A8DADC", background: "#264653"
        }}stacked>
                
                <Form.Input fluid 
                icon='bullseye' 
                iconPosition='left' 
                placeholder='Habit 1'                 
                name="habit1"
                value={form.habit1}
                onChange={(e) => handleChange(e)}
                onFocus={(e) => handleFocus(e)}
                maxLength="12"
                />

            {progressiveDisplay.habit1 === false ? null : <Form.Input fluid 
               icon='bullseye' 
               iconPosition='left' 
               placeholder='Habit 2'                 
               name="habit2"
               value={form.habit2}
               onChange={(e) => handleChange(e)}
               onFocus={(e) => handleFocus(e)}
               maxLength="12"/>}

            {progressiveDisplay.habit2 === false ? null : <Form.Input fluid 
                icon='bullseye' 
                iconPosition='left' 
                placeholder='Habit 3'                 
                name="habit3"
                value={form.habit3}
                onChange={(e) => handleChange(e)}
                onFocus={(e) => handleFocus(e)}
                maxLength="12"/>}
           
           {progressiveDisplay.habit3 === false ? null : <Form.Input fluid 
                icon='bullseye' 
                iconPosition='left' 
                placeholder='Habit 4'                 
                name="habit4"
                value={form.habit4}
                onChange={(e) => handleChange(e)}
                onFocus={(e) => handleFocus(e)}
                maxLength="12"/>}

            {progressiveDisplay.habit4 === false ? null : <Form.Input fluid 
                icon='bullseye' 
                iconPosition='left' 
                placeholder='Habit 5'                 
                name="habit5"
                value={form.habit5}
                onChange={(e) => handleChange(e)}
                onFocus={(e) => handleFocus(e)}/>}
                
                {progressiveDisplay.habit5 === false ? null :  <Form.Input fluid 
                icon='bullseye' 
                iconPosition='left' 
                placeholder='Habit 6'                 
                name="habit6"
                value={form.habit6}
                onChange={(e) => handleChange(e)}
                onFocus={(e) => handleFocus(e)}            
                maxLength="13"/>}

            {progressiveDisplay.habit6 === false ? null : <Form.Input fluid 
                icon='bullseye' 
                iconPosition='left' 
                placeholder='Habit 7'                 
                name="habit7"
                value={form.habit7}
                onChange={(e) => handleChange(e)}
                maxLength="13"
                />}

            {progressiveDisplay.habit7 === false ? null : <Form.Input fluid 
                icon='bullseye' 
                iconPosition='left' 
                placeholder='Habit 8'                 
                name="habit8"
                value={form.habit8}
                onChange={(e) => handleChange(e)}
                maxLength="13"
                />}

             <Button style={{ background: "#2a9d8f", color: "#FFFFFF" }}  fluid size='large'>
               Create Habits
             </Button>
           </Segment>
         </Form>

       </Grid.Column>
     </Grid>
    



    )

    
}



export default HabitForm