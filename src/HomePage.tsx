import { CiSettings } from "react-icons/ci";
import { IoMdAddCircle } from "react-icons/io";

export default function HomePage(){

    return <div className='h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-purple-800'>


        <div className='flex justify-between mx-3 text-purple-700 text-3xl pt-5'>

            <CiSettings />
            <IoMdAddCircle/>
        </div>
    </div>
}