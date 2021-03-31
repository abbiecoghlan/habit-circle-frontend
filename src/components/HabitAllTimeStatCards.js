import React, { useEffect, useState, useContext } from 'react';
import { Button, Form, Segment, Grid, Header, Message } from 'semantic-ui-react'
import {Redirect, useHistory} from "react-router-dom"
import { UserContext } from '../context/user'
import { ProgressContext } from '../context/progress'
import { DateContext } from '../context/date'



const HabitAllTimeStatCards = (props) => {

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
              All Time Habit Completion Rates
           </Header>


           <Segment inverted style={{
          color: "#A8DADC", background: "#264653", width: '100%', textAlign: "center"
        }}stacked>
                       <> 

                       
                </>
            <h4>You've been tracking your habits since {new Date(currentYear, user.created - 3, 1).toLocaleString('default', { month: 'long' })}, 2021.</h4>

              
           </Segment>


      </>
    



    )

    
}



export default HabitAllTimeStatCards