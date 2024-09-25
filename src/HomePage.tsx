import { CiSettings } from "react-icons/ci";
import { IoMdAddCircle } from "react-icons/io";
import SingleHomepageChat from "./SingleHomepageChat.tsx";
import {useNavigate} from "react-router-dom";

export default function HomePage(){
    const navigate = useNavigate()
    function handleNav(){
        navigate('/settings')
    }

    return <div className='h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-purple-800'>


        <div className='flex justify-between mx-5 text-purple-700 text-3xl pt-5 pb-2'>

            <CiSettings onClick={handleNav}/>
            <IoMdAddCircle/>
        </div>
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