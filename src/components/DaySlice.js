import * as React from 'react';
import * as d3 from "d3";


const habitArray = [{habit: "Floss"}, {habit: "Floss"}]


const DaySlice = props => {
    let { pie } = props 
    let outerRadius = 100 
    let innerRadius = outerRadius * .7
   

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
        console.log(`you clicked habit one, day ${e.target.dataset.day} of the month`)
    
    }



    const ringTwoClick = (e) => {
        e.target.setAttribute("fill", "#F18C8E")
        console.log(`you clicked habit two, day ${e.target.dataset.day} of the month`)
    }

    const handleAnotherClick = (e) => {
        e.target.setAttribute("fill", "#e76f51")
        console.log(`you clicked habit three, day ${e.target.dataset.day} of the month`)

    }

    const handleThirdClick = (e) => {
        e.target.setAttribute("fill", "#f4a261")
        console.log(`you clicked habit four, day ${e.target.dataset.day} of the month`)

    }

    const handleForthClick = (e) => {
        e.target.setAttribute("fill", "#e9c46a")
        console.log(`you clicked habit five, day ${e.target.dataset.day} of the month`)

    }

    const handleFifthClick = (e) => {
        e.target.setAttribute("fill", "#2a9d8f")
        console.log(`you clicked habit six, day ${e.target.dataset.day} of the month`)

    }

    const handleSixthClick = (e) => {
        e.target.setAttribute("fill", "#264653")
        console.log(`you clicked habit seven, day ${e.target.dataset.day} of the month`)

    }

    // const handleseventhClick = (e) => {
    //     e.target.setAttribute("fill", "#C400FA")

    // }
    

    
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

    
   

    let interpolate = d3.interpolateRgb("#eaaf79", "#bc3358")

    return pie.map((slice, index) => {
        let sliceColor = interpolate(index / (pie.length -1))


        let idNum = parseInt(index)

        return <>

            <path id="secretPath" key={index}  d={secretArc(slice)} stroke={'white'} fill={"#FFFFFF"} onClick={(e)=> ringOneClick(e)}/>
                <text>
                    <textPath textLength="65" startOffset="02" text-anchor="start" href="#secretPath"> FLOSS </textPath>
                </text>

            <path id="habbitOne" data-day={idNum} key={index}  d={arc(slice)} stroke={'black'} fill={"#FFFFFF"} onClick={(e)=> ringOneClick(e)}/>
                <text>
                    <textPath textLength="100" startOffset="02" href="#habbitOne"> VITAMINS </textPath>
                </text>

             <path id="habbitTwo" data-day={idNum} key={index} d={arc2(slice)} stroke={'black'} fill={'#FFFFFF'} onClick={(e)=> ringTwoClick(e)}/>
                <text>
                    <textPath textLength="110" startOffset="3%" side="right" x="40" href="#habbitTwo"> 10,000 STEPS </textPath>
                </text>

             <path id="habbitThree" data-day={idNum} key={index}  d={arc3(slice)} stroke={'black'} fill={'#FFFFFF'} onClick={(e)=> handleAnotherClick(e)} />
             <text>
                    <textPath textLength="110" startOffset="8%" side="right" x="40" href="#habbitThree"> MEDITATE </textPath>
                </text>
        
             <path id="habbitFour" data-day={idNum} key={index}   d={arc4(slice)} stroke={'black'} fill={'#FFFFFF'} onClick={(e)=> handleThirdClick(e)}  />
             <text>
                    <textPath textLength="110" startOffset="8%" side="right" x="40" href="#habbitFour"> STRETCH </textPath>
                </text>
        
             <path id="habbitFive" data-day={idNum} key={index} d={arc5(slice)} stroke={'black'} fill={'#FFFFFF'} onClick={(e)=> handleForthClick(e)} />
             <text>
                    <textPath textLength="110" startOffset="10%" side="right" x="40" href="#habbitFive"> MEDITATE </textPath>
                </text>


             <path id="habitSix" key={index} data-day={idNum} d={arc6(slice)} stroke={'black'} fill={'#FFFFFF'} onClick={(e)=> handleFifthClick(e)} />
         
         
             <text>
                    <textPath textLength="110" startOffset="12%" side="right" x="40" href="#habitSix"> DAILY HABITS </textPath>
                </text>

             <path id= "habitSeven" key={index} data-day={idNum} d={arc7(slice)} stroke={'black'} fill={'#FFFFFF'} onClick={(e)=> handleSixthClick(e)} />

             <text>
                    <textPath startOffset="9%" href="#habitSeven"> 
                    <tspan startOffset="" dy="-5" fill="navy" > 
                    </tspan>   
                    </textPath>
            </text> 
             </>
    })

}

export default DaySlice
