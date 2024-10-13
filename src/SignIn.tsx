import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function SignIn() {
    const [username, setUsername] = useState('')
    const navigate = useNavigate()
    function handleNav(nav: string){
        navigate(nav)
    }

    async function  handleClick(){
        await localStorage.setItem('username', JSON.stringify(username))
        handleNav('/homepage')
        await console.log(JSON.parse(localStorage.getItem('username')))
    }

    return <div className='h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-purple-800'>
        <div className='pt-24'>


            <div className='w-max mr-auto ml-auto bg-white bg-opacity-10 px-5 py-5 rounded-lg'>
                <div
                    className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 text-center text-2xl'>Welcome

                </div>

                <div className='text-white mt-3'>Username</div>
                <input type='text' placeholder='Enter your name'
                       className='px-3 py-2 rounded-lg bg-white bg-opacity-20' onChange={(e) => setUsername(e.target.value)} value={username}/>


                <div className='text-white mt-3'>Email</div>
                <input type='text' placeholder='Enter your email'
                       className='px-3 py-2 rounded-lg bg-white bg-opacity-20'/>


                <div className='text-white mt-3'>Set Your Password</div>
                <input type='text' placeholder='Enter yout password'
                       className='px-3 py-2 rounded-lg bg-white bg-opacity-20'/>

                <div className='text-white mt-3'>Confirm Password</div>
                <input type='text' placeholder='Enter yout password'
                       className='px-3 py-2 rounded-lg bg-white bg-opacity-20'/>


                <div
                    className='text-center px-3 py-2 bg-purple-700 bg-opacity-40 mx-auto w-max mt-4 rounded-xl text-white'
                    onClick={handleClick}


                >Sign Up

                </div>
                <div className='text-white font-light text-sm text-center mt-3'>Already have an account? <span
                    className='underline text-blue-300' onClick={() => handleNav('/login')}>Log In</span></div>
            </div>
        </div>
    </div>
}