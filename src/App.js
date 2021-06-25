import './App.css';
import Card from './components/Card';
import { SEDAN, SUV, LUXURY } from './assets/images';
import { useState } from 'react';

function App() {
  
  const [cardDetails, setCardDetails] = useState({
    "sedan": {
      "name": "SEDAN",
      "icon": SEDAN,
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt non ipsa et ullam laudantium, quod iste commodi quia explicabo aliquid?"
    },
    "suv": {
      "name": "SUV",
      "icon": SUV,
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt non ipsa et ullam laudantium, quod iste commodi quia explicabo aliquid?"
    },
    "luxury": {
      "name": "LUXURY",
      "icon": LUXURY,
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt non ipsa et ullam laudantium, quod iste commodi quia explicabo aliquid?"
    }
  });

  console.log(cardDetails)

  return (
    <div className="app">
      <Card orange icon={cardDetails.sedan.icon} header={cardDetails.sedan.name} text={cardDetails.sedan.text} />
      <Card cyan icon={cardDetails.suv.icon} header={cardDetails.suv.name} text={cardDetails.suv.text} />
      <Card darkCyan icon={cardDetails.luxury.icon} header={cardDetails.luxury.name} text={cardDetails.luxury.text} />
    </div>
  );
}

export default App;
