import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const List = (props) => {
  const [like, setLike] = useState({
    like: false
  })
  return(
    <Accordion>
      <Card>
        <Card.Header>
          <FontAwesomeIcon style = {{visibility: like ? "hidden" : "visible", color:"gold"}} icon={faStar} size="2x" />
          <Accordion.Toggle as={Button} variant = "link" eventKey ="0">
          <div style={{display:"flex", justifyContent:"space-between"}}>
            <h4 style={{marginLeft:"20pt", marginRight:"10pt"}}>{props.item.name}</h4> 
            <img src = {props.item.image_url} alt="Logo" style={{height:"40pt", marginLeft:"15pt"}} />
          </div>
          </Accordion.Toggle>
          <Button 
            onClick= {()=>setLike((like) => !like)} 
            style={{marginLeft:"20pt"}} 
            variant="info">Like
          </Button>
        </Card.Header>
        <Accordion.Collapse eventKey ="0">
          <Card.Body>
            <span style={{fontWeight:"bold"}}>Tagline: </span> {props.item.tagline}<br/>
            <span style={{fontWeight:"bold"}}>First Brewed: </span> {props.item.first_brewed}<br/>
            <span style={{fontWeight:"bold"}}>Description: </span>{props.item.description} <br/>
            <span style={{fontWeight:"bold"}}>Food Pairing: </span> {props.item.food_pairing}<br/>
            <span style={{fontWeight:"bold"}}>ABV: </span> {props.item.abv}<br/>
            <span style={{fontWeight:"bold"}}>IBU: </span> {props.item.ibu}<br/>
            <span style={{fontWeight:"bold"}}>Target fg: </span>{props.item.target_fg} <br/>
            <span style={{fontWeight:"bold"}}>Target og: </span> {props.item.target_og}<br/>
            <span style={{fontWeight:"bold"}}>EBC: </span> {props.item.ebc}<br/>
            <span style={{fontWeight:"bold"}}>SRM: </span> {props.item.srm}<br/>
            <span style={{fontWeight:"bold"}}>pH: </span>{props.item.ph} <br/>
            <span style={{fontWeight:"bold"}}>Attenuation Level: </span> {props.item.attenuation_level}<br/>
            <span style={{fontWeight:"bold"}}>Volume: </span> {props.item.volume.value} liters<br/>
            <span style={{fontWeight:"bold"}}>Boil Volume: </span> {props.item.boil_volume.value} liters<br/>
            <span style={{fontWeight:"bold"}}>Yeast: </span> {props.item.ingredients.yeast}<br/>
            <span style={{fontWeight:"bold"}}>Brewers Tip: </span> {props.item.brewers_tips}<br/>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
};
export default List;