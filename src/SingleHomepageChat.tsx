import { IoMdTimer } from "react-icons/io";

interface SingleChatBox {
    lastmessage : string,
    groupName: string,
    duration: string,
    senderName: string

}
export default function SingleHomepageChat({lastmessage, groupName, duration, senderName} : SingleChatBox) {
    return <div className='bg-white bg-opacity-15 text-white mx-1 px-3 py-2 rounded-lg mt-1.5'>
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