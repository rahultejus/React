import { useCallback, useEffect, useRef, useState } from "react";


function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passRef=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}[]/~`";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard=useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])  

   useEffect(()=>{
    passwordGenerator()
   },[length,numAllowed,charAllowed, passwordGenerator])
  return (
    <>
      <div className=" w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-slate-600">
        <h1 className="text-center text-3xl my-4">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text" 
          value={password}
          placeholder="password"
          className="outline-none w-full py-2 px-3"
          readOnly
          ref={passRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-600 px-3 text-lg hover:bg-green-500">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2 text-cyan-400 px-2 py-3">
          <div className="flex items-center gap-x-1 px-2">
             <input
              type="range" 
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e)=>{setLength(e.target.value)}}
              />
              <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1 px-2">
           <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={()=>{
              setNumAllowed((prev)=>!prev)
            }}
           />
           <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1 px-2">
           <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="numberInput"
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }}
           />
           <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
