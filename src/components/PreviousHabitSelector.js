import React, { useEffect, useState, useContext } from 'react';
import { Button, Form, Segment, Grid, Header, Checkbox, Message, GridColumn } from 'semantic-ui-react'
import {Redirect, useHistory } from "react-router-dom"
import { ProgressContext } from '../context/progress'
import { DateContext } from '../context/date'
import { format } from 'd3';


const PreviousHabitSelector = ({totalChecks, setTotalChecks, checks, setChecks, setStepTwo, handleSubmit, setSelectedHabits}) => {


    const { createHabits, loaded, activeMonthHabits, allHabits, allProgress } = useContext(ProgressContext)
    const { currentMonth, currentYear } = useContext(DateContext)
    const history = useHistory()

    const [recentHabits, setRecentHabits] = useState([])


    const [checkForm, setCheckForm] = useState({
        habit1: "",
        habit2: "",
        habit3: "",
        habit4: "",
        habit5: "",
        habit6: "",
        habit7: ""
    })


    useEffect(() => {
        if (loaded) {

        const removeDuplicates = (array) => {
            const flag = {}
            const uniqueHabits = []
            array.forEach(habit => {
                if (!flag[habit.name]){
                    flag[habit.name] = true
                    uniqueHabits.push(habit)
                }
            })
            return uniqueHabits
        }

        const previousMonthHabits = allProgress.filter(progress => {        
            return   (progress.day.month == currentMonth - 1)
           }).map(progress => {
               return progress.habit
           })
    
        const habitsUnique = removeDuplicates(previousMonthHabits)
       
        setRecentHabits(habitsUnique)
        
        let checkArray = habitsUnique.map((habit) => {
            let name = habit.name
            return  { [name]: false }          
                })                
        setChecks(...checkArray)
            }                    
        }, [loaded])



    useEffect(() => {
        console.log(totalChecks)

                    
        }, [totalChecks])








      

    // const monthName = new Date(currentYear, currentMonth - 1, 1).toLocaleString('default', { month: 'long' })


    
     
    const handleChecked = (e, { ["data-tag"] : tag, checked, name, value }) => {
     if (checked){
     setCheckForm({
         ...checkForm,
         [tag]: name
     })
    } else {
        setCheckForm({
        ...checkForm,
        [tag]: ""
    }) 
    }
      setChecks({...checks, [value]: !checks[value] })
        if (!checks[value]){
            setTotalChecks({total: totalChecks.total + 1})
            } else {
            setTotalChecks({total: totalChecks.total - 1})
            }
        
    }
     
 


    const checkBoxes = recentHabits.map((habit, index) => {

        const name = habit.name 
        return <> 
        <Form.Field >             
                <Checkbox onChange={handleChecked} label={habit.name.toUpperCase()} data-tag={`habit${index + 1}`} name={habit.name} value={habit.name} checked={checks[habit.name]} > </Checkbox>
        </Form.Field>

        </>

    })


    const handleStepTwo = (e) => {
        const selected = [checkForm.habit1, checkForm.habit2, checkForm.habit3, checkForm.habit4, checkForm.habit5, checkForm.habit6, checkForm.habit7].filter((habit) => !!habit)
        setSelectedHabits(selected)
        setStepTwo(true)

    }

    const handleSkipStepTwo = (e) => {
        const selected = [checkForm.habit1, checkForm.habit2, checkForm.habit3, checkForm.habit4, checkForm.habit5, checkForm.habit6, checkForm.habit7].filter((habit) => !!habit)
        setSelectedHabits(selected)
        handleSubmit()
    } 


    
      
    
    



    return (
        <> 

        <Grid  textAlign='center' style={{ height: '100vh', padding: '10px' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
         <Header as='h2'  style={{
          color:"#264653"
        }} textAlign='center'>
            Step One: Select Habits
         </Header>
         <p style={{
          color:"#264653"
        }} >Last month, you tracked the following habits. Select any habits you'd like to continue tracking. Press continue below to create new habits. </p>
         <Form size='large'>
           <Segment inverted style={{
          color: "#A8DADC", background: "#264653"
        }}stacked>
            <br></br>        
            {checkBoxes}          
          

             {totalChecks.total < 7 ? false : <Message> Maximum habits selected. Select fewer habits if you'd like to create additional habits, or press submit if you'd like to continue without creating new habits. </Message>}  
             {totalChecks.total < 7 ?
             <Button onClick={(e) => handleStepTwo(e)} style={{ background: "#2a9d8f", color: "#FFFFFF" }} id={"continue"}  fluid size='large'>
               Continue
             </Button> : <Button onClick={(e) => handleSkipStepTwo(e)}  id={"submit"} style={{ background: "#2a9d8f", color: "#FFFFFF" }}  fluid size='large'>
               Submit
             </Button> }
           </Segment>
          
          
         </Form>
         {/* <Button onClick={handleSubmit} style={{ color: "#2a9d8f" }}  fluid size='large'>
               Submit
             </Button> */}


       </Grid.Column>
     </Grid>


    
    </>


    )

    
}



export default PreviousHabitSelector