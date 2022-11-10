import React from 'react'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'
import Form from '../components/basket/Form'
import { useSelector, useDispatch } from 'react-redux'
import FruitCartBlock from '../components/basket/FruitCartBlock'
import { clearBasket } from '../redux/slices/basketSlice'

export default function Basket() {
    const { totalPrice, itemCards } = useSelector((state) => state.card)
    const dispatch = useDispatch()
    return (
        <div className="wrapper-basket add-wrapper-basket">
            <article className="basket">
                <div className="basket-nav">
                    <div className="b-title">Basket</div>
                    <NavLink to='/'><input type="button" value="Close" className="button-basket close-bascet" /></NavLink>
                </div>
                {
                    itemCards.map((elem,idx) => <FruitCartBlock 
                        name={elem.name}
                        price={elem.price}
                        img={elem.img}
                        description={elem.description}
                        key={elem.id}
                        id={idx}
                        amount={elem.amount}
                        />)
                }
                <h1>Total price: {totalPrice}$</h1>
                <input
                onClick={() => dispatch(clearBasket())} 
                type="button" 
                value='Clear basket' 
                className="button-basket" /> 
                <Form/>
                
            </article>
            <Footer rews='none'/>
        </div>
    )
}
