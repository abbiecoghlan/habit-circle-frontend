import * as React from 'react';
import * as d3 from "d3";


// const habitArray = [{habit: "Floss"}, {habit: "Floss"}]


const DaySlice = props => {
    let { pie } = props 
    // let outerRadius = 100 
    // let innerRadius = outerRadius * .7
   

    let arc = d3
    .arc()
    .innerRadius(50)
    .outerRadius(75)
    
    const arc2 = d3
    .arc()
    .innerRadius(75)
    .outerRadius(100)
    .padAngle(0)
    .cornerRadius(0);


    const arc3 = d3
    .arc()
    .innerRadius(100)
    .outerRadius(125)
    .padAngle(0)
    .cornerRadius(0);

    const arc4 = d3
    .arc()
    .innerRadius(125)
    .outerRadius(150)
    .padAngle(0)
    .cornerRadius(0);

    const arc5 = d3
    .arc()
    .innerRadius(150)
    .outerRadius(175)
    .padAngle(0)
    .cornerRadius(0);

    const arc6 = d3
    .arc()
    .innerRadius(175)
    .outerRadius(200)
    .padAngle(0)
    .cornerRadius(0);

    const arc7 = d3
    .arc()
    .innerRadius(200)
    .outerRadius(225)
    .padAngle(0)
    .cornerRadius(0);

    const secretArc = d3
    .arc()
    .innerRadius(25)
    .outerRadius(50)


    const ringOneClick = (e) => {
        e.target.setAttribute("fill", "#A8DADC")
        console.log(e.target.id)
    }

    const ringTwoClick = (e) => {
        e.target.setAttribute("fill", "#F18C8E")
        console.log(e.target.id)
    }

    const handleAnotherClick = (e) => {
        e.target.setAttribute("fill", "#e76f51")
        console.log(e.target.id)

    }

    const handleThirdClick = (e) => {
        e.target.setAttribute("fill", "#f4a261")
        console.log(e.target.id)

    }

    const handleForthClick = (e) => {
        e.target.setAttribute("fill", "#e9c46a")
        console.log(e.target.id)

    }

    const handleFifthClick = (e) => {
        e.target.setAttribute("fill", "#2a9d8f")
        console.log(e.target.id)

    }

    const handleSixthClick = (e) => {
        e.target.setAttribute("fill", "#264653")
        console.log(e.target.id)
    }

    // const handleseventhClick = (e) => {
    //     e.target.setAttribute("fill", "#C400FA")

    // }
    


    // This doesnt work :( 
    // let daysArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28, 29, 30, 31]
    

    // const days = daysArray.map((day, index) => {
    //     return  ( 
    //     <text>
    //     <textPath startOffset="9%" href="#habitSeven"> 
    //     <tspan startOffset="" dy="-5" fill="navy" > {day}
    //     </tspan>   
    //     </textPath>
    //      </text>
    //      )
    //  })

    // let habits = [{name: "habitOne"}, {name: "habitTwo"}, {name: "habitThree"}, {name: "habitFour"}, {name: "habitFive"}, {name: "habitThree"}, ]
    
   

    // let interpolate = d3.interpolateRgb("#eaaf79", "#bc3358")

    const paths = pie.map((slice, index) => {
        return <>
            <path className="secretPath" id={`day${index.toString()}habit0`} key={`day${index.toString()}habit0`}  d={secretArc(slice)} stroke={'white'} fill={"#FFFFFF"} onClick={(e)=> ringOneClick(e)}/>
            <path className="habbitOne" id={`day${index.toString()}habit1`} key={`day${index.toString()}habit1`}  d={arc(slice)} stroke={'black'} fill={"#FFFFFF"} onClick={(e)=> ringOneClick(e)}/>
            <path className="habbitTwo" id={`day${index.toString()}habit2`} key={`day${index.toString()}habit2`} d={arc2(slice)} stroke={'black'} fill={'#FFFFFF'} onClick={(e)=> ringTwoClick(e)}/>
            <path className="habbitThree" id={`day${index.toString()}habit3`} key={`day${index.toString()}habit3`}  d={arc3(slice)} stroke={'black'} fill={'#FFFFFF'} onClick={(e)=> handleAnotherClick(e)} />     
             <path className="habbitFour" id={`day${index.toString()}habit4`} key={`day${index.toString()}habit4`}   d={arc4(slice)} stroke={'black'} fill={'#FFFFFF'} onClick={(e)=> handleThirdClick(e)}  />       
             <path className="habbitFive" id={`day${index.toString()}habit5`} key={`day${index.toString()}habit5`} d={arc5(slice)} stroke={'black'} fill={'#FFFFFF'} onClick={(e)=> handleForthClick(e)} />
             <path className="habitSix" id={`day${index.toString()}habit6`} key={`day${index.toString()}habit6`} d={arc6(slice)} stroke={'black'} fill={'#FFFFFF'} onClick={(e)=> handleFifthClick(e)} />
             <path className= "habitSeven" id={`day${index.toString()}habit7`} key={`day${index.toString()}habit7`} d={arc7(slice)} stroke={'black'} fill={'#FFFFFF'} onClick={(e)=> handleSixthClick(e)} />
             </>
        })

// THIS WONT WORK 
        // const dayPaths = daysArray.map((day) => {

    //     const ref = `day${day}habit7`

    //     return  
    //     <>
    //     <text>
    //     <textPath startOffset="9%" href={{ref}} > 
    //     <tspan startOffset="" dy="-5" fill="#264653" > 1
    //     </tspan>   
    //     </textPath>
    //     </text> 
    //     </>
    // })
        




     

        return ( <>
        
                {paths}
                <text>
                    <textPath textLength="65" startOffset="02" href="#day0habit0"> FLOSS </textPath>
                </text>
                <text>
                    <textPath textLength="100" startOffset="03" href="#day0habit1"> VITAMINS </textPath>
                </text>
                <text>
                    <textPath textLength="120" startOffset="5%" side="right" x="40" href="#day0habit2"> 10,000 STEPS </textPath>
                </text>
                <text>
                    <textPath textLength="110" startOffset="9%" side="right" x="40" href="#day0habit3"> DRINK WATER </textPath>
                </text>
                <text>
                    <textPath textLength="110" startOffset="11%" side="right" x="40" href="#day0habit4"> STRETCH </textPath>
                </text>
                <text>
                    <textPath textLength="110" startOffset="13%" side="right" x="40" href="#day0habit5"> MEDITATE </textPath>
                </text>       
                <text>
                    <textPath fill="black" textLength="110" startOffset="15%" side="right" x="40" href="#day0habit6"> JOURNAL </textPath>
                </text>
    

             <text>
                    <textPath startOffset="9%" href="#day1habit7"> 
                        <tspan startOffset="" dy="-5" fill="#264653" > 1 </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day2habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 2
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day3habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 3
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day4habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 4
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day5habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 5
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day6habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 6
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day7habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 7
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day8habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 8
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day9habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 9
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day10habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 10
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day11habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 11
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day12habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 12
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day13habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 13
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day14habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 14
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day15habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 15
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day16habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 16
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day17habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 17
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day18habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 18
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day19habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 19
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day20habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 20
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day21habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 21
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day22habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 22
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day23habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 23
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day24habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 24
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day25habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 25
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day26habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 26
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day27habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 27
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day28habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 28
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day29habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 29
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day30habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 30
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day31habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 31
                    </tspan>   
                    </textPath>
            </text> 
            
             </>
)


}

    //THIS WORKS AND RENDERS THE TRACKER 
