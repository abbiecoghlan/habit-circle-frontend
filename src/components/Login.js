import React, { useEffect, useState, useContext } from 'react';
import { Button, Form, Segment, Grid, Header, Message } from 'semantic-ui-react'
import {Redirect} from "react-router-dom"
import { UserContext } from '../context/user'
import LoadWheel from './LoadWheel';
import NavBar from './NavBar';




const Login = ({history}) => {

    const token = localStorage.getItem("token")
    const { user, login } = useContext(UserContext)
    const [form, setForm] = useState({username:"", password:""})


    useEffect(() => {
      if (!user) {
        console.log("no user logged in")
      }
    }, [])
  

    useEffect(() => {
        if (user) {
            history.push(`/tracker/${user.username}/month`)            
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

   // use user.error from useContext usercontext to render error message if login fails

   return (<>
        {token && user ? <Redirect to={`/tracker/${user.username}/month`} /> : token ? <NavBar></NavBar> :       
       <Grid  textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
       <Grid.Column style={{ maxWidth: 450 }}>
         <Header as='h2'  style={{
          color:"#264653"
        }} textAlign='center'>
            Log-in to your account
         </Header>
         <Form onSubmit={(e) => handleSubmit(e)} size='large'>
           <Segment inverted style={{
          color: "#A8DADC", background: "#264653"
        }}stacked>
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
               onChange={(e) => handleChange(e)}
             />
             <Button style={{ background: "#2a9d8f", color: "#FFFFFF" }}  fluid size='large'>
               Login
             </Button>
           </Segment>
         </Form>
         <Message>
             
           New to us? <a href='./signup'>Sign Up</a>
         </Message>
       </Grid.Column>
     </Grid>}
</>


   )
}



export default Login



// {token ? <LoadWheel></LoadWheel> : null}
// {user ? <Redirect to={`/tracker/${user.username}`} /> :       
//  <Grid  textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
//  <Grid.Column style={{ maxWidth: 450 }}>
//    <Header as='h2'  style={{
//     color:"#264653"
//   }} textAlign='center'>
//       Log-in to your account
//    </Header>
//    <Form onSubmit={(e) => handleSubmit(e)} size='large'>
//      <Segment inverted style={{
//     color: "#A8DADC", background: "#264653"
//   }}stacked>
//        <Form.Input fluid icon='user' iconPosition='left' placeholder='Username'                 
//          name="username"
//          value={form.username}
//          onChange={(e) => handleChange(e)}/>
//        <Form.Input
//          fluid
//          icon='lock'
//          iconPosition='left'
//          placeholder='Password'
//          type='password'
//          name="password"
//          value={form.password}
//          onChange={(e) => handleChange(e)}
//        />
//        <Button style={{ background: "#2a9d8f", color: "#FFFFFF" }}  fluid size='large'>
//          Login
//        </Button>
//      </Segment>
//    </Form>
//    <Message>
       
//      New to us? <a href='./signup'>Sign Up</a>
//    </Message>
//  </Grid.Column>
// </Grid>}