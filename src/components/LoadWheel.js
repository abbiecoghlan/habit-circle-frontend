
import { Dimmer, Loader} from 'semantic-ui-react'
import '../App.css'

const LoadWheel = () => {
  return (
    <div class="ui center aligned middle aligned grid" style={{height: "100vh"}}>
      <Dimmer active inverted inline="center">
        <Loader indeterminate size='massive'> Loading your habit data </Loader>
      </Dimmer> 
    </div>      
    )
}


export default LoadWheel