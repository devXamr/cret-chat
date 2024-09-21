export default function FeatureLanding({featureHeading, featureDesc}) {

    return <div className='bg-white bg-opacity-10 mx-5 px-3 py-2 rounded-xl mt-7 mb-6 '>

        <div className='font-semibold bold text-white text-3xl'>{featureHeading}</div>
        <div className='mt-4 text-lg text-white'>
            {featureDesc}
        </div>
    </div>
}