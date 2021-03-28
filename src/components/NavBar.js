import React, {useState, useContext } from 'react';
import { Dropdown, Icon, Image, Header, Segment, Sidebar, Input, Menu , Button} from 'semantic-ui-react'

import { UserContext } from '../context/user'
import { ProgressContext } from '../context/progress'
import '../App.css'
import CircleContainer from './CircleContainer'
import { DateContext } from '../context/date'
import NewMonthContainer from './NewMonthContainer'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import HabitForm from './HabitForm'
import HabitsContainer from './HabitsContainer'
import AnalysisContainer from './AnalysisContainer'



const NavBar = (props) => {

    const [darkMode, setDarkMode] = useState(false)


    const { resetProgress } = useContext(ProgressContext)
    const { logout, user } = useContext(UserContext)
    const { currentMonth, setCurrentMonth } = useContext(DateContext)
    

    // const [activeItem, setActiveItem] = useState({activeItem: ""})

    // const handleItemClick = (e, { name }) => {
    //     console.log("you clicked here")
    //     setActiveItem(name)      
    //     }



    const handleClick = (e, { name }) => {
        setCurrentMonth()

        console.log(e.target.name)
        console.log(name)

    }

    const handleLogout = () => {
        resetProgress()
        logout()        
    }

const inverted = "inverted"

    return (
        <> 
        
   
      
              <Sidebar.Pushable as={Segment}>
    <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            size="massive"
            vertical
            visible
            inverted
            width='thin'
            >   
            
          <Menu.Item>
            HABITS
            <Menu.Menu>
              <Menu.Item as={NavLink} exact to={`/tracker/${user.username}`} size='massive' onClick={handleClick}>
              <Icon name='home' />             
                Home     
              </Menu.Item>

              <Menu.Item as={NavLink} to={`/tracker/${user.username}/habits`}>
              <Icon name='edit' />
                Edit
              </Menu.Item>

              <Menu.Item as={NavLink} to={`/tracker/${user.username}/analyze`}>
              <Icon name='chart area' />
                Analyze 
              </Menu.Item>

              <Menu.Item as='a'>
              <Icon name="sign out" onClick={handleLogout}/>
                Logout
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
  

            </Sidebar>
            <Sidebar.Pusher>
            <Segment basic>

            <Switch>
                <Route  exact path="/tracker/createhabits" component={HabitForm} />
                <Route  exact path={`/tracker/${user.username}`} component={CircleContainer} />
                <Route  exact path={`/tracker/${user.username}/create`} component={NewMonthContainer} />
                <Route  exact path={`/tracker/${user.username}/habits`} component={HabitsContainer} />
                <Route  exact path={`/tracker/${user.username}/analyze`} component={AnalysisContainer} />

            </Switch>



            </Segment>
        </Sidebar.Pusher>
    </Sidebar.Pushable> 



    



        </>
      )



}


export default NavBar