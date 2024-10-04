export default function SingleMessage({messageContent, sender, time}) {
    return <div className={`${sender === 'Ammar'? 'bg-white' : 'bg-purple-500'} bg-opacity-15 mx-2 my-2 rounded-md`}>
        <div className='flex justify-between pt-1'>
            <div className='px-2'>{sender}</div>
            <div className='px-2 font-light'>{time}</div>

        </div>


        <div className='px-2 text-lg flex flex-wrap w-80'>{messageContent}
        </div>
    </div>
        }