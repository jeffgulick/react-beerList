import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import BeerList from "./BeerList"

export default function App() {
  const [items, setItems] = useState({
    beers: []
  });
  useEffect(() => {
    const apiUrl = `https://api.punkapi.com/v2/beers`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((beers) => {
        setItems({ beers: beers });
      });
  }, );

  return (
    <Container fluid className="p-2">
      <Jumbotron>
       <h1 className="header">Welcome To My Beer Listing</h1>
          {items.beers.map(item => (
            <BeerList key = {item.id} item = {item} />
          ))}
      </Jumbotron>
    </Container>

  );
}

