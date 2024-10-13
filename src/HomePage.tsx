import { CiSettings } from "react-icons/ci";
import { IoMdAddCircle } from "react-icons/io";
import SingleHomepageChat from "./SingleHomepageChat.tsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {MdOutlineCancel} from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import {getUsername} from "./SingleMessage.tsx";

export function getAllChats(){
    const allChats = JSON.parse(localStorage.getItem('allChatNames'))
    if (!allChats) return []

    return allChats
}

export default function HomePage(){
    const navigate = useNavigate()
    const [modalOpen, setModalOpen] = useState(false)
    const [number, setNumber] = useState(3)

    const [allRooms, setAllRooms] = useState(getAllChats)
    const [roomName, setRoomName] = useState('')
    const [roomCode, setRoomCode] = useState('')
    const [currId, setCurrId] = useState(0)
    const [joinId, setJoinId] = useState('')
    let username = getUsername()

    function handleNav(nav){
        navigate(`/${nav}`)
    }

    function handleSubmit(){
        setAllRooms(prev => [...prev, {name: roomName, code: roomCode, duration: '5h', id: currId, members: [username]}])
        setCurrId(prev => prev + 1)
        setModalOpen(false)

    }

    function handleJoin(joinId){

        setAllRooms(prev => {
            const updatedRoom = [...prev]
                const chosenRoom = allRooms.findIndex(theRoom => theRoom.id === joinId)
            updatedRoom[chosenRoom] = {...updatedRoom[chosenRoom], members: [...updatedRoom[chosenRoom].members, username]}
            return updatedRoom
        }
        )

        setModalOpen(false)
    }

    function handleAdd(){
        setModalOpen(prev => !prev)
    }

    function pickNum(num : number){
        setNumber(num)

    }

    function clearLocal(){
        setAllRooms([])
    }

    useEffect(() => {
        localStorage.setItem('allChatNames', JSON.stringify(allRooms))
        console.log(allRooms)
    }, [allRooms]);
    return <div className='h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-purple-800'>


        <div className='flex justify-between mx-5 text-purple-700 text-3xl pt-5 pb-2'>
            <div onClick={clearLocal}>del all</div>

            <CiSettings onClick={() => handleNav('settings')}/>
            <IoMdAddCircle onClick={() => pickNum(0)}/>
        </div>

        {number === 0 && <div className='fixed inset-0 backdrop-blur-sm bg-black bg-opacity-25'>
            <div className='relative top-1/3 bg-white bg-opacity-25 m-auto w-max text-center px-28 py-10 rounded-md'>
                <div className='text-white font-semibold bg-purple-500 rounded-xl px-4 text-xl' onClick={()=> pickNum(1) }>Join</div>
                <div className='font-bold text-xl mt-5 mb-5 text-white'>X</div>
                <div className='text-white font-semibold bg-purple-500 rounded-xl px-4 text-xl' onClick={() => pickNum(2)}>Create</div>
            </div>
        </div>
        }

        {number === 1 && <div className='fixed inset-0 backdrop-blur-sm bg-black bg-opacity-25'>
            <div className='relative top-1/3 bg-white bg-opacity-25 m-auto min-w-40 w-max px-4 py-3 rounded-md'>
                <div className='flex justify-between'>
                    <IoMdArrowRoundBack onClick={() => pickNum(0)} className='text-white text-2xl font-semibold mb-6'/>
                    <MdOutlineCancel onClick={() => pickNum(3)} className='text-white text-2xl font-semibold mb-6'/>
                </div>
                <div className='text-xl text-white font-semibold px-4'>Join an existing room</div>
                <input placeholder='Enter chat code here' className='w-full pr-4 pl-2 py-1.5 rounded-sm bg-white bg-opacity-30 placeholder:text-white mt-3' onChange={(e)=> setJoinId(e.target.value) } value={joinId}/>
                <div className='text-center mt-3 text-white bg-purple-500 py-1 rounded-md' onClick={() => handleJoin(joinId)}> Submit </div>
            </div>
        </div>}

        {number === 2 && <div className='fixed inset-0 backdrop-blur-sm bg-black bg-opacity-25'>
            <div
                className='relative top-1/3 bg-white bg-opacity-25 m-auto min-w-40 max-w-80 w-max px-4 py-3 rounded-md'>
                <div className='flex justify-between'>
                    <IoMdArrowRoundBack onClick={() => pickNum(0)} className='text-white text-2xl font-semibold mb-6'/>
                    <MdOutlineCancel onClick={() => pickNum(3)} className='text-white text-2xl font-semibold mb-6'/>
                </div>
                <div className='text-xl text-white font-semibold px-4 text-center'>Create your own room</div>
                <div className=' font-semibold text-white mt-3'>Enter Room Name:</div>
                <input placeholder='eg. Goa Trip' onChange={(e) => {setRoomName(e.target.value)}}
                       className='w-full pr-4 pl-2 py-1.5 rounded-sm bg-white bg-opacity-30 placeholder:text-white'/>

                <div className=' font-semibold text-white mt-3'>Enter room code:</div>
                <input placeholder='eg. EW1968' onChange={(e) => {setRoomCode(e.target.value)}}
                       className='w-full pr-4 pl-2 py-1.5 rounded-sm bg-white bg-opacity-30 placeholder:text-white'/>

                <div className=' font-semibold text-white mt-3'>Enter room duration:</div>
                <input type='number' className='w-full pr-4 pl-2 py-1.5 rounded-sm bg-white bg-opacity-30 placeholder:text-white' placeholder='Enter room duration'/>
                <div className='text-sm mt-2 font-light text-white'>The room duration can range from 1 day to 30 days.</div>
                <div className='text-center mt-3 text-white bg-purple-500 py-1 rounded-md' onClick={handleSubmit}> Submit</div>


            </div>
        </div>}


        <div className='bg-gray-900 w-full mt-3 rounded-t-xl pb-5 h-screen'>

            <div className='text-purple-500 text-center font-semibold pt-5 text-xl'> All Chats</div>
            <div className='pt-5'>
                {allRooms.length > 0 && allRooms.map(eachRoom => <SingleHomepageChat duration={eachRoom.duration} groupName={eachRoom.name} navLocation={eachRoom.id}/>)}

            </div>



        </div>
    </div>
}