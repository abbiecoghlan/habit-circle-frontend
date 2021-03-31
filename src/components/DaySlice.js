import * as React from 'react';
import * as d3 from "d3";
import { useEffect, useState, useRef, useContext } from 'react'
import { ProgressContext } from '../context/progress'
import TextPaths from './TextPaths'
import { UserContext } from '../context/user'
import { DateContext } from '../context/date'
import '../App.css';
import { useHistory } from "react-router-dom";



const DaySlice = ({ pie }) => {
   
    const { user } = useContext(UserContext)
    const { updateProgress, loaded, activeMonthHabits, activeMonthProgress } = useContext(ProgressContext)
    const { currentMonth } = useContext(DateContext)
    const history = useHistory()

    // redirect to login if no user 
    useEffect(() => {
       if (!user) {
            history.push("/login")
            }
    
        }, [user])
    
    useEffect(() => {
        if (!user) {
            history.push("/login")
            }
    
        }, [user, activeMonthProgress])
    
    

    


     
    const radiusStart = 50

    const ringDistance = 242/activeMonthHabits.length
   

    // create a for loop that iterates how every many times i need to 
    // create the arc and shovel it into the array 
    // then grab it by index or destructure it 

    const secretArc = d3
    .arc()
    .innerRadius(50)
    .outerRadius(50)

    const arc = d3
    .arc()
    .innerRadius(50)
    .outerRadius(radiusStart + ringDistance)
    
    const arc2 = d3
    .arc()
    .innerRadius(radiusStart + (ringDistance))
    .outerRadius(radiusStart + (ringDistance * 2))
    .padAngle(0)
    .cornerRadius(0);


    const arc3 = d3
    .arc()
    .innerRadius(radiusStart + (ringDistance * 2))
    .outerRadius(radiusStart + (ringDistance * 3))
    .padAngle(0)
    .cornerRadius(0);

    const arc4 = d3
    .arc()
    .innerRadius(radiusStart + (ringDistance * 3))
    .outerRadius(radiusStart + (ringDistance * 4))
    .padAngle(0)
    .cornerRadius(0);

    const arc5 = d3
    .arc()
    .innerRadius(radiusStart + (ringDistance * 4))
    .outerRadius(radiusStart + (ringDistance * 5))
    .padAngle(0)
    .cornerRadius(0);

    const arc6 = d3
    .arc()
    .innerRadius(radiusStart + (ringDistance * 5))
    .outerRadius(radiusStart + (ringDistance * 6))
    .padAngle(0)
    .cornerRadius(0);

    const arc7 =  d3
    .arc()
    .innerRadius(radiusStart + (ringDistance * 6))
    .outerRadius(radiusStart + (ringDistance * 7))
    .padAngle(0)
    .cornerRadius(0); 

    const arc8 =  d3
    .arc()
    .innerRadius(radiusStart + (ringDistance * activeMonthHabits.length))
    .outerRadius(radiusStart + (ringDistance * activeMonthHabits.length))
    .padAngle(0)
    .cornerRadius(0); 

    
    //add code to deal with diff number of habits 
   
    const habitNames = !loaded ? null : activeMonthHabits.map(habitName => {
        return habitName.toUpperCase()
    })


    const habitRingClick = (e) => {
        if (e.target.dataset.day == 0) {
            return
        } 
            const id = getProgressId(e.target.dataset.day, e.target.dataset.name)
            if (e.target.dataset.status === "completed") {
            e.target.dataset.status = "incomplete"
            updateProgress(id, false, e)         
            }
        else {
            e.target.dataset.status = "completed" 
            updateProgress(id, true, e)
            }

            
            
    }

    
    // const checkDay = (day, habNam) => {
    //     if (!activeMonthProgress || day == 0 ) {
    //         return 
    //         }

    //     const day = activeMonthProgress.filter((progress) => {
    //         return progress.day.day == day && progress.day.month === currentMonth            
    //     })
        
    //     if (prog[0]) {
    //     if (prog[0].completed){
    //         return "completed"
    //     } else 
    //      {
    //         return "incomplete"
    //     }
    //     }


    // }


    const getStatus = (day, habName) => {
        if (!activeMonthProgress || day == 0 ) {
            return 
            }

        const prog = activeMonthProgress.filter((progress) => {
            return progress.day.day == day && progress.day.month === currentMonth && progress.habit.name.toUpperCase() === habName.toUpperCase()            
        })
        
        if (prog[0]) {
        if (prog[0].completed){
            return "completed"
        } else 
         {
            return "incomplete"
        }
        }
    }

    const getProgressId = (day, habName) => {
      
        const prog = activeMonthProgress.filter((progress) => {
            return progress.day.day  == day && progress.day.month === currentMonth && progress.habit.name.toUpperCase() === habName.toUpperCase()
            })
        return prog[0] ? prog[0].id : false
    }



    const paths = !loaded? null : pie.map((slice, index) => {
 
        return <>
            <path className="secretPath"  data-name={"secret-path"} id={`day${index.toString()}habit0`} key={`day${index.toString()}habit0`}  d={secretArc(slice)} stroke={'white'} fill={"#FFFFFF"} />
            <path className="habbitOne" data-day={index} data-status={habitNames[0] ? `${getStatus(index, habitNames[0])}` : null} data-name={habitNames[0]} id={`day${index.toString()}habit1`} key={`day${index.toString()}habit1`}  d={habitNames[0] ? arc(slice) : null} stroke={'black'} fill={"#FFFFFF"}  data-color={"#e76f51"} onClick={(e)=> habitRingClick(e)}/>
            <path className="habbitTwo" data-day={index} data-status={habitNames[1] ? `${getStatus(index, habitNames[1])}` : null} data-name={habitNames[1]} id={`day${index.toString()}habit2`} key={`day${index.toString()}habit2`} d={habitNames[1] ? arc2(slice) : null} stroke={'black'} fill={'#FFFFFF'} data-color={"#e76f51"} onClick={(e)=> habitRingClick(e)}/>
            <path className="habbitThree" data-day={index} data-status={habitNames[2] ? `${getStatus(index, habitNames[2])}` : null} data-name={habitNames[2]} id={`day${index.toString()}habit3`} key={`day${index.toString()}habit3`}  d={habitNames[2] ? arc3(slice) : null} stroke={'black'} fill={'#FFFFFF'} data-color={"#e76f51"} onClick={(e)=> habitRingClick(e)} />     
             <path className="habbitFour" data-day={index} data-status={habitNames[3] ? `${getStatus(index, habitNames[3])}` : null} data-name={habitNames[3]} id={`day${index.toString()}habit4`} key={`day${index.toString()}habit4`}   d={habitNames[3] ? arc4(slice) : null} stroke={'black'} fill={'#FFFFFF'} data-color={"#e76f51"} onClick={(e)=> habitRingClick(e)}  />       
             <path className="habbitFive" data-day={index} data-status={habitNames[4] ? `${getStatus(index, habitNames[4])}` : null} data-name={habitNames[4]} id={`day${index.toString()}habit5`} key={`day${index.toString()}habit5`} d={habitNames[4] ? arc5(slice) : null} stroke={'black'} fill={'#FFFFFF'} data-color={"#e76f51"}  onClick={(e)=> habitRingClick(e)} />
             <path className="habitSix" data-day={index} data-status={habitNames[5] ? `${getStatus(index, habitNames[5])}` : null} data-name={habitNames[5]} id={`day${index.toString()}habit6`} key={`day${index.toString()}habit6`} d={habitNames[5] ? arc6(slice) : null} stroke={'black'} fill={'#FFFFFF'} data-color={"#e76f51"} onClick={(e)=> habitRingClick(e)} />
             <path className= "habitSeven" data-day={index} data-status={habitNames[6] ? `${getStatus(index, habitNames[6])}` : null} data-name={habitNames[6]} id={`day${index.toString()}habit7`} key={`day${index.toString()}habit7`} d={habitNames[6]? arc7(slice) : null} stroke={'black'} fill={'#FFFFFF'} data-color={"#e76f51"} onClick={(e)=> habitRingClick(e)} />
             <path className= "numbers" id={`day${index.toString()}number`} key={`${index.toString()}number`} d={arc8(slice)} stroke={'black'}  />
             </>
        })
        




        return ( 
            <>    
                {paths}
                <TextPaths></TextPaths>
            </>
)


 

}





export default DaySlice


