import { navManuRoutes } from "../navbar/menuRoutes";
import { socialIcons } from "./socialIcons";


const Footer = () => {
    return (
        <div className="w-full h-[200px] bg-gray-100 p-3 flex justify-between items-center my-6 rounded-lg">
            <section className="w-[350px] h-full">
                <p className="font-bold text-xl mb-3">All Navigations:</p>
                {
                    navManuRoutes.map(nav => {
                        return (
                            <p className="leading-7">{nav.name}</p>
                        )
                    })
                }
            </section>            
            <section className="w-[350px] h-full ">
                <p className="font-bold text-xl mb-3">Contact Info:</p>
                {
                    navManuRoutes?.slice(2,4).map((nav, index) => {
                        return (
                            <p key={index+1} className="leading-7">{nav.name}</p>
                        )
                    })
                }
            </section>            
            <section className="w-[350px] h-full">
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