import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../context/ContextProvider';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  const { activeMenu, setActiveMenu,isClicked,handleClick,screenSize,setScreenSize,currentColor,handleProfile,
    profile,
    handleChat,
    handleNotification,
    chat,notification } = useStateContext();

  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  // handling screen size 
  useEffect(()=>{
    const handleResize= ()=>setScreenSize(window.innerWidth);
    window.addEventListener('resize',handleResize);
    // to find the initial width
    handleResize();
    return()=>window.removeEventListener('resize',handleResize);
  },[])

  // now handling Sidebar as per width
  useEffect(()=>{
    if(screenSize<=900){
      setActiveMenu(false);
    }else{
      setActiveMenu(true);
    }
  },[screenSize])
  

  // Button Custom
  const NavButton = ({ title, color, customFunc, icon, dotcolor }) => (
    <TooltipComponent content={title} position="BottomCenter">
      <button type='button' onClick={customFunc} style={{ color }} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
        <span style={{ backgroundColor: dotcolor }}
          className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
        />
        {icon}
      </button>
    </TooltipComponent>
  )
  return (
    <div className='flex justify-between p-2 md:mx-2 relative'>
      <NavButton title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />} />
      {/* All Buttons */}
      <div className='flex '>
        <NavButton title="Cart"
          customFunc={()=>handleClick('cart')}
          color={currentColor}
          icon={<FiShoppingCart />} 
        />
        <NavButton title="Chat"
          dotcolor="#03C9D7"
          // customFunc={()=>handleClick('chat')}
          customFunc={handleChat}
          color={currentColor}
          icon={<BsChatLeft />} 
        />
        <NavButton title="Notification"
          customFunc={handleNotification}
          dotcolor="#03C9D7"
          color={currentColor}
          icon={<RiNotification3Line />} 
        />
        <TooltipComponent content="Profie" position='BottomCenter'>
            <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
              onClick={handleProfile}
            >
              <img src={avatar} alt='hell' className='rounded-full w-8 h-8' />
              <p>
                <span  className='text-gray-400 text-14'>Hi,</span>{' '}
                <span className='text-gray-400 font-bold ml-1 text-14'>Yash</span>
              </p>
              <MdKeyboardArrowDown className='text-gray-400 text-14'/>
            </div>
        </TooltipComponent>
        {isClicked.cart && <Cart/>}
        {chat && <Chat/>}
        {notification && <Notification/>}
        {profile && <UserProfile/>}
      </div>
    </div>
  )
}

export default Navbar