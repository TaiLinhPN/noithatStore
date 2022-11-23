import React from 'react'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Popup from '../components/Popup'

const HomeScreen = () => {
  return (
    <div>
        <Header/>
        <Popup/>
        <Content/>
        <Footer/>
    </div>
  )
}

export default HomeScreen