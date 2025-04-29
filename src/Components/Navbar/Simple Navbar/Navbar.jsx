import brandLogo from '../../../assets/images/Navbar/Brand.png';
import { useState, useEffect } from "react";
import Modal from './Modal';
import { Divide as Hamburger } from 'hamburger-react';
import useIsMobile from '../utlis/useCustomHook';

export default function Navbar() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const isMobile = useIsMobile();
    const [isMenuVisible, setMenuVisible] = useState(!isMobile);

    useEffect(() => {
        setMenuVisible(!isMobile);
        setOpen(false); // reset hamburger on resize
    }, [isMobile]);

    useEffect(() => {
        if (isMobile) {
            setMenuVisible(isOpen);
        }
    }, [isOpen, isMobile]);

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 items-center p-3 border-b border-gray-200">
                {/* logo */}
                <div className='order-1'>
                    <img src={brandLogo} className='w-[140px] h-[48px]' alt="logo images" />
                </div>

                {/* menu */}
                {isMenuVisible && (
                    <div className='md:justify-self-center col-span-2 md:col-span-1 order-3 md:order-2 border-t border-gray-200 md:border-none mt-2'>
                        <ul className='md:flex gap-4 mt-2'>
                            <li><a href="" className='p-2 hover:bg-stone-100 px-5 flex md:justify-center gap-1 items-center cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                                </svg>
                                Products</a></li>
                                <li><a href="" className='p-2 hover:bg-stone-100 px-5 flex md:justify-center gap-1 items-center cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                            </svg>
                            Feature</a></li>
                            <li><a href="" className='p-2 hover:bg-stone-100 px-5 flex md:justify-center gap-1 items-center cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                                </svg>
                                Pricing</a></li>
                            <li><a href="" className='p-2 hover:bg-stone-100 px-5 flex md:justify-center gap-1 items-center cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                            </svg>
                            Support</a></li>
                        </ul>
                        {/* buttons in mobile menu */}
                        <div className="flex gap-2 mt-2 md:hidden">
                            <button onClick={() => setModalOpen(true)} className='p-2 px-3 hover:bg-gray-200 bg-gray-100 rounded-lg'>Login</button>
                            <button className='p-2 px-3 hover:bg-gray-200 bg-gray-100 rounded-lg'>Sign up</button>
                        </div>
                    </div>
                )}

                {/* auth + hamburger */}
                <div className='justify-self-end flex gap-3 pe-1 md:order-3 order-2'>
                    <div className="md:hidden">
                        <Hamburger toggled={isOpen} toggle={setOpen} />
                    </div>
                    <button onClick={() => setModalOpen(true)} className='hidden md:flex p-2 px-3 hover:bg-gray-200 bg-gray-100 rounded-lg'>Login</button>
                    <button className='hidden md:flex p-2 px-3 hover:bg-gray-200 bg-gray-100 rounded-lg'>Sign up</button>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
}
