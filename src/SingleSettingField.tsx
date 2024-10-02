import {FaRegEdit} from "react-icons/fa";
import {useState} from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";


interface SettingField {
    fieldName: string
    fieldValue: string

}
export default function SingleSettingField({fieldName, fieldValue}: SettingField) {
    const [isEditClicked, setIsEditClicked] = useState(false)


    const handleEditClick = () => {
        setIsEditClicked(prev => !prev)
    }
    return <div className='flex justify-between px-3.5 py-6 text-xl'>
        <div className='flex font-semibold pl-5'>


            <div className='text-purple-500'>{fieldName + ':'}</div>


            {!isEditClicked && <div className='ml-3 text-white'>{fieldValue}</div>}
            {isEditClicked && <div>
                <input type='text' placeholder='Enter new value'
                       className='w-60 pr-4 pl-2 ml-2 py-1 rounded-md bg-white bg-opacity-30 placeholder:text-white placeholder:font-light'/>
                <div className='flex justify-between text-white'>
                    <div className='bg-purple-500 px-2 py-0.5 rounded-md mt-3 ml-2'>Save</div>
                    <div className='bg-purple-500 px-2 py-0.5 rounded-md mt-3 ml-2' onClick={()=> {setIsEditClicked(false)}}>Cancel</div>
                </div>
            </div>}
        </div>

        {!isEditClicked && <FaRegEdit className='text-purple-500 mt-1' onClick={handleEditClick}/>}
        {isEditClicked && <IoMdCloseCircleOutline className='text-purple-500 mt-1' onClick={handleEditClick}/>}

    </div>
}