import { Container, Row, Col } from "react-bootstrap";
import { BiArrowBack } from 'react-icons/bi';
import './CartDetails.css';


export default function CartDetails(props) {
    if (props.selectedCard.length === 0) {
        return <h3>Your cart is Empty</h3>
    }

    const totalPriceToPay = () => {
        let toPay = 0;
        for (let i = 0; i < props.selectedCard.length; i++) {
            toPay += props.selectedCard[i].cardInfo.final_price;
        }
        return toPay
    }

    const decrementQty = (eachCard) => {
        const toUpdateQty = props.selectedCard;
        const updateQuantity=toUpdateQty.map(eachData => {
            if(eachData.cardInfo.name === eachCard.cardInfo.name){
                eachData.quantity = eachData.quantity -1 ;
                return eachData
            }
            return eachData
        })
        props.changeSelectedCard(updateQuantity);
    }

    const incrementQty = (eachCard) => {
        const toUpdateQty = props.selectedCard;
        const updateQuantity=toUpdateQty.map(eachData => {
            if(eachData.cardInfo.name === eachCard.cardInfo.name){
                eachData.quantity = eachData.quantity + 1;
                return eachData
            }
            return eachData
        })
        props.changeSelectedCard(updateQuantity)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }} className="bg-white">
            <Container style={{ width: '80%' }} className="mt-4 p-2">
                <Row>
                    <Col className="hove1" style={{ fontSize: '12px', marginBottom: '1rem' }} onClick={() => {
                        props.changeToHome(false);
                    }}><BiArrowBack /> Back to home</Col>
                </Row>
                <Row>
                    <Col><h6>{`Order Summary (${props.cardCount}  Items)`}</h6></Col>
                </Row>
                <Row >
                    <Col className="m-3 border border-light border-3">
                        <Row>
                            <Col>
                                <div className="bord">
                                    <div>
                                        <div style={{ display: 'flex', justifyContent: 'space-around' }} className="bord mt-3">
                                            <div>S.No</div>
                                            <div>Items</div>
                                            <div style={{width:'30%'}}>Qty</div>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        {
                                            props.selectedCard.map((eachCard, index) => {
                                                return <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: "1rem" }}>
                                                    <div>{index + 1}</div>
                                                    <div>{eachCard.cardInfo.name}</div>
                                                    <div style={{ border: '1px solid dodgerblue',display:'flex',width:'30%'}}>
                                                        <button style={{ width: '30%', backgroundColor:'black', color: 'white', border: '1px solid dodgerblue',textAlign:'center'}} onClick={() => {
                                                            if (eachCard.quantity > 1) {
                                                                decrementQty(eachCard)
                                                            }
                                                        }}>-</button>
                                                        <label style={{ width: '50%', textAlign: 'center', backgroundColor: 'white', color: 'dodgerblue' }}>{eachCard.quantity}</label>
                                                        <button style={{ width: '30%', backgroundColor: 'black', color: 'white', border: '1px solid dodgerblue',textAlign:'center'}} onClick={() => {
                                                            incrementQty(eachCard)
                                                        }}>+</button>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="container m-4 hove1 text-success" onClick={() => {
                                props.changeToHome(false);
                            }}>Add other item</Col>
                        </Row>
                    </Col>

                    <Col className="m-3 price_details border border-light border-2">
                        <Row>
                            <Col className="m-3 bord">Price details</Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="bord">
                                    {
                                        props.selectedCard.map(eachData => {
                                            return <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem', marginBottom: '1rem' }}>
                                                <div>
                                                    {eachData.quantity} x $ {eachData.cardInfo.final_price}
                                                </div>
                                                <div>
                                                    {eachData.quantity * eachData.cardInfo.final_price}
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="bord">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem' }}>
                                        <div>Total discount</div>
                                        <div>$7</div>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem' }}>
                                        <div>Delivery Charges</div>
                                        <div>$5</div>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem' }}>
                                        <div>Taxes</div>
                                        <div>$2</div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem', marginBottom: '2rem' }}>
                                    <div>To pay</div>
                                    <div>{totalPriceToPay()}</div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <button style={{ width: '75%', backgroundColor: 'darkblue', color: 'white', fontVariant: 'all-small-caps', fontWeight: 'bolder', textAlign: 'center' }}>Place Order</button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}