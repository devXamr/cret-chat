import {useNavigate} from "react-router-dom";

export default function Login(){
    const navigate = useNavigate()
    function handleNav(nav: string){
        navigate(nav)
    }
    return <div className='h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-purple-800'>
        <div className='pt-44'>


        <div className='w-max mr-auto ml-auto bg-white bg-opacity-10 px-5 py-5 rounded-lg'>
            <div className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 text-center text-2xl'>Welcome Back</div>


                <div className='text-white mt-3'>Email</div>
                <input type='text' placeholder='Enter your email' className='px-3 py-2 rounded-lg bg-white bg-opacity-20'/>



            <div className='text-white mt-3'>Password</div>
            <input type='text' placeholder='Enter yout password' className='px-3 py-2 rounded-lg bg-white bg-opacity-20'/>

            <div className='text-center px-3 py-2 bg-purple-700 bg-opacity-40 mx-auto w-max mt-4 rounded-xl text-white'
                 onClick={() => handleNav('/homepage')}
            >Log In
            </div>
            <div className='text-white font-light text-sm text-center mt-3'>Don't have an account? <span className='underline text-blue-300' onClick={() => handleNav('/signin')}>Sign Up</span></div>
        </div>
        </div>
    </div>
}