// import * as React from 'react';
// import * as d3 from "d3";
// import { useEffect, useState, useRef, useContext } from 'react'
// import { ProgressContext } from '../context/progress'
// import { UserContext } from '../context/user'
// import { DateContext } from '../context/date';



// const HabitRingPath = props => {

//     let { pie } = props 
//     const { habits } = useContext(UserContext)

//     const habitArray = habits.map((habit) => habit.name)


//     const paths = pie.map((slice, index) => {

//             return <>
//             <path className="secretPath" id={`day${index.toString()}habit0`} key={`day${index.toString()}habit0`}  d={secretArc(slice)} stroke={'white'} fill={"#FFFFFF"} data-color={"#FFFFFF"} onClick={(e)=> secretRingClick(e)}/>
//             <path className="habbitOne" id={`day${index.toString()}habit1`} key={`day${index.toString()}habit1`}  d={arc(slice)} stroke={'black'} fill={"#FFFFFF"} data-color={"#e76f51"} onClick={(e)=> habitRingOneClick(e)}/>
//             <path className="habbitTwo" id={`day${index.toString()}habit2`} key={`day${index.toString()}habit2`} d={arc2(slice)} stroke={'black'} fill={'#FFFFFF'} data-color={"#e76f51"} onClick={(e)=> habitRingTwoClick(e)}/>
//             <path className="habbitThree" id={`day${index.toString()}habit3`} key={`day${index.toString()}habit3`}  d={arc3(slice)} stroke={'black'} fill={'#FFFFFF'} data-color={"#e76f51"} onClick={(e)=> habitRingThreeClick(e)} />     
//              <path className="habbitFour" id={`day${index.toString()}habit4`} key={`day${index.toString()}habit4`}   d={arc4(slice)} stroke={'black'} fill={'#FFFFFF'} data-color={"#e76f51"} onClick={(e)=> habitRingFourClick(e)}  />       
//              <path className="habbitFive" id={`day${index.toString()}habit5`} key={`day${index.toString()}habit5`} d={arc5(slice)} stroke={'black'} fill={'#FFFFFF'} data-color={"#e76f51"}  onClick={(e)=> habitRingFiveClick(e)} />
//              <path className="habitSix" id={`day${index.toString()}habit6`} key={`day${index.toString()}habit6`} d={arc6(slice)} stroke={'black'} fill={'#FFFFFF'} data-color={"#e76f51"} onClick={(e)=> HabitRingSixClick(e)} />
//              <path className= "habitSeven" id={`day${index.toString()}habit7`} key={`day${index.toString()}habit7`} d={arc7(slice)} stroke={'black'} fill={'#FFFFFF'} data-color={"#e76f51"} onClick={(e)=> habitRingSevenClick(e)} />
//              </>
//         })


//         return (paths)


// }


// export default HabitRingPath