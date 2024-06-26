import { useState,useCallback,useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow,setNumberAllow]=useState(false);
  const [charAllow,setCharAllow]=useState(false);
  const [Password,setPassword]=useState("");

  //useRef hook

  const passwordRef=useRef(null);



  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrstuvwxyz";

    if(numberAllow) str+='1234567890';
    if(charAllow) str+='{[!@#$%&*}{[]';

    for(let i=0;i<length;i++)
      {
        let char=Math.floor(Math.random()*str.length+1);
        pass+=str.charAt(char);
      }
      setPassword(pass);

  },[length,charAllow,numberAllow,setPassword]);

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllow,charAllow,passwordGenerator])
  

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20 )
      window.navigator.clipboard.writeText(Password)
  },[Password])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-1 text-orange-500 bg-gray-800 '>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex item-center space-x-0.5 rounded-lg overflow-hidden mb-4'>
        <input type='text'
        value={Password} 
        className='outline-none w-full py-1 px-3'
        placeholder='password' 
        readOnly
        ref={passwordRef}/>

        <button className='outline-none  bg-blue-700 text-white px-3  py-0.5  shrink-0' onClick={copyPasswordToClipboard}>Copy</button>

      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>

          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}} />
          <label>Length: {length}</label>


        </div>

        <div className='flex items-center gap-x-1'>
        <input type="checkbox"
          defaultChecked={numberAllow}
          id='numberinput'
          onChange={(e)=>{setNumberAllow((prev)=>!prev)}} />
          <label htmlFor='numberinput'>Numbers</label>
        </div>


        
        <div className='flex items-center gap-x-1'>
        <input type="checkbox"
          defaultChecked={charAllow}
          id='charinput'
          onChange={(e)=>{setCharAllow((prev)=>!prev)}} />
          <label htmlFor='charinput'>Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
