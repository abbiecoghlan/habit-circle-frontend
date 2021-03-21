// import logo from './logo.svg';
import './App.css';
import React, { useContext } from 'react';
import CircleContainer from './components/CircleContainer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Switch, Route, Redirect } from 'react-router-dom';
import { UserContext } from './context/user'



function App({ history }) {

  const user = useContext(UserContext)

  // useEffect(() => {
  //   if (!user) {
  //     if (!token) {

  //     }
  //   }
  // }, [])

  // const styles = {
  //   textAlign: "center"
  // };

  return (

    <div className="app">
      <Switch>
        <Route  exact path="/login" component={Login}/>
        <Route  exact path="/tracker" component={CircleContainer} />
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
