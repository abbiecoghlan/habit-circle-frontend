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
    const [stepThree, setStepThree] = useState(false)


    const {user} = useContext(UserContext)
    const { submitted, createHabits, loaded, activeMonthHabits, activeMonthProgress, allProgress } = useContext(ProgressContext)
    const { currentMonth, currentYear } = useContext(DateContext)
    const history = useHistory()

 
    const [selectedHabits, setSelectedHabits] = useState([])
    const [checks, setChecks] = useState({})
    const [totalChecks, setTotalChecks] = useState({total: 0})

    useEffect(() => {       
        if (loaded && activeMonthProgress.length > 0){
            history.push(`/tracker/${user.username}/month`)
        }    
    
    }, [loaded, activeMonthProgress, submitted])



    const handleSubmit = (array = []) => {
        
        setStepThree(true)
        const habits = [...array, ...selectedHabits]
        const sortedHabits = habits.sort(function(a,b ){
            return a.length - b.length
        })

        createHabits(sortedHabits, user.id, currentMonth)

    }




return (
    <> 
        {stepThree ? <Logo></Logo> : stepTwo ? <NewMonthHabitsForm handleSubmit={handleSubmit} setStepThree={setStepThree} setSelectedHabits={setSelectedHabits} totalChecks={totalChecks} setTotalChecks={setTotalChecks} setStepTwo={setStepTwo} ></NewMonthHabitsForm> : <PreviousHabitSelector  setSelectedHabits={setSelectedHabits} handleSubmit={handleSubmit} setStepTwo={setStepTwo} setStepThree={setStepThree} checks={checks} setChecks={setChecks} totalChecks={totalChecks} setTotalChecks={setTotalChecks} ></PreviousHabitSelector>}
    </>
    )


}



export default NewMonthContainer