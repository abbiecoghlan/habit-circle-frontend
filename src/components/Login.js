import React, { useEffect, useState, useContext } from 'react';
import { Button, Form, Segment, Grid, Header, Message } from 'semantic-ui-react'
import {Redirect} from "react-router-dom"
import { UserContext } from '../context/user'
import NavBar from './NavBar';


const Login = ({history}) => {
  
  const token = localStorage.getItem("token")
  const { user, login } = useContext(UserContext)
  const [form, setForm] = useState({username:"", password:""})

  useEffect(() => {
    if (user) {
      history.push(`/tracker/${user.username}/home`)            
    }
  }, [user])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
   }

  const handleSubmit = (e) => {
    e.preventDefault()
    login({user: {...form}})
    setForm({
      username: "",
      password: ""
    })
  } 

  return (
    token && user ?
      <Redirect to={`/tracker/${user.username}/home`} /> : 
      token ? 
      <NavBar></NavBar> :       
        <Grid  textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2'  style={{color:"#264653"}} textAlign='center'>
              HABIT CIRCLE
            </Header>
            <Form onSubmit={(e) => handleSubmit(e)} size='large'>
              <Segment inverted style={{color: "#A8DADC", background: "#264653"}} stacked >
              <Form.Input fluid icon='user' iconPosition='left' placeholder='Username'                 
                name="username"
                value={form.username}
                onChange={(e) => handleChange(e)}/>

              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                name="password"
                value={form.password}
                onChange={(e) => handleChange(e)}/>
              
              <Button style={{ background: "#2a9d8f", color: "#FFFFFF" }}  fluid size='large'>
                Login
              </Button>
           </Segment>
         </Form>
         <Message> New to us? <a href='./signup'>Sign Up</a></Message>
       </Grid.Column>
      </Grid>
   )
}


export default Login
