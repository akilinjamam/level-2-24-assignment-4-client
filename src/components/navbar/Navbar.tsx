import { NavLink, useLocation } from 'react-router-dom';
import { navManuRoutes, TNav } from './menuRoutes';
import nav from './Navbar.module.css';
import keyboard from '../../images/keyboard.png'
import { barger, cart } from '../../icons/icons';
import { useAppSelector } from '../redux/hooks';
import { useState } from 'react';

const Navbar = () => {
    const location = useLocation().pathname;
    const [view, setView] = useState(false)

    const {product} = useAppSelector((state) => state.product)

    return (
        <div className={`${nav.main} w-[100%] h-12 my-6 rounded-2xl flex items-center`}>
            <nav className='w-[100%] h-[50%] m-auto flex items-center justify-between xsm:hidden sm:hidden md:hidden lg:flex'>
               
                <section className='w-[260px] flex items-center justify-between'>
                    <NavLink to='/'>
                        <img width={100} src={keyboard} alt="" />
                    </NavLink>
                    <NavLink to='/'>
                        <span className='text-2xl font-bold text-purple-600'>KeyCraft Elit_</span> 
                    </NavLink>       
                </section>
                
                <section  className='w-auto flex'>
                   {
                    navManuRoutes.map((nav:TNav, index:number) => {
                        const active = (value: string) => {
                            return value === location?.slice(0,10) ? 'text-purple-600' : 'text-gray-700' 
                        }
                        return (
                            <div key={index+1}>
                                <NavLink className={`mx-[20px] font-bold ${active(`${nav.link}`)} hover:text-purple-600 `} to={nav.link}>{nav.name}</NavLink>
                            </div>
                        )
                    } )
                   }
                  <NavLink to='/cart/1'>
                        <div style={{position:'relative'}}>
                            <p>{cart}</p>
                            <div style={{display: `${product.length === 0 ? 'none' : 'block'}`}}>
                                <p className='bg-red-500 font-bold text-sm w-[20px] h-[20px] flex items-center justify-center text-white rounded-full'  style={{position:'absolute', top:'-19px',right:'-10px',}}>{product.length}</p>
                            </div>
                        </div>
                  </NavLink>
                </section>                   
            </nav>
            <nav className='w-[100%] h-[50%] m-auto flex items-center justify-between xsm:flex sm:flex md:flex lg:hidden'>
               
                <section className='w-[260px] flex items-center justify-between'>
                   
                    <NavLink to='/'>
                        <span className='text-2xl font-bold text-purple-600'>KeyCraft Elit_</span> 
                    </NavLink>       
                </section>
                
                <section className='w-auto flex  relative'>
                       <div className='flex'>
                            <NavLink to='/cart/1'>
                                <div className='mr-3' style={{position:'relative'}}>
                                    <p>{cart}</p>
                                    <div style={{display: `${product.length === 0 ? 'none' : 'block'}`}}>
                                        <p className='bg-red-500 font-bold text-sm w-[20px] h-[20px] flex items-center justify-center text-white rounded-full'  style={{position:'absolute', top:'-19px',right:'-10px',}}>{product.length}</p>
                                    </div>
                                </div>
                            </NavLink>
                            <p onClick={() => setView(!view)} className='cursor-pointer'>{barger}</p>
                            
                       </div>
                        
                        <div  className={` ${view ? 'block': 'hidden'} w-[140px] h-auto p-3 bg-purple-100 rounded-lg z-10 absolute right-0 top-10`}>
                        {
                            navManuRoutes.map((nav:TNav, index:number) => {
                                    const active = (value: string) => {
                                return value === location?.slice(0,10) ? 'text-purple-600' : 'text-gray-700' 
                                }
                                return (
                                <div className='leading-8' key={index+1}>
                                    <NavLink className={`mx-[20px] font-bold ${active(`${nav.link}`)} hover:text-purple-600 `} to={nav.link}>{nav.name}</NavLink>
                                </div>
                            )
                            })
                        }
                        
                        </div> 
                </section>                    
            </nav>
            
        </div>
    );
};

export default Navbar;