// import logo from './logo.svg';
import './App.css';
import React, { useContext, useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import HabitForm from './components/HabitForm';
import { Switch, Route, Redirect } from 'react-router-dom';
import { UserContext } from './context/user'
import { ProgressContext } from './context/progress'
import { DateContext } from './context/date'
import CircleContainer from './components/CircleContainer';





function App({ history }) {

  const { user, tokenLogin }= useContext(UserContext)
  const { loaded, fetchProgress, activeMonthProgress, allProgress, allHabits, activeMonthHabits, setActiveMonth }= useContext(ProgressContext)
  const { currentMonth, setCurrentMonth } = useContext(DateContext)




  useEffect(() => {
    const token = localStorage.getItem("token")
      if (token) { 
      if (!user) {
            tokenLogin(token) 
      } else {

        if (!loaded) {
          fetchProgress(user.id, currentMonth)      
        }
      }
    }
   
  }, [user, loaded, currentMonth])



  return (
    <div className="app">
      <Switch>
        <Route  exact path="/login" component={Login}/>
        <Route  exact path="/signup" component={SignUp} />

        <Route  path="*" render={() => {
          return ( user ? <Route path="/tracker" component={NavBar} /> : <Redirect to='/login' />)
          }} />

    </Switch>



    </div>
  );
}

export default App;
