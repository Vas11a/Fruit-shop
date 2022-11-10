import React from 'react'
import heals from '../imgs/heals.png'

export default function Heals() {
    return (
        <article className="heals" id="heals">
            <div className="heals-img">
                <img src={heals} alt="" className="img-heals" />
            </div>

            <div className="heals-text">
                <div className="heals-title">Eat a banana for a healthy snack</div>
                <div className="heals-subtitle">You should eat at least five serves of vegetables and two serves of fruit each day. Choose different colours and
                    varieties.</div>
                <div className="heals-block">
                    <div className="heals-part">
                        <div className="part-numb">150+</div>
                        <div className="part-text">Global Franchises</div>
                    </div>
                    <div className="heals-part">
                        <div className="part-numb">97%</div>
                        <div className="part-text">Happy Customer</div>
                    </div>
                    <div className="heals-part">
                        <div className="part-numb">100%</div>
                        <div className="part-text">Orgnic Product</div>
                    </div>
                    <div className="heals-part">
                        <div className="part-numb">10M+</div>
                        <div className="part-text">Monthly Sales</div>
                    </div>
                </div>
            </div>
        </article>
    )
}
