// import logo from './logo.svg';
import './App.css';
import React, { useContext, useEffect } from 'react';
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import HabitForm from './components/HabitForm';
import { Switch, Route, Redirect } from 'react-router-dom';
import { UserContext } from './context/user'




function App({ history }) {

  const { user, tokenLogin }= useContext(UserContext)
  
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) { 
    if (!user) {
          tokenLogin(token) 
          console.log("you need to do a token login")   
    } else {
      debugger
      console.log("you need to fetch the progress")
      // if (progressArray.length < 1){
        // code here to fetch progress array 
        // fetchProgress(user.id, currentMonth)
      // }
    }

  }
  }, [])



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
