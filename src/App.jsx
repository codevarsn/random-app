import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <div className="App">
      <div className='card'>
      <Card />
      </div>
    </div>
  )
}

export default App
