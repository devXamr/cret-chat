export default function ModalButton({changeFunc, name, value}) {
    return <div
        className='text-white text-center hover:bg-purple-500 bg-purple-600 duration-200 hover:cursor-pointer rounded-xl px-4 py-3 font-bold text-xl w-60 mx-auto'
        onClick={() => changeFunc(value)}>{name}</div>

}