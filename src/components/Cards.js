import React from "react";
import CardDetails from "./CardDetails";

export default function Cards(props) {
    return (
        <div style={{display:'flex',justifyContent:'center',margin:'2rem'}}>
            <div style={{width:'90%',padding:'0.5rem',display:'flex',flexWrap:'wrap'}}>
                {
                    props.cardData.map(eachCard => {
                        return <CardDetails itemQty={props.itemQty} changeItemQty={props.changeItemQty} cardData={props.cardData} card={eachCard} changeSelectedCard={props.changeSelectedCard} selectedCard={props.selectedCard} changeCardCount={props.changeCardCount} cardCount={props.cardCount}/>
                    })  
                }
            </div>
        </div>
    )
}