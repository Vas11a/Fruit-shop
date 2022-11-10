import React from 'react'
import Header from '../components/Header'
import Heals from '../components/Heals'
import Propose from '../components/Propose'
import Cards from '../components/cards/Cards'
import Reviews from '../components/reviews/Reviews'
import Footer from '../components/Footer'

export default function Home() {
  return (
      <div className="wrapper">
          <Header/>
          <main className="main">
              <Heals/>
              <Propose/>
              <Cards/>
              <Reviews/>
          </main>
          <Footer rews='block'/>
      </div>
  )
}
