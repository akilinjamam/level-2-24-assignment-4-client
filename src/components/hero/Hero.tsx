import hero from './Hero.module.css';
import heroImg from '../../images/jon-spectacle--Jrmmm_sbtA-unsplash.jpg';
import { Typewriter } from 'react-simple-typewriter'
import { world } from '../../icons/icons';
const Hero = () => {
    return (
        <div className={`${hero.main} w-full h-[545px] my-6 bg-purple-50 rounded-lg flex items-center justify-between`}>
           <section className="w-[620px] h-full  p-3">
                <div className='w-[85%] h-full  rounded-lg '>
                    <p className={`${hero.gradiantText} text-3xl font-bold my-10`}>WELCOME TO <span className='text-green-400'>KEYCRAFT ELIT</span></p>
                    <p className='text-xl font-bold mb-10 text-gray-500'>
                        <Typewriter
                        words={['Master Your Typing', 'with Elite Mechanical Keyboards!']}
                        loop={true}
                        cursor
                        cursorStyle='_'
                        typeSpeed={30}
                        deleteSpeed={30}
                        delaySpeed={3000}
                    />
                    </p>
                    <p className='text-gray-500 mb-10 leading-7'>
                    Discover the perfect blend of precision, style, and durability with our top-notch mechanical keyboards. Elevate your typing and gaming experience to the next level with our expertly crafted keyboards designed for enthusiasts and professionals alike. Unleash your potential with the ultimate in tactile feedback and customization.
                    </p>
                    <button className='w-[110px] bg-purple-600 text-white font-bold px-3 py-2 rounded-lg hover:bg-purple-700 flex items-center justify-between'>{world} Discover</button>
                </div>
           </section>
           <section className="w-[420px] h-full -100 flex items-center justify-center">
                <img className='rounded-lg' width={400} src={heroImg} alt="" />
           </section>
        </div>
    );
};

export default Hero;