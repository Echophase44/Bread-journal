import React from 'react'
import Navbar from './components/navbar'
import Card from './components/card'
import Data from './data'

function App() {
  const cardInfo = Data.map(info => {
    return <Card item = {info} />
  })
  return (
    <div className='app-container'>
      <Navbar />
      {cardInfo}
    </div>
  )
}

export default App;
