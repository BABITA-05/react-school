import React from 'react'
import Card from './components/Card'
import User from './components/User'


const App = () => {
  const arr = [1,2,3,4];
  return (
    <div className="parent">
      {arr.map(function(ele){
        return ele
      })}
      
    </div>
  )
}

export default App