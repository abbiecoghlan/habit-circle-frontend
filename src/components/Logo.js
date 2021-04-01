import * as React from 'react';
import * as d3 from "d3";
import DaySlice from './DaySlice'
import { useEffect, useState, useRef, useContext } from 'react'
import { ProgressContext } from '../context/progress'
import { UserContext } from '../context/user'
import { DateContext } from '../context/date';
import { Button, Icon } from 'semantic-ui-react';
import { Segment, Dimmer, Loader, Header } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import HabitForm from './HabitForm';
import NewMonthContainer from './NewMonthContainer';
import LoadWheel from './LoadWheel';



 const Logo = () => {
    const { submitted, activeMonthProgress, loaded, setActiveMonth } = useContext(ProgressContext)
    // const { habits, user, signUpSuccess } = useContext(UserContext)
    // const { currentMonth, currentYear, daysOfMonth, daysArray, setDaysArray, incrementMonth, decrementMonth} = useContext(DateContext)
    // const [month] = useState(new Date().getMonth() + 1)


    // useEffect(() => {
    //     if (user){
    //         console.log("circle use effect")
    //         }
    //     if (loaded) {
    //         setActiveMonth(currentMonth)
    //         }   
      
    //     }, [currentMonth])

   

        
    // useEffect(() => {
    //     const array = [10]
    //     while (array.length <= daysOfMonth){
    //         array.push(1)        
    //         }
    //         setDaysArray(array)        
    //     }, [currentMonth])



    
    const height = 750
    const width = 800
    

    let pie = d3.pie()([1])

     
    const radiusStart = 50

    const ringDistance = 252/7
   

    // create a for loop that iterates how every many times i need to 
    // create the arc and shovel it into the array 
    // then grab it by index or destructure it 

    const secretArc = d3
    .arc()
    .innerRadius(0)
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
    .innerRadius(radiusStart + (ringDistance * 7))
    .outerRadius(radiusStart + (ringDistance * 7))
    .padAngle(0)
    .cornerRadius(0); 

    // let pie = d3.pie()(daysArray)


    
    // const monthName = new Date(currentYear, currentMonth - 1, 1).toLocaleString('default', { month: 'long' })
    
const paths = pie.map((slice, index) => {
 return      <> 
  <path className="habbitOne" data-status={"completed"} id="habit1" d={secretArc(slice)} style={{strokeWidth: 2}} stroke={'black'} fill={"#e76f51"} />
 <path className="habbitOne" data-status={"completed"} id="habit2" d={arc(slice)} style={{strokeWidth: 2}} stroke={'black'} fill={"#e76f51"} />
 <path className="habbitOne" data-status={"completed"} id="habit3" d={arc2(slice)} style={{strokeWidth: 2}} stroke={'black'} fill={"#e76f51"} />
 <path className="habbitOne" data-status={"completed"} id="habit4" d={arc3(slice)} style={{strokeWidth: 2}} stroke={'black'} fill={"#e76f51"} />
 <path className="habbitOne" data-status={"completed"} id="habit5" d={arc4(slice)} style={{strokeWidth: 2}} stroke={'black'} fill={"#e76f51"} />
 <path className="habbitOne" data-status={"completed"} id="habit6" d={arc5(slice)} style={{strokeWidth: 2}} stroke={'black'} fill={"#e76f51"} />
 <path className="habbitOne" data-status={"completed"} id="habit7" d={arc6(slice)} style={{strokeWidth: 2}} stroke={'black'} fill={"#e76f51"} />
</>
    })

       

    return (
        <>

<div id="1" stretched class="ui center aligned middle aligned grid" >
{!loaded || !submitted ? <Header as='h4'  style={{
            color:"#264653", position: "absolute", marginTop: "55px", display: "inline", witdh:"100vw", padding:"10px"
          }} textAlign='center'>
             Loading habit data...
           </Header> : <></>}
        <div style={{ textAlign: "center", position:"relative"}} >
      {!loaded || !submitted? <Loader  style={{float: "right"}}active size='massive'></Loader> : <></>}
 

        <svg id="circle" height={height} width={width} style={{ display: "block", margin: "auto" }}>
                  <g transform={`translate(${width / 2},${height / 2}) `}>
            {paths}
            
                <text>
                    <textPath textLength="100" startOffset="03" href="habit1"> Habit one </textPath>
                </text>


            </g>

        </svg> 

        </div>
        </div>
        </>
    )


    
}

export default Logo