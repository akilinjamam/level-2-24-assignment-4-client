import keyboardPic from '../../images/showKeyboard.jpg'

const Extra = () => {
    return (
        <div className="w-full h-[400px] bg-purple-50 rounded-lg my-6 flex items-center justify-between p-3">
            <section className="w-[48%] h-full">
                <p className="text-gray-700 text-3xl font-bold my-6">Why Choose Mechanical Keyboards?</p>
                <hr />
                <p className="text-gray-700 my-3">
                Mechanical keyboards offer several advantages over traditional membrane keyboards, making them a popular choice among typists, gamers, and professionals. Here are a few reasons why you might consider switching to a mechanical keyboard:
                </p>
               
                <p className="text-gray-700 my-3">
                Enhanced Durability: Mechanical keyboards are built to last. Each key switch is tested for millions of keystrokes, ensuring longevity and reliable performance even with heavy use.
                </p>
            </section>
            <section className="w-[43%] h-full bg-blue-50 flex items-center justify-center">
                <img style={{borderRadius:'10px'}} width={350} src={keyboardPic} alt="" />
            </section>
        </div>
    );
};

export default Extra;