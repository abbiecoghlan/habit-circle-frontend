import * as React from 'react';
import * as d3 from "d3";
import { useContext } from 'react'
import { ProgressContext } from '../context/progress'
import { Loader, Header } from 'semantic-ui-react';




 const Logo = () => {
    const { submitted, loaded } = useContext(ProgressContext)
    
    const height = 750
    const width = 800
    
    let pie = d3.pie()([1])
 
    const radiusStart = 50
    const ringDistance = 252/7
   
    const center = d3
    .arc()
    .innerRadius(0)
    .outerRadius(50)

    const arc1 = d3
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


    
    const paths = pie.map((slice, index) => {
        return <> 
            <path className="habbitOne" data-status={"completed"} id="habit1" d={center(slice)} style={{strokeWidth: 2}} stroke={'black'} fill={"#e76f51"} />
            <path className="habbitOne" data-status={"completed"} id="habit2" d={arc1(slice)} style={{strokeWidth: 2}} stroke={'black'} fill={"#e76f51"} />
            <path className="habbitOne" data-status={"completed"} id="habit3" d={arc2(slice)} style={{strokeWidth: 2}} stroke={'black'} fill={"#e76f51"} />
            <path className="habbitOne" data-status={"completed"} id="habit4" d={arc3(slice)} style={{strokeWidth: 2}} stroke={'black'} fill={"#e76f51"} />
            <path className="habbitOne" data-status={"completed"} id="habit5" d={arc4(slice)} style={{strokeWidth: 2}} stroke={'black'} fill={"#e76f51"} />
            <path className="habbitOne" data-status={"completed"} id="habit7" d={arc5(slice)} style={{strokeWidth: 2}} stroke={'black'} fill={"#e76f51"} />
            <path className="habbitOne" data-status={"completed"} id="habit8" d={arc6(slice)} style={{strokeWidth: 2}} stroke={'black'} fill={"#e76f51"} />
            </>
    })

       
    return (
        <>
            <div id="1" stretched class="ui center aligned middle aligned grid" >
                {!loaded || !submitted ? 
                <Header as='h4'  style={{color:"#264653", position: "absolute", marginTop: "55px", display: "inline", witdh:"100vw", padding:"10px"}} textAlign='center'>
                    Loading habit data...
                </Header> : <></>}
                <div style={{ textAlign: "center", position:"relative"}} >
                    {!loaded || !submitted? <Loader  style={{float: "right"}}active size='massive'></Loader> : <></>}
    
                    <svg id="circle" height={height} width={width} style={{ display: "block", margin: "auto" }}>
                        <g transform={`translate(${width / 2},${height / 2}) `}>
                            {paths}
                        </g>
                    </svg> 
                </div>
            </div>
        </>
    )

    
}

export default Logo