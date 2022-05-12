import React, { useEffect, useState } from "react";
import './CardDetails.css';
import ChangeButton from "./ChangeButton";


export default function CardDetails(props) {
    const [convertedBut, changeConvVal] = useState(false);
    const [itemQty, changeItemQty] = useState(0);
    const [requestedCard, changeReqCard] = useState('');

    const showCards = (oneCard) => {
        changeItemQty(itemQty + 1)
        const userSelectedCard = props.selectedCard
        userSelectedCard.push({ cardInfo: oneCard, quantity: 1 })

        props.changeSelectedCard(userSelectedCard)
        props.changeCardCount(props.cardCount + 1)
    }

    return (
        <div style={{ margin: '1rem', width: '28%' }}>
            <img style={{ width: '100%' }} src={props.card.img_url} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }} className="p-1 font">
                <h6>{props.card.name}</h6>
                <div style={{ display: 'flex' }}>
                    <h6 style={{ marginRight: '8px', opacity: '0.5', textDecoration: 'line-through' }}>{props.card.original_price ? <span>${props.card.original_price}</span> : <span></span>}</h6>
                    <h6>${props.card.final_price}</h6>
                </div>
            </div>
            <div className="p-1 mb-1" style={{ fontSize: '14px' }}>{props.card.description}</div>
            {
                convertedBut ? <ChangeButton cardToShow={props.card} itemQty={itemQty} changeItemQty={changeItemQty} selectedCard={props.selectedCard} changeSelectedCard={props.changeSelectedCard} /> : <button style={{ width: '100%', border: '1px solid dodgerblue', borderRadius: '7%', backgroundColor: 'white', color: 'dodgerblue', fontWeight: 'bolder' }} onClick={() => {
                    showCards(props.card);
                    changeConvVal(true);
                }}>Add to Cart</button>
            }
        </div>
    )

}




