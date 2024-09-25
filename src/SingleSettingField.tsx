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


            <div className='ml-3 text-white'>{fieldValue}</div>
        </div>

        {!isEditClicked && <FaRegEdit className='text-purple-500 mt-1' onClick={handleEditClick}/>}
        {isEditClicked && <IoMdCloseCircleOutline className='text-purple-500 mt-1' onClick={handleEditClick}/>}

    </div>
}