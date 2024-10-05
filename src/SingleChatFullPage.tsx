import SingleMessage from "./SingleMessage.tsx";
import { MdSend } from "react-icons/md";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;

export default function SingleChatFullPage(){
    return <div className='h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-indigo-900 to-purple-800'>
        <div className='pt-3'>
            <div className='bg-black bg-opacity-25 text-white mx-2 rounded-xl'>
                <div className='font-bold text-xl px-3 pt-3'>Birthday 2025</div>
                <div className='flex justify-between'>
                    <div className='px-3 font-light pt-1 pb-2'>view group details</div>
                    <div className='px-3 pt-1 font-light'>expires in 23h</div>
                </div>
            </div>
            <div className='bg-black bg-opacity-25 text-white mx-2 rounded-xl mt-4 py-2 h-screen'>
                <div className='bg-black w-max mx-auto bg-opacity-50 px-2'>12/9/23</div>
                <div className='bg-purple-500 bg-opacity-15 mx-2 my-2 rounded-md'>
                    <div className='flex justify-between pt-1'>
                        <div className='px-2'>Ramesh</div>
                        <div className='px-2 font-light'>5:13 pm</div>
                    </div>
                    <div className='px-2 text-lg flex flex-wrap w-80'>Hey guys, next week we are all going to celebrate my birthday
                    </div>
                </div>
                <SingleMessage messageContent="sure, I'll be there for sure" sender='Ammar' time='5:21 pm'/>
                <SingleMessage messageContent="me too" sender='Kiki' time='5:21 pm'/>
                <SingleMessage messageContent="well then, count me in as well" sender='Minku' time='5:21 pm'/>
            </div>



                 <form className='rounded-lg fixed bottom-16 w-full flex justify-between bg-white mx-auto'>
                 <input className='w-full rounded-xl py-3 bg-white bg-opacity-25 font-bold px-2 text-gray-900'/>
                 <MdSend className='text-2xl mt-3 ml-5 mr-2 text-purple-500' type='submit'/>
                 </form>

        </div>




    </div>
}