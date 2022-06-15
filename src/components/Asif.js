import { Stack } from '@mui/material';
import React from 'react';
import {  Button, Container, Row, Col } from 'react-bootstrap';
import App from '../App';
import './App.css'



const Asif = () => {
    const animateButton = (e) => {

        e.preventDefault();
        //reset animation
        e.target.classList.remove('animate');
        
        e.target.classList.add('animate');
        setTimeout(function(){
          e.target.classList.remove('animate');
        },700);
      };
    return (
        <Container fluid>
            <Row style={{width: 'fit-content'}}>
                <Col>
                <div class="form-group pmd-textfield pmd-textfield-filled pmd-textfield-floating-label">
	                  <Stack className='m' direction="row" spacing={2}>  
            	    <input id="filledfloating " className="form-control bb" placeholder='type your message' type="text"></input>
                    <button className="bubbly-button cc " onClick={animateButton}>send</button> </Stack>
                </div>
                </Col>
               
      </Row>
   </Container>
    )
}

export default Asif;