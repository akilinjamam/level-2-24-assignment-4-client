import keyboardPic from '../../images/showKeyboardTwo.jpg';

const ExtraTwo = () => {
    return (
        <div className="w-full h-[400px] bg-purple-50 rounded-lg my-6 flex items-center justify-between p-3">
            <section className="w-[43%] h-full bg-blue-50 flex items-center justify-center">
                <img style={{borderRadius:'10px'}} width={350} src={keyboardPic} alt="" />
            </section>
            <section className="w-[48%] h-full">
                <p className="text-gray-700 text-3xl font-bold my-6">Customizable options </p>
                <hr />
                <p className="text-gray-700 my-3">
                Mechanical keyboards offer a variety of customizable options, including the ability to choose different types of switches that vary in tactile feedback, actuation force, and sound. Users can also personalize keycaps with different colors, materials, and profiles, as well as customize RGB lighting to create unique lighting effects. Many mechanical keyboards support programmable macros and remapping keys, allowing for a tailored typing and gaming experience.
                </p>
            </section>
            
        </div>
    );
};

export default ExtraTwo;