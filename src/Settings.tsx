import { FaRegEdit } from "react-icons/fa";
import SingleSettingField from "./SingleSettingField.tsx";

export default function Settings(){
    return <div className='h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-purple-800'>
        <div className='text-purple-500 text-2xl text-center font-semibold pt-10'>Settings</div>
        <div className='bg-gray-900 w-full rounded-xl pb-5 h-max mt-8'>
            <SingleSettingField fieldName='Name' fieldValue='Ammar'/>
            <SingleSettingField fieldName='Email' fieldValue='example@gmail.com'/>


        </div>
    </div>
}