import React, { useEffect, useState, useContext } from 'react';
import { Button, Form, Segment, Grid, Header, Checkbox, Message, GridColumn } from 'semantic-ui-react'
import {Redirect, useHistory } from "react-router-dom"
import { UserContext } from '../context/user'
import { ProgressContext } from '../context/progress'
import { DateContext } from '../context/date'
import NewMonthHabitsForm from './NewMonthHabitsForm.js'
import PreviousHabitSelector from './PreviousHabitSelector'
import LoadWheel from './LoadWheel';
import Logo from './Logo'



const NewMonthContainer = (props) => {

    const [stepTwo, setStepTwo] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const {user} = useContext(UserContext)
    const { createHabits, loaded, activeMonthHabits, activeMonthProgress, allProgress } = useContext(ProgressContext)
    const { currentMonth, currentYear } = useContext(DateContext)
    const history = useHistory()

 
    const [selectedHabits, setSelectedHabits] = useState([])
    const [checks, setChecks] = useState({})
    const [totalChecks, setTotalChecks] = useState({total: 0})

        useEffect(() => {
           
        if (loaded && activeMonthProgress.length > 0){
            history.push(`/tracker/${user.username}/month`)
        }
    
    }, [loaded, activeMonthProgress])



    const handleSubmit = (array = []) => {
        console.log("you want to submit")
        console.log(selectedHabits)

        console.log(array)
        const habits = [...array, ...selectedHabits]
        console.log("all the habits are: ", habits)
        const sortedHabits = habits.sort(function(a,b ){
            return a.length - b.length
        })
        console.log("sorted habits are", sortedHabits)
        createHabits(sortedHabits, user.id, currentMonth)
        // setSubmitted(true)
        history.push(`/tracker/${user.username}/month`)

    }




return (
    <> 
    {/* {allProgress.length === 0 ? <h1 style={{textAlign: "center"}}>hi</h1> : <h2 style={{textAlign: "center"}} >bye</h2>} */}
    {submitted ? <Logo></Logo> : stepTwo ? <NewMonthHabitsForm handleSubmit={handleSubmit} setSubmitted={setSubmitted} setSelectedHabits={setSelectedHabits} totalChecks={totalChecks} setTotalChecks={setTotalChecks} setStepTwo={setStepTwo} ></NewMonthHabitsForm> : <PreviousHabitSelector  setSelectedHabits={setSelectedHabits} handleSubmit={handleSubmit} setStepTwo={setStepTwo} checks={checks} setChecks={setChecks} totalChecks={totalChecks} setTotalChecks={setTotalChecks} ></PreviousHabitSelector>}

    </>
    )



}



export default NewMonthContainer