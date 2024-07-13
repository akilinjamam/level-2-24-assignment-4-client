
import { ReactNode } from "react";
import Navbar from "../navbar/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
interface ILayoutProps {
    children: ReactNode;
  }

const Layout = ({children}:ILayoutProps) => {
    return (
        <div className={` w-[1200px] h-auto m-auto`}>
        <Navbar/>
        <ToastContainer/>
        {children}
        </div>
    );
};

export default Layout;