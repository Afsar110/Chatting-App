import React from 'react';
import { Card } from 'react-bootstrap';
const style = {
    borderRadius:'50%',
    height:'50px',
    width:'50px',
    marginLeft:'6px'
}
const UserCard = ({id, name, photo,number}) => {
return (
    <>
  
    <Card style={{ width: '18rem',marginLeft:'70px',marginTop:'10px' }}>
      <Card style={{color:'black' }}>
     <Card.Text> 
     <Card.Img variant="top" style={style} src={photo}/>
     <h6 className='m'>{name}</h6>
     <h6 className='mm'>{number}</h6> 
    </Card.Text>
  </Card>
</Card>
    </>
);
}

export default UserCard;