import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { sentData } from '../../redux/slices/formSendSlice';

export default function Form() {
  const dispatch = useDispatch()
  const { totalPrice, itemCards } = useSelector((state) => state.card)

  const {
    register,
    formState: {errors,},
    handleSubmit,
  } = useForm({
    mode: 'onSubmit'
  });

  const onSubmit = (data) => {
    if (totalPrice === 0) return
    dispatch(sentData([JSON.stringify(data), itemCards, totalPrice]))
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-send">
      <div className="form-send-text">Fill the form</div>
      <input 
      className="send-input email"
      type='email' 
      placeholder="Enter email" 
      {...register('email', {
        required: 'Enter email !',
        minLength: {
          value: 3,
          message: 'email is short'
        }
      })}
      />
      <div style={sErr}>{errors?.email && errors.email.message}</div>

      <input 
      type="tel" 
      className="send-input tel" 
      placeholder="Enter phone" 
        {...register('phone', {
          required: 'Enter phone !',
          minLength: {
            value: 10,
            message: 'number is short'
          },
          pattern: {
            value: /[0-9]{10}/,
            message: 'enter just a number'
          }
        })}
      />
      <div style={sErr}>{errors?.phone && errors.phone.message}</div>

      <input 
      type="text" 
      className="send-input city" 
      placeholder="Enter city" 
        {...register('city', {
          required: 'Enter city !',
          minLength: {
            value: 3,
            message: ' enter correct city'
          }
        })}
      />
      <div style={sErr}>{errors?.city && errors.city.message}</div>

      <input 
      type="text" 
      className="send-input post" 
      placeholder="Enter post" 
        {...register('post', {
          required: 'Enter post adress !',
          pattern: {
            value: /[0-9]/,
            message: 'enter just a number'
          }
        })}
      />
      <div style={sErr}>{errors?.post && errors.post.message}</div>

        <input style={{cursor: 'pointer'}} readOnly type="submit" value="Send" className="button-send sent" />
      </form>
  )
}


const sErr = {
  fontSize: '14px',
  color: 'red',
  marginTop: '-10px',
  marginBottom: '-10px'
}