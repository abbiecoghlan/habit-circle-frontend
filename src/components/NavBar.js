import React, { useContext } from 'react';
import { Icon, Segment, Sidebar, Menu } from 'semantic-ui-react'
import { UserContext } from '../context/user'
import { ProgressContext } from '../context/progress'
import '../App.css'
import CircleContainer from './CircleContainer'
import { DateContext } from '../context/date'
import NewMonthContainer from './NewMonthContainer'
import { NavLink, Switch, Route } from 'react-router-dom';
import HabitForm from './HabitForm'
import HabitsContainer from './HabitsContainer'
import AnalysisContainer from './AnalysisContainer'
import HomeContainer from './HomeContainer'


const NavBar = () => {

  const { resetProgress, setActiveMonth } = useContext(ProgressContext)
  const { logout, user} = useContext(UserContext)
  const { setCurrentMonth } = useContext(DateContext)

  const handleClick = () => {     
    setCurrentMonth()
    setActiveMonth(new Date().getMonth() + 1)       
  }

  const handleLogout = () => {
    resetProgress()
    logout()        
  }


  return (
    <>
      <Sidebar.Pushable style={{ height: '100vh' }} as={Segment}>
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          size="massive"
          vertical
          visible
          inverted
          width='thin'
          style={{color: "#2a9d8f"}}
          >   
            
            <Menu.Item>
              HABIT
              CIRCLE
              <Menu.Menu>
              
                <Menu.Item as={NavLink} exact to={`/tracker/${user.username}/home`} size='massive' onClick={handleClick}>
                <Icon name='home' />             
                  Home     
                </Menu.Item>

                <Menu.Item as={NavLink} exact to={`/tracker/${user.username}/month`} size='massive' onClick={handleClick}>
                <Icon name='bullseye' />             
                  Tracker      
                </Menu.Item>
                
                <Menu.Item as={NavLink} to={`/tracker/${user.username}/habits`} onClick={handleClick}>
                <Icon name='edit' />
                  Edit
                </Menu.Item>

                <Menu.Item as={NavLink} to={`/tracker/${user.username}/analyze`} onClick={handleClick} >
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
                  <Route  exact path={`/tracker/${user.username}/home`} component={HomeContainer} />
                  <Route  exact path={`/tracker/${user.username}/month`} component={CircleContainer} />
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