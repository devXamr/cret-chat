
import FeatureLanding from './FeatureLanding.tsx'
import {useNavigate} from "react-router-dom";






export function Landing(){

    const navigate = useNavigate()

    function handleNav(Route: string){
        navigate(Route)
    }



    return <div className='overflow-scroll h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-purple-800'>
        <div className='font-logo text-purple-500'>Tempchat</div>
        <div className='text-white font-sans text-4xl text-center pr-5 pl-5 pt-44'>Say <span className='font-bold'>Goodbye</span> To Dead Groupchats</div>
        <div className=' mt-3 text-white font-light text-center w-80 mx-auto'>Create temporary groupchats on Tempchat that delete themselves after a fixed duration.</div>
        <div className='text-center px-3 py-2 bg-purple-700 bg-opacity-40 mx-auto w-max mt-4 rounded-xl text-white' onClick={()=> handleNav('/login')}>Get Started</div>



        <div className='mt-20'>
            <FeatureLanding featureDesc="All on the web - just share the code of your group chat, and you're ready to roll!" featureHeading='No Installation Required'/>
            <FeatureLanding featureHeading='Purpose Specific Groupchats' featureDesc='Perfect for one-time events, since they delete after the event finishes'/>
        </div>






    </div>
}