//     return pie.map((slice, index) => {
//         let sliceColor = interpolate(index / (pie.length -1))


//         let idNum = `${parseInt(index)}`

//         return <>

//             <path id="secretPath" key={index}  d={secretArc(slice)} stroke={'white'} fill={"#FFFFFF"} onClick={(e)=> ringOneClick(e)}/>
//                 <text>
//                     <textPath textLength="65" startOffset="02" text-anchor="start" href="#secretPath"> FLOSS </textPath>
//                 </text>

//             <path id="habbitOne" data-day={idNum} key={index}  d={arc(slice)} stroke={'black'} fill={"#FFFFFF"} onClick={(e)=> ringOneClick(e)}/>
//                 <text>
//                     <textPath textLength="100" startOffset="02" href="#habbitOne"> VITAMINS </textPath>
//                 </text>

//              <path id="habbitTwo" data-day={idNum} key={index} d={arc2(slice)} stroke={'black'} fill={'#FFFFFF'} onClick={(e)=> ringTwoClick(e)}/>
//                 <text>
//                     <textPath textLength="110" startOffset="3%" side="right" x="40" href="#habbitTwo"> 10,000 STEPS </textPath>
//                 </text>

//              <path id="habbitThree" data-day={idNum} key={index}  d={arc3(slice)} stroke={'black'} fill={'#FFFFFF'} onClick={(e)=> handleAnotherClick(e)} />
//              <text>
//                     <textPath textLength="110" startOffset="8%" side="right" x="40" href="#habbitThree"> MEDITATE </textPath>
//                 </text>
        
//              <path id="habbitFour" data-day={idNum} key={index}   d={arc4(slice)} stroke={'black'} fill={'#FFFFFF'} onClick={(e)=> handleThirdClick(e)}  />
//              <text>
//                     <textPath textLength="110" startOffset="8%" side="right" x="40" href="#habbitFour"> STRETCH </textPath>
//                 </text>
        
//              <path id="habbitFive" data-day={idNum} key={index} d={arc5(slice)} stroke={'black'} fill={'#FFFFFF'} onClick={(e)=> handleForthClick(e)} />
//              <text>
//                     <textPath textLength="110" startOffset="10%" side="right" x="40" href="#habbitFive"> MEDITATE </textPath>
//                 </text>


//              <path id="habitSix" key={index} data-day={idNum} d={arc6(slice)} stroke={'black'} fill={'#FFFFFF'} onClick={(e)=> handleFifthClick(e)} />
         
         
//              <text>
//                     <textPath textLength="110" startOffset="12%" side="right" x="40" href="#habitSix"> DAILY HABITS </textPath>
//                 </text>

//              <path id= "habitSeven" key={index} data-day={idNum} d={arc7(slice)} stroke={'black'} fill={'#FFFFFF'} onClick={(e)=> handleSixthClick(e)} />

//              <text>
//                     <textPath startOffset="9%" href="#habitSeven"> 
//                     <tspan startOffset="" dy="-5" fill="navy" > 
//                     </tspan>   
//                     </textPath>
//             </text> 
//              </>
//     })

// }



export default DaySlice
