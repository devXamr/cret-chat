import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Landing} from "./Landing.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Login.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/login' element={<Login/>}/>


        </Routes>



    </BrowserRouter>
  )
}

export default App
