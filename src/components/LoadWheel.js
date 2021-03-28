
import { Dimmer, Segment, Loader} from 'semantic-ui-react'
import '../App.css'
import Circle from './Circle';




const LoadWheel = (props) => {



    return (
        <>
        
      <Segment>
         <Dimmer active inverted inline="center">
           <Loader indeterminate size='massive'

           >Loading your habit data</Loader>
         </Dimmer> 
         <Circle></Circle>
         {/* <p>THIS IS A TEST</p> */}
         </Segment>
    



        </>
      )



}


export default LoadWheel