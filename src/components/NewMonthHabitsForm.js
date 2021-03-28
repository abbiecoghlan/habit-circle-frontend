import React, { useEffect, useState, useContext } from 'react';
import {Redirect, useHistory } from "react-router-dom"
import { UserContext } from '../context/user'
import { ProgressContext } from '../context/progress'
import { DateContext } from '../context/date'
import { Button, Form, Segment, Grid, Header, Checkbox, Message, GridColumn } from 'semantic-ui-react'



const NewMonthHabitsForm = ({totalChecks, setTotalChecks, checks, setStepTwo, handleSubmit, setSelectedHabits}) => {



    const {user} = useContext(UserContext)


    const [form, setForm] = useState({
        newHabit1: "",
        newHabit2: "",
        newHabit3: "",
        newHabit4: "",
        newHabit5: "",
        newHabit6: "",
        newHabit7: ""
    })



    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    }

    const handleBack = (e) => {
        setForm({
            newHabit1: "",
            newHabit2: "",
            newHabit3: "",
            newHabit4: "",
            newHabit5: "",
            newHabit6: "",
            newHabit7: ""
        })
        setStepTwo(false)
        setTotalChecks({total: 0})
        setSelectedHabits([])

    }

    const handleCreateHabits = (e) => {
        e.preventDefault()
        const habits = [form.newHabit1, form.newHabit2, form.newHabit3, form.newHabit4, form.newHabit5, form.newHabit6, form.newHabit7].filter((habit) => !!habit)        
        handleSubmit(habits)

        }




    



    return (

        <> 
        <Grid  textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
         <Header as='h2'  style={{
          color:"#264653"
        }} textAlign='center'>
            Step Two: Create New Habits
         </Header>
         {/* <p style={{
          color:"#264653"
        }} >A place to say more</p> */}
         <Form onSubmit={(e) => handleCreateHabits(e)} size='large'>
           <Segment inverted style={{
          color: "#A8DADC", background: "#264653"
        }}stacked>
           {/* another place to say more */}
            <br></br>
        

          
        {totalChecks.total <= 6 ? 
                <Form.Input fluid 
                icon='bullseye' 
                iconPosition='left' 
                placeholder='Add a new habit'                 
                name="newHabit1"
                value={form.newHabit1}
                onChange={(e) => handleChange(e)}
                maxLength="12"
                /> : <p>Maximum monthly habits reached!</p>}

                
                {totalChecks.total <= 5 ? 
                <Form.Input fluid 
                icon='bullseye' 
                iconPosition='left' 
                placeholder='Add a new habit'                 
                name="newHabit2"
                value={form.newHabit2}
                onChange={(e) => handleChange(e)}
                maxLength="12"
                /> : null }

            {totalChecks.total <= 4 ? 
                <Form.Input fluid 
                icon='bullseye' 
                iconPosition='left' 
                placeholder='Add a new habit'                 
                name="newHabit3"
                value={form.newHabit3}
                onChange={(e) => handleChange(e)}
                maxLength="12"
                /> : null }
                
                {totalChecks.total <= 3 ? 
                <Form.Input fluid 
                icon='bullseye' 
                iconPosition='left' 
                placeholder='Add a new habit'                 
                name="newHabit4"
                value={form.newHabit4}
                onChange={(e) => handleChange(e)}
                maxLength="12"
                /> : null }
                
                {totalChecks.total <= 2 ? 
                <Form.Input fluid 
                icon='bullseye' 
                iconPosition='left' 
                placeholder='Add a new habit'                 
                name="newHabit5"
                value={form.newHabit5}
                onChange={(e) => handleChange(e)}
                maxLength="12"
                /> : null }

            {totalChecks.total <= 1 ? 
                <Form.Input fluid 
                icon='bullseye' 
                iconPosition='left' 
                placeholder='Add a new habit'                 
                name="newHabit6"
                value={form.newHabit6}
                onChange={(e) => handleChange(e)}
                maxLength="12"
                /> : null }

            {totalChecks.total <= 0 ? 
                <Form.Input fluid 
                icon='bullseye' 
                iconPosition='left' 
                placeholder='Add a new habit'                 
                name="newHabit7"
                value={form.newHabit7}
                onChange={(e) => handleChange(e)}
                maxLength="12"
                /> : null }
                
                           

             <Button style={{ background: "#2a9d8f", color: "#FFFFFF" }}  fluid size='large'>
               Submit
             </Button>
           </Segment>
         </Form>
       

             <Button onClick={(e) => handleBack(e)} style={{ color: "#2a9d8f" }}  fluid size='large'>
             Changed your mind? Go back to previous habits. 
             </Button>


       </Grid.Column>
     </Grid>

{/* 
     <Button onClick={(e) => handleCreateHabits(e)} style={{ background: "#2a9d8f", color: "#FFFFFF" }}  fluid size='large'>
         Create Habits
             </Button> */}








    
    </>


    )



}



export default NewMonthHabitsForm