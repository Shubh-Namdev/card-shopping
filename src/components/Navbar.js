import React from "react";
import "./Navbar.css";
import {AiOutlineShoppingCart} from 'react-icons/ai';

export default function Navbar(props) {
    return (
        <div className="nav-container">
            <div className="each-item">
                <img style={{ padding: '0.5rem',height:'50px',width:'50px'}} src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg" alt="Happay" />
                <h6 style={{ marginLeft: '3px',color:'dodgerblue'}}>Happay</h6>
            </div>
            <div className="each-item">
                <div style={{display:'flex'}}>
                    <div className="hove" onClick={() => {
                        props.changeToHome(true)
                    }}><AiOutlineShoppingCart/></div>
                    <div>{props.cardCount}</div>
                </div>
                <div style={{ marginLeft: '1rem', marginRight: '1.5rem' }}>Shubham</div>
            </div>
        </div>
    )
}