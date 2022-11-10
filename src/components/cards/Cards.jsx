import React from 'react'
import Card from './Card'
import { useSelector, useDispatch } from 'react-redux'
import Skeleton from './Skeleton';
import {fetchItems } from '../../redux/slices/itemsSlice';


export default function Cards() {
    const { items , status} = useSelector((state) => state.items);
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchItems())
    }, [dispatch])

    return (
        <article className="shoplist">
            <div className="shop-container" >
                {
                    status === 'loading' ? [1, 2, 3, 4, 5, 6].map(elem => 
                        <Skeleton key={elem}/>):
                    items.map((elem, idx) => <Card 
                    key={idx}
                    price={elem.price}
                    img={elem.imageUrl}
                    name={elem.name}
                    id={elem.id}
                    description={elem.description}
                    />)
                }
            </div>
        </article>
    )
}
