
import { ReactNode } from "react";
import Navbar from "../navbar/Navbar";

interface ILayoutProps {
    children: ReactNode;
  }

const Layout = ({children}:ILayoutProps) => {
    return (
        <div className={` w-[1200px] h-auto m-auto`}>
        <Navbar/>
        {children}
        </div>
    );
};

export default Layout;