import {  Outlet, useLocation, useNavigate } from 'react-router-dom';
import dash from './Dashboard.module.css';
import { dashNav } from './dashNavigation';
import Modal from '../modal/Modal';
import { barger } from '../../icons/icons';
import { useState } from 'react';
const Dashboard = () => {
    const navigation = useNavigate();
    const location = useLocation().pathname;

    const [view, setView] = useState(false);

    return (

        <div className={`${dash.main} w-full h-[550px] flex relative`}>
           <section className="lg:w-[20%]  h-full bg-blue-100 p-3 leading-9 font-bold text-gray-500 xsm:hidden sm:hidden lg:block ">
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
           <section className="lg:w-[80%] sm:w-full xsm:w-full h-full bg-purple-50 p-3 ">
                <div className="w-full h-[50px] bg-purple-100  lg:items-center lg:justify-center font-bold text-gray-600 mb-3 lg:flex xsm:flex sm:flex sm:items-center xsm:items-center sm:justify-between xsm:justify-between lg:px-0 xsm:px-2 sm:px-2 xsm:relative sm:relative lg:static">
                    <p>DASHBOARD</p>
                    <p onClick={() => setView(!view)} className='lg:hidden md:hidden cursor-pointer'>{barger}</p>
                    <div className={`${view ? 'block' : 'hidden'}  absolute top-14 right-5 w-[200px] h-[150px] bg-purple-200 rounded-lg p-3` }>
                    {
                            dashNav.map(nav => {
                                    const active = (value:string) => {
                                    return value === location ? 'text-purple-600 bg-blue-200 w-full text-left px-2' : 'text-gray-600 px-2'
                                    }
                                    return (
                                    <p className=''>
                                        <button className={`${active(nav.link)}`} onClick={() => {
                                             navigation(`${nav.link}`)
                                             setView(false)
                                        } }>{nav.name}</button>
                                    </p>
                                )
                            })
                    }        
                    </div>
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