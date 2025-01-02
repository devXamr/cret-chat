import { CiSettings } from "react-icons/ci";
import { IoMdAddCircle } from "react-icons/io";
import SingleHomepageChat from "./SingleHomepageChat.tsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {MdOutlineCancel} from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import {getUsername} from "./SingleMessage.tsx";
import { RxCross1 } from "react-icons/rx";
import ModalButton from "./Components/ModalButton.tsx";

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
    return <div className='h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-purple-800 font-satoshi'>




        {number === 0 && <div className='fixed inset-0 backdrop-blur-sm bg-black bg-opacity-25'>
            <div className='relative top-1/3 bg-purple-500 bg-opacity-20 m-auto w-max text-center px-24 py-14 rounded-md transition'>
                <RxCross1 className='absolute top-4 right-4 text-2xl text-purple-700 hover:text-purple-500 hover:font-bold duration-150 ease-in-out hover:cursor-pointer'/>
                <div className='flex'>
                <div className='mt-3'>
                <ModalButton name='Join' value={1} changeFunc={pickNum}/>
                <div className='w-60 text-white mt-2 text-md text-center'>Join a chat using an invite code.</div>
                </div>
                    <div className='text-7xl mx-14 text-gray-600 font-light'>|</div>
                  <div className='mt-3'>
                      <ModalButton name='Create' value={2} changeFunc={pickNum}/>
                    <div className='w-60 text-white mt-2 text-md'>Create a new TempChat.</div>
                  </div>
                </div>
            </div>
        </div>
        }

        {number === 1 && <div className='fixed inset-0 backdrop-blur-sm bg-black bg-opacity-25'>
            <div className='relative top-1/3 bg-purple-500 bg-opacity-20 m-auto min-w-40 w-max px-4 pt-4 pb-8 rounded-md'>
                <div className='flex justify-between'>
                    <IoMdArrowRoundBack onClick={() => pickNum(0)} className='text-white text-2xl font-semibold mb-6'/>
                    <MdOutlineCancel onClick={() => pickNum(3)} className='text-white text-2xl font-semibold mb-6'/>
                </div>
                <div className='px-28'>
                <div className='text-2xl text-white font-semibold px-4 mb-5 mx-10 pl-2'>Join an existing room</div>
                <input placeholder='Enter chat code here' className='text-white outline-none w-full pr-4 pl-2 py-3 bg-purple-400 rounded-md bg-opacity-30 placeholder:text-white mt-3 mb-4' onChange={(e)=> setJoinId(e.target.value) } value={joinId}/>
                <ModalButton name='Submit'/>
                </div>
            </div>
        </div>}

        {number === 2 && <div className='fixed inset-0 backdrop-blur-sm bg-black bg-opacity-25'>
            <div className='relative top-1/3 bg-purple-500 bg-opacity-20 mx-auto w-max px-4 pt-4 pb-8 rounded-md'>
                <div className='flex justify-between'>
                    <IoMdArrowRoundBack onClick={() => pickNum(0)} className='text-white text-2xl font-semibold mb-6'/>
                    <MdOutlineCancel onClick={() => pickNum(3)} className='text-white text-2xl font-semibold mb-6'/>
                </div>

                <div className='px-16'>
                <div className='text-2xl text-white font-semibold text-center mx-28'>Create your own room</div>

                    <div className='font-semibold text-white mt-7'>Enter Room Name:</div>

                <input placeholder='eg. Goa Trip' onChange={(e) => {setRoomName(e.target.value)}} className='outline-0 pl-4 w-full rounded-md text-left py-3 bg-purple-400 bg-opacity-30 placeholder:text-white'/>


                <div className=' font-semibold text-white mt-7'>Generate room code:</div>
               <div className='flex'>
                   <div className='w-4/5 mr-2 bg-purple-400 bg-opacity-10 text-white py-2 text-center rounded'>The number will appear here</div>
                   <div className='w-1/5 bg-purple-600 hover:bg-purple-500 duration-100 text-white text-center font-medium py-2 rounded-md hover:cursor-pointer'>Generate</div>
               </div>

                <div className=' font-semibold text-white mt-3'>Enter room duration:</div>
                <input type='number' className='outline-0 pl-4 w-full rounded-md text-left py-3 bg-purple-400 bg-opacity-30 placeholder:text-white text-white' defaultValue={1} max={30} placeholder='Enter room duration'/>
                <div className='text-sm mt-3 mb-6 font-light text-white'>The room duration can range from 1 day to 30 days.</div>
                <ModalButton name='Submit' changeFunc={handleSubmit}/>


            </div>
            </div>
        </div>}


        <div className='bg-gray-900 w-1/4 rounded-t-xl pb-5 h-screen'>

            <div className='flex justify-between mx-5 text-purple-700 text-3xl pt-5 pb-2'>

                <CiSettings onClick={() => handleNav('settings')}/>
                <IoMdAddCircle onClick={() => pickNum(0)}/>
            </div>
            <div onClick={clearLocal}>del all</div>
            <div className='flex justify-between'>
            <div className='mx-auto text-purple-500 text-center font-semibold pt-5 text-xl'> All Chats</div>
            <div className='mx-auto text-purple-500 text-center font-semibold pt-5 text-xl'> Created By Me</div>
            </div>
            <div className='pt-5'>
                {allRooms.length > 0 && allRooms.map(eachRoom => <SingleHomepageChat duration={eachRoom.duration}
                                                                                     groupName={eachRoom.name}
                                                                                     navLocation={eachRoom.id}/>)}

            </div>


        </div>
    </div>
}