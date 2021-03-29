//import logo from './logo.svg';
import React, { Component}  from 'react' //importing react component from react library
import { Button,  Form,  Container, Header } from 'semantic-ui-react'  //importing Button, Form, Container, Header from 'semantic-ui-library'
import './App.css';

export default class App extends Component {   //exporting the class App so that other files can import it. App extends Component which gives the class access to methods and lifecycle hooks. It's basic ES6 Javascript, if you're going to be writing React then you're going to want to start with the basics of Javascript including ES6. 
  render (){
    return (
      < Container fluid className = "container" >
        <Header as='h2'> React Google Sheets
        </Header>
        
        <Form className = "form">
          <Form.Field>
            <label>Name</label>
            <input placeholder= 'Enter your Name'/>

          </Form.Field>
          <Form.Field>
            <label> Age </label>
            <input placeholder = 'Enter your age' />

          </Form.Field>
          <Form.Field>
            <label> Salary </label>
            <input placeholder= 'Enter salary' />

          </Form.Field>
          <Form.Field>
            <label> Hobby </label>
            <input placeholder='Enter your hooby' />

          </Form.Field>

          <Button color="blue"
          type = 'submit'> Submit </Button>


        </Form>

      </Container>

    )
  }     
    
  }

