import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToBac } from '../../redux/slices/basketSlice'

export default function Card({ price, img, name, id, description }) {
  const dispatch = useDispatch()
  const { itemCards } = useSelector((state) => state.card)
  function addBac() {
    dispatch(addToBac({ id, img, price, name, description, amount: 1 }))
  }
  let  amountR = 0
  itemCards.forEach(element => {
    if (element.id === id) {
      amountR = element.amount
    }
  });
  return (
      <div className='shop-item'>
      <img src={img} alt={name} className="img-fruit fruit8" />
          <div className="price">{price}$</div>
          <div 
            className="button button-green"
            onClick={addBac}
      >Buy now <strong style={amountStyle}>{amountR}</strong></div>
      </div>
  )
}

const amountStyle = {
  color : 'black',
  paddingLeft: '8px',
  fontSize: '14px'
}