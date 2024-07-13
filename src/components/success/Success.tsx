import success from '../../images/success.png'

const Success = () => {
    return (
        <div className='w-full h-[500px] bg-purple-50 flex items-center justify-center'>
            <div>
                <img width={600} src={success} alt="" />
                <p className='text-center text-3xl text-blue-500 font-bold'>Your Product will be Delivered on Time!</p>
            </div>
        </div>
    );
};

export default Success;