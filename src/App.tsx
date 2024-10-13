import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Landing} from "./Landing.tsx";
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import Login from "./Login.tsx";
import SignIn from "./SignIn.tsx";
import HomePage, {getAllChats} from "./HomePage.tsx";
import Settings from "./Settings.tsx";
import SingleChatFullPage from "./SingleChatFullPage.tsx";

function App() {
  const [count, setCount] = useState(0)




    const [chatNames, setChatNames] = useState(getAllChats)

  return (
    <BrowserRouter>

        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/homepage' element={<HomePage/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/chat/:id' element={<SingleChatFullPage/>}/>
            <Route path='/trial' element={<SingleChatFullPage/>}/>



        </Routes>



    </BrowserRouter>
  )
}

export default App
