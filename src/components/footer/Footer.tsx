import { navManuRoutes } from "../navbar/menuRoutes";
import { socialIcons } from "./socialIcons";
import footer from './Footer.module.css';

const Footer = () => {
    return (
        <div className={`${footer.main} w-full lg:h-[200px] sm:h-auto xsm:h-auto  bg-gray-100 p-3 flex justify-between items-center my-6 rounded-lg`}>
            <section className="lg:w-[350px]  xsm:w-[50%] sm:w-[50%] lg:h-full xsm:h-auto sm:h-auto">
                <p className="font-bold text-xl mb-3">All Navigations:</p>
                {
                    navManuRoutes.map(nav => {
                        return (
                            <p className="leading-7">{nav.name}</p>
                        )
                    })
                }
            </section>            
            <section className="w-[350px]  xsm:w-[50%] sm:w-[50%] lg:h-full xsm:h-auto sm:h-auto ">
                <p className="font-bold text-xl mb-3">Contact Info:</p>
                {
                    navManuRoutes?.slice(2,4).map((nav, index) => {
                        return (
                            <p key={index+1} className="leading-7">{nav.name}</p>
                        )
                    })
                }
            </section>            
            <section className="lg:w-[350px] lg:h-full sm:w-full xsm:w-full xsm:h-auto sm:h-auto xsm:my-6">
                {
                    socialIcons.map((icon, index) => {
                        return (
                            <span  key={index+1} className="mr-8 text-2xl">{icon.icon}</span>
                        )
                    })
                }
            </section>            
        </div>
    );
};

export default Footer;