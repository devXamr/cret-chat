import { CiSettings } from "react-icons/ci";
import { IoMdAddCircle } from "react-icons/io";
import SingleHomepageChat from "./SingleHomepageChat.tsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function HomePage(){
    const navigate = useNavigate()
    const [modalOpen, setModalOpen] = useState(false)
    function handleNav(){
        navigate('/settings')
    }

    function handleAdd(){
        setModalOpen(prev => !prev)
    }

    return <div className='h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-purple-800'>


        <div className='flex justify-between mx-5 text-purple-700 text-3xl pt-5 pb-2'>

            <CiSettings onClick={handleNav}/>
            <IoMdAddCircle onClick={handleAdd}/>
        </div>

        {modalOpen && <div className='fixed inset-0 backdrop-blur-sm bg-black bg-opacity-25'>
            <div className='relative top-1/3 bg-purple-500 m-auto w-max text-center px-28 py-10 rounded-md'>
                <div className='text-white font-semibold border rounded-xl px-4 text-xl'>Join Chat</div>
                <div className='font-bold text-xl mt-5 mb-5'>OR</div>
                <div className='text-white font-semibold border  rounded-xl px-4 text-xl'>Create Chat</div>
            </div>
        </div>
        }
        <div className='bg-gray-900 w-full mt-3 rounded-t-xl pb-5 h-screen'>

            <div className='text-purple-500 text-center font-semibold pt-5 text-xl'> All Chats</div>
            <div className='pt-5'>
                <SingleHomepageChat lastmessage='Hey guys, next week we are all going to celebrate my birthday' duration='13' groupName='Freshers Party 2024' senderName='Ramesh'/>
                <SingleHomepageChat lastmessage='Hey guys, next week we are all going to celebrate my birthday' duration='13' groupName='Freshers Party 2024' senderName='Ramesh'/>
                <SingleHomepageChat lastmessage='Hey guys, next week we are all going to celebrate my birthday' duration='13' groupName='Freshers Party 2024' senderName='Ramesh'/>
                <SingleHomepageChat lastmessage='Hey guys, next week we are all going to celebrate my birthday' duration='13' groupName='Freshers Party 2024' senderName='Ramesh'/>
                <SingleHomepageChat lastmessage='Hey guys, next week we are all going to celebrate my birthday' duration='13' groupName='Freshers Party 2024' senderName='Ramesh'/>
                <SingleHomepageChat lastmessage='Hey guys, next week we are all going to celebrate my birthday' duration='13' groupName='Freshers Party 2024' senderName='Ramesh'/>
                <SingleHomepageChat lastmessage='Hey guys, next week we are all going to celebrate my birthday' duration='13' groupName='Freshers Party 2024' senderName='Ramesh'/>
            </div>


        </div>
    </div>
}