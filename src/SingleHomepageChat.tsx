import { IoMdTimer } from "react-icons/io";
import {useNavigate} from "react-router-dom";

interface SingleChatBox {
    lastmessage? : string,
    groupName: string,
    duration: string,
    senderName?: string,
    navLocation: string


}
export default function SingleHomepageChat({lastmessage = '', groupName, duration, senderName = '', navLocation} : SingleChatBox) {
    const navigate = useNavigate()

    function handleNav (location) {
        navigate(`/chat/${location}`)
    }

    return <div className='bg-white bg-opacity-15 text-white mx-1 px-3 py-2 rounded-lg mt-1.5' onClick={() => handleNav(navLocation)}>
        <div className='text-xl font-semibold'>{groupName}</div>
        <div className='flex justify-between'>
            <div>{senderName}: {lastmessage.length > 20? lastmessage.slice(0,21) + '...' : lastmessage }</div>
            <div className='flex'>
                <IoMdTimer className='mt-0.5 pr-1 text-xl'/>
                <div>{duration + 'h'}</div>
            </div>

        </div>

    </div>
}