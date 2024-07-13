import keyboardPic from '../../images/about.jpg'

const About = () => {
    return (
        <div className="w-full h-[500px] bg-purple-50 rounded-lg my-6 flex items-center justify-between p-3">
        <section className="w-[43%] h-full bg-blue-50 flex items-center justify-center">
            <img style={{borderRadius:'10px'}} width={350} src={keyboardPic} alt="" />
        </section>
        <section className="w-[48%] h-full">
            <p className="text-gray-700 text-3xl font-bold my-6">About Us </p>
            <hr />
            <p className="text-gray-700 my-3">
            The KeyCraft Elit mechanical keyboard is a premium device designed for both enthusiasts and professionals. Featuring high-quality, durable switches, it offers a responsive and satisfying typing experience. Its customizable RGB lighting allows users to personalize their setup with vibrant colors and effects. The keyboard is built with an aluminum frame for durability and a sleek, modern look. Additionally, it includes programmable keys and macros, making it a versatile tool for both gaming and productivity. The KeyCraft Elit combines performance, customization, and style, making it an excellent choice for anyone seeking a top-tier mechanical keyboard.
            </p>
        </section>
        
    </div>
    );
};

export default About;