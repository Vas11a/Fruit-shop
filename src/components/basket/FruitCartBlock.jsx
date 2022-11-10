import React from 'react'
import { useDispatch } from 'react-redux'
import { plusAmount, minusAmount, removeOne } from '../../redux/slices/basketSlice'

export default function FruitCartBlock({ name, description, price, img, amount, id }) {
    const dispatch = useDispatch()
    function plusAM() {
        dispatch(plusAmount(id))
    }
    function minusAM() {
        if (amount < 2) return
        dispatch(minusAmount(id))
    }
  return (
      <div className="basket-block add-basket">
          <div className="img-block-basket">
              <img src={img} alt="" className="im-basket" />
          </div>

          <div className="block-basket-text">
              <div className="bb-title">{name}</div>
              <div className="bb-subtitle">{description}</div>
              <div className="bb-price">{price}$</div>
              <div className="for-b-text">Enter amount</div>
              <div  style={formStyle}>
                <span 
                onClick={plusAM}
                style={plusMinus}>+</span>
                <span style={amountStyle}>{amount}</span>
                <span 
                onClick={minusAM}
                style={plusMinus}>-</span>
                  
              </div>
              <button 
              className="delete-prod"
              onClick={() => dispatch(removeOne(id))}
              >x</button>
          </div>
      </div>
  )
}

const plusMinus = {
    fontSize: '18px',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#1AD32A',
    cursor: 'pointer'
}

const amountStyle = {
    fontSize:'20px'
}

const formStyle = {
    display: 'flex',
    gap: '5px',
    alignItems: 'center',
    margin: '0 auto'
}