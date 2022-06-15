import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function ScarchBar() {
    return (
      <>
        <InputGroup className="sm sb">
          <Form.Control
            placeholder="Search.."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button  className='bt' variant="outline-secondary" id="button-addon2">
          🔍
          </Button>
        </InputGroup>
      </>
    );
  }
  
  export default ScarchBar;