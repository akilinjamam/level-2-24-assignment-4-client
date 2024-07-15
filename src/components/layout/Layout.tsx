
import { ReactNode } from "react";
import Navbar from "../navbar/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
interface ILayoutProps {
    children: ReactNode;
  }

const Layout = ({children}:ILayoutProps) => {
    return (
        <div className={` lg:w-[1200px] md:w-full sm:w-full xsm:w-full px-3 h-auto m-auto`}>
        <Navbar/>
        <ToastContainer/>
        {children}
        </div>
    );
};

export default Layout;