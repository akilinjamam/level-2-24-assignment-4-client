import {  Outlet, useLocation, useNavigate } from 'react-router-dom';
import dash from './Dashboard.module.css';
import { dashNav } from './dashNavigation';
import Modal from '../modal/Modal';
const Dashboard = () => {
    const navigation = useNavigate();
    const location = useLocation().pathname;

    return (

        <div className={`${dash.main} w-full h-[550px] flex relative`}>
           <section className="w-[20%] h-full bg-blue-100 p-3 leading-9 font-bold text-gray-500">
               {
                dashNav.map(nav => {
                    const active = (value:string) => {
                        return value === location ? 'text-purple-600 bg-blue-200 w-full text-left px-2' : 'text-gray-600 px-2'
                    }
                    return (
                        <p className=''>
                            <button className={`${active(nav.link)}`} onClick={() => navigation(`${nav.link}`) }>{nav.name}</button>
                        </p>
                    )
                })
               }
           </section>
           <section className="w-[80%] h-full bg-purple-50 p-3 ">
                <div className="w-full h-[50px] bg-purple-100 flex items-center justify-center font-bold text-gray-600 mb-3">
                    <p>DASHBOARD</p>
                </div>
                    <Outlet/>
                <div className='w-full h-[50px] bg-green-100 '>

                </div>
           </section>
           <Modal/>
        </div>
    );
};

export default Dashboard;