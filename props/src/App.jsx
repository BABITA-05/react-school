import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      
      <Card user="Bijaya" age={20} img="https://images.unsplash.com/photo-1761839258044-e59f324b5a7f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" />
      <Card user="Asmita" age={17} img="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D" />
      
    </div>
  )
}

export default App
