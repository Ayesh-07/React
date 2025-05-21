import React, { useCallback, useRef, useState } from 'react';
import { useEffect } from 'react';

const App = () => {

  const [length, setLength] = useState(6)
  const [numberAllowed, setAllowed] = useState(false)
   const [charAllowed, setCharAllowed] = useState(false)
      const [password, setPassword] = useState("")
      const passwordGenerator = useCallback(
        () => {
          let Pass = ""
          let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
          if(numberAllowed) str += "123456789"   
          if(charAllowed) str += "~!@#$%^&*(){}>?" 
          
          for (let index = 1; index < length; index++) {
          let char = Math.floor(Math.random()* str.length+1)
          Pass += str.charAt(char)  
          setPassword(Pass)
            
          }
        },[length , setPassword ,numberAllowed , charAllowed ]  )
        useEffect(() => {
          passwordGenerator()}, [length , passwordGenerator ,numberAllowed , charAllowed])
      


          const passwordRef = useRef(null)

          const CopyPasswordToClipboard = useCallback(
            () => {
              passwordRef.current?.select()
              passwordRef.current?.setSelectionRange(0,100);
              window.navigator.clipboard.writeText(password)
            },
            [password],
          )
          
  return (
    <>
      <div
        style={{
          background: '#046C4E',
          height: '100vh',
          margin: 0,
          display: 'flex',
          justifyContent: 'center', // center horizontally
          alignItems: 'center' // center vertically
        }}
      >
        <div
          style={{
            background: 'lightgray',
            height: 'auto',
            width: '700px',
            padding: '20px',
            border: 'solid darkgray 1px',
            borderRadius: '15px'
          }}
        >
          <div className='rounded-lg flex shadow mb-4 overflow-hidden'>
          <input type="text"
           value={password}  
           placeholder = "Password" 
          className='py-3 px-3 w-full'
          readOnly 
          ref={passwordRef} />


          <button 
          onClick={CopyPasswordToClipboard}
          
          className='text-white bg-emerald-800 px-10 py-0.5 shrink-0'>Copy</button>
          </div>
          
          <div className='flex text-xl py-7 text-emerald-800'>
            <div className='flex items-center gap-x-5'>
              <input type="range"
            min={6}
            max={100}
            value={length}
           onChange={(e) => setLength(e.target.value)}
           className="cursor-pointer w-64 accent-emerald-600"

            />
            <label>Length={length}</label>


            <input type="checkbox" 
            checked={numberAllowed}
             onChange={(e) => setAllowed(e.target.checked)}
             />
            <label >Numbers</label>


             <input type="checkbox" 
            checked={charAllowed}
             onChange={() => setCharAllowed((prev)=>!prev)}
             />
            <label >Characters</label>
            </div>
            
          </div>

        </div>
      </div>
    </>
  );
};

export default App;
