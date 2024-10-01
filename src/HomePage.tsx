import { CiSettings } from "react-icons/ci";
import { IoMdAddCircle } from "react-icons/io";
import SingleHomepageChat from "./SingleHomepageChat.tsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {MdOutlineCancel} from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function HomePage(){
    const navigate = useNavigate()
    const [modalOpen, setModalOpen] = useState(false)
    const [number, setNumber] = useState(3)
    function handleNav(){
        navigate('/settings')
    }

    function handleAdd(){
        setModalOpen(prev => !prev)
    }

    function pickNum(num : number){
        setNumber(num)
    }
    return <div className='h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-purple-800'>


        <div className='flex justify-between mx-5 text-purple-700 text-3xl pt-5 pb-2'>

            <CiSettings onClick={handleNav}/>
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
                <input placeholder='Enter chat code here' className='w-full pr-4 pl-2 py-1.5 rounded-sm bg-white bg-opacity-30 placeholder:text-white mt-3'/>
                <div className='text-center mt-3 text-white bg-purple-500 py-1 rounded-md'> Submit </div>
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
                <div>Enter Room Name:</div>
                <input placeholder='eg. Goa Trip'
                       className='w-full pr-4 pl-2 py-1.5 rounded-sm bg-white bg-opacity-30 placeholder:text-white mt-3'/>

                <div>Enter room code:</div>
                <input placeholder='eg. EW1968'
                       className='w-full pr-4 pl-2 py-1.5 rounded-sm bg-white bg-opacity-30 placeholder:text-white mt-3'/>

                <div>Enter room duration:</div>
                <input type='number' className='w-full pr-4 pl-2 py-1.5 rounded-sm bg-white bg-opacity-30 placeholder:text-white mt-3' placeholder='Enter room duration'/>
                <div className='text-center mt-3 text-white bg-purple-500 py-1 rounded-md'> Submit</div>


            </div>
        </div>}


        <div className='bg-gray-900 w-full mt-3 rounded-t-xl pb-5 h-screen'>

            <div className='text-purple-500 text-center font-semibold pt-5 text-xl'> All Chats</div>
            <div className='pt-5'>
                <SingleHomepageChat lastmessage='Hey guys, next week we are all going to celebrate my birthday'
                                    duration='13' groupName='Birthday 2025' senderName='Ramesh'/>

            </div>


        </div>
    </div>
}