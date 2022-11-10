import React from 'react'
import str from '../../imgs/str.png'
import { useSelector, useDispatch } from 'react-redux'
import { changeMyRev, addMyRev, removeRev } from '../../redux/slices/reviewSlice'

export default function MyReview() {
    const { myReview } = useSelector((state) => state.reviews)
    const dispatch = useDispatch()
  return (
      <article className="review">
          <div className="content-review" id="rew">
              <div className="img-bloct-review">
                  <img src={str} alt="" className="rev-img" />
              </div>
              <div className="text-review">
                  <div className="title-review">Add your review</div>
                  <div className="sub-review">Vegetables are available in many varieties and can be classNameified into biological groups or ‘families’, including: gfdls</div>
                  <form action="" className="form">

                      <input type="text" 
                          onChange={(e) => dispatch(changeMyRev(e.target.value))}
                      name="revie" 
                      value={myReview}
                      placeholder="Enter you review" 
                      className="input-rev" />

                      <input
                          onClick={() => dispatch(addMyRev())} 
                        type="button" 
                        value="Send" 
                        className="button-rev" />
                      <input
                          onClick={() => dispatch(removeRev())}
                          type="button"
                          value="Remove"
                          className="button-rev" />
                  </form>
              </div>
          </div>
      </article>
  )
}
