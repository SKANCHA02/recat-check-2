import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Player = ({ player }) => {
    
    const { 
        name = "unknown player", 
        age = "N/A", 
        nationality = "unknown", 
        team = "No team", 
        image = "https://via.placeholder.com/150", 
        jerseyNumber = "N/A" 
      } = player;
    
return (
    
    <Card style={{ width: '18rem '}}>
  <Card.Img variant="top" src={image} alt="img"  />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Age : {age}</ListGroupItem>
    <ListGroupItem> Nationality : {nationality}</ListGroupItem>
    <ListGroupItem>Team : {team}</ListGroupItem>
    <ListGroupItem>Jersey number : {jerseyNumber}</ListGroupItem>
    
  </ListGroup>
  
</Card>
)

}
Player.defaultProps = {
    player: {
      name: "unknown player",
      age: "N/A",
      nationality: "unknown",
      team: "No team",
      image: "https://via.placeholder.com/150", // URL d'une image par défaut
      jerseyNumber: "N/A",
    },
  } ;
export default Player;