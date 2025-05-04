import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  let addCount = ()=>{
    if (counter < 20){
      setCounter(counter+1)
    }else{
      setCounter(0)
    }
  }

  let removeCount = ()=>{
    if (counter >  0){
      setCounter(counter-1)
    }else{
      setCounter(0)
    }
  }

  return (
    <>
   <h1> Ayesha Nudrat | My Counter is : {counter}</h1>
   <button onClick={addCount}>Add Count</button> <br /><br/>
   <button onClick={removeCount}>Remove Count</button>
    </>
  )
}

export default App
