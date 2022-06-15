import React from "react";
import { Card } from "react-bootstrap";
import {Colection} from './DataColection';
import UserCard from "./UserCard";


function UserCardList(val){
    
    return( 
        Colection.map(item => <UserCard key={item.id} id={item.id} name={item.name} photo = {item.image} number={item.no} />)
    );
}

export default UserCardList;