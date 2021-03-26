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





function App({ history }) {

  const { user, tokenLogin }= useContext(UserContext)
  const { loaded, fetchProgress, activeMonthProgress, allProgress, allHabits, activeMonthHabits, setActiveMonth }= useContext(ProgressContext)
  const { currentMonth } = useContext(DateContext)




  useEffect(() => {
    const token = localStorage.getItem("token")
      if (token) { 
      if (!user) {
            tokenLogin(token) 
            console.log("token login")   
      } else {
        console.log("you need to fetch the progress")

        if (!loaded) {
          fetchProgress(user.id, currentMonth)      
        }
      }
    }
  }, [user, loaded])



  return (
    <div className="app">
      <Switch>
        <Route  exact path="/login" component={Login}/>
        <Route  exact path="/tracker" component={NavBar} />
        <Route  exact path="/createhabits" component={HabitForm} />

        <Route  exact path="/signup" component={SignUp} />
        {/* <Route  exact path="/habits/edit" component={EditHabitsForm} /> */}
        <Route  path="*" render={() => {
          return ( user ? <Redirect to='/tracker' /> : <Redirect to='/login' />)
          }} />
    </Switch>



    </div>
  );
}

export default App;
