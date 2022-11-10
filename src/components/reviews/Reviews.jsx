import React from 'react'
import MyReview from './MyReview'
import Review from './Review'
import { useSelector, useDispatch } from 'react-redux'
import { fetchReview } from '../../redux/slices/reviewSlice'
import SkeletonR from './SkeletonR'

export default function Reviews() {
    const { reviews, status, isOpened } = useSelector((state) => state.reviews)
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchReview())
    }, [dispatch]) 
  return (
    <>
          <MyReview/>
          {isOpened && (
              <article className="otherrev rev-show">
                  <div className="otherrev-content">

                      {
                          status === 'loading' ? [1, 2, 3].map(elem => <SkeletonR key={elem} />) :
                              reviews.map(elem => <Review
                                  name={elem.name}
                                  text={elem.text}
                                  key={elem.id} />)
                      }
                  </div>
              </article>
          )}

    </>
  )
}
