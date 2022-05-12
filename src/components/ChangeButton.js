import React from 'react';

export default function ChangeButton(props) {

    const incrementQty = (card) => {
        const toUpdateQty = props.selectedCard;
        const updateQuantity=toUpdateQty.map(eachData => {
            if(eachData.cardInfo.name === card.name){
                eachData.quantity = props.itemQty + 1;
                return eachData
            }
            return eachData
        })
        props.changeSelectedCard(updateQuantity)
        console.log(props.selectedCard)
    }

    const decrementQty = (card) => {
        const toUpdateQty = props.selectedCard;
        const updateQuantity=toUpdateQty.map(eachData => {
            if(eachData.cardInfo.name === card.name){
                eachData.quantity = props.itemQty - 1;
                return eachData
            }
            return eachData
        })
        props.changeSelectedCard(updateQuantity)
        console.log(props.selectedCard)
    }

    return (
        <div style={{ border: '1px solid dodgerblue' }}>
            <button style={{ width: '25%', backgroundColor: 'dodgerblue', color: 'white', border: '1px solid dodgerblue' }} onClick={() => {
                if (props.itemQty > 1) {
                    props.changeItemQty(props.itemQty - 1)
                    decrementQty(props.cardToShow)
                }
            }}>-</button>
            <label style={{ width: '50%', textAlign: 'center', backgroundColor: 'white', color: 'dodgerblue' }}>{props.itemQty}</label>
            <button style={{ width: '25%', backgroundColor: 'dodgerblue', color: 'white', border: '1px solid dodgerblue' }} onClick={() => {
                props.changeItemQty(props.itemQty + 1)
                incrementQty(props.cardToShow)
            }}>+</button>
        </div>
    )
}