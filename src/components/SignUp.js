import React, { useEffect, useState, useContext } from 'react';
import { Button, Form, Segment, Grid, Header, Message } from 'semantic-ui-react'
import {Redirect} from "react-router-dom"
import { UserContext } from '../context/user'



const SignUp = ({history}) => {

    const {user, signUp, signUpSuccess} = useContext(UserContext)

    const [form, setForm] = useState({username:"", password:"", password_confirmation: "", name: ""})

        const handleChange = (e) => {
        console.log(form)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        // {form.password_confirmation !== form.password_confirmation ? <p style={{ textAlign: "left" }} >Passwords do not match</p> : <p style={{ textAlign: "left" }} ></p>}
        if (form.password_confirmation !== form.password){
            alert("Passwords do not match. Please try again.")
        } else {
            signUp({username: form.username, name: form.name, password: form.password})
        setForm({
            name: "",
            username: "",
            password: "",
            password_confirmation: ""
        })
        if (signUpSuccess) {
            history.push("/tracker/createhabits")
        }

            }
    } 


    return (
        signUpSuccess ? <Redirect to='/tracker/createhabits' /> :
        <Grid  textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' style={{
          color: "#264653"
        }} textAlign='center'>
             Create a new account
          </Header>
          <Form onSubmit={(e) => handleSubmit(e)}  size='large'>
            <Segment inverted style={{
          background: "#A8DADC", color: "#264653"
        }}  stacked>

        <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Name'
                name="name"
                value={form.name}
                onChange={(e) => handleChange(e)}
              />

              <Form.Input fluid icon='user' style={{
          color: "#264653",
        }} iconPosition='left' placeholder='Username'                 
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
                onChange={(e) => handleChange(e)}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Confirm password'
                type='password'
                name="password_confirmation"
                value={form.password_confirmation}
                onChange={(e) => handleChange(e)}
                />
              <Button style={{
          color: "#FFFFFF", background: "#264653"
        }} fluid size='large'>
                Create account
              </Button>
            </Segment>
          </Form>
          <Message>
           Already have an account with us? <a href='./login'>Login</a>
          </Message>
        </Grid.Column>
      </Grid>



    )

    
}



export default SignUp