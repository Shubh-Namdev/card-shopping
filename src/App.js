import React, { useState } from 'react';
import Cards from './components/Cards';
import CartDetails from './components/CartDetails';
import Heading from './components/Heading';
import Navbar from './components/Navbar';
import { cardList } from './data';

export default function App() {
    const [cardData, setCard] = useState(cardList);
    const [selectedCard, changeSelectedCard] = useState([]);
    const [isCartClicked, changeToHome] = useState(false);
    const [cardCount, changeCardCount] = useState(0);

    return (
        <div style={{ display: 'flex', justifyContent: 'center',backgroundColor:'black',height:'1200px'}}>
            <div style={{ width: '60%',backgroundColor:'white' }}>
                <Navbar changeToHome={changeToHome} cardCount={cardCount}/>
                {
                    isCartClicked ? <CartDetails selectedCard={selectedCard} changeSelectedCard={changeSelectedCard} cardCount={cardCount} changeToHome={changeToHome}/>
                    :<div>
                        <Heading/>
                        <Cards cardData={cardData} changeSelectedCard={changeSelectedCard} selectedCard={selectedCard} changeCardCount={changeCardCount} cardCount={cardCount}/>
                    </div> 
                } 
            </div>
        </div>
    )
}