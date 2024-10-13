import SingleMessage, {getUsername} from "./SingleMessage.tsx";
import { MdSend } from "react-icons/md";
import {useEffect, useMemo, useState} from "react";
import io from 'socket.io-client'
import ScrollToBottom from 'react-scroll-to-bottom'
import {getAllChats} from "./HomePage.tsx";
import {useParams} from "react-router-dom";



export const socket = io('http://localhost:3001');
export default function SingleChatFullPage(){

    const [allMessages, setAllMessages] = useState([])
    const [currentMessage, setCurrentMessage] = useState('')
    const d = new Date()
    let username = getUsername()
    const {id} = useParams()
    const [allNames, setAllNames] = useState(getAllChats)
    function handleSend(e){
        e.preventDefault()
        socket.emit('send_message',{content: currentMessage, sender: username, time: d.getHours() +':' + d.getMinutes()} )
        setAllMessages(prev => [...prev, {content: currentMessage, sender: username, time: d.getHours() +':' + d.getMinutes()}])

    }

    useMemo(() => {
        socket.on('receive_message', (data)=>{
            console.log(data)
            setAllMessages(prev  => [...prev, data])
            console.log(allMessages)
        })
    }, [socket]);

    return <div className='h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-indigo-900 to-purple-800'>
        <div className='pt-3'>
            <div className='bg-black bg-opacity-25 text-white mx-2 rounded-xl'>
                <div className='font-bold text-xl px-3 pt-3'>default name</div>
                <div className='flex justify-between'>
                    <div className='px-3 font-light pt-1 pb-2'>view group details</div>
                    <div className='px-3 pt-1 font-light'>expires in 5h</div>
                </div>
            </div>
            <div className='bg-black bg-opacity-25 text-white mx-2 rounded-xl mt-4 py-2 h-screen'>




                <ScrollToBottom>
                { allMessages.length > 0 ? allMessages.map((eachMsg) => <SingleMessage messageContent={eachMsg.content} sender={eachMsg.sender} time={eachMsg.time}/>): 'no messages here, be the first to break the ice'}
                </ScrollToBottom>
            </div>



                 <form className='rounded-lg fixed bottom-16 w-full flex justify-between bg-white mx-auto' onSubmit={handleSend}>
                 <input className='w-full rounded-xl py-3 bg-white bg-opacity-25 font-bold px-2 text-gray-900' onChange={(e)=> {setCurrentMessage(e.target.value)}} value={currentMessage}/>
                 <MdSend className='text-2xl mt-3 ml-5 mr-2 text-purple-500' onClick={handleSend} type='submit'/>
                 </form>

        </div>




    </div>
}