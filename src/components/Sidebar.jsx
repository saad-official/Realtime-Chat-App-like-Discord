import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo, FaStethoscope } from "react-icons/fa";
import React, { useState } from "react";
import db, { auth } from '../../src/firebase';
import DummyPhoto from ".././placeholder.jpg";
import SidebarChats from "./SidebarChats";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { Cog6ToothIcon, MicrophoneIcon, PhoneIcon } from "@heroicons/react/24/solid";

const Sidebar = () => {
  const [channels, setChannels] = useState([]);
  const user = useSelector(selectUser);
    useEffect(() => {

        db.collection("channels").onSnapshot((snapshot) => 
            setChannels(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data:doc.data()
            }))
        )
        )
    }, []);
  return (
    <div className="  flex-unit-1  h-screen bg-slate-500">
      <div className="flex h-[100vh]">
        <div className="w-[25%] text-white bg-gray-900">
          <SideBarIcon icon={<FaFire size="28" />} text="Tooltip 💡" />
          <Divider />
                  <SideBarIcon icon={<BsPlus size="32" />} text={'Create Channel 🔥'} onClick={() => {
                      const channelName = prompt('Please Enter a Channel Name');
                      if (channelName.length === 0) {
                        alert('Please Enter a Valid Channel Name');
                      }
                      else {
                        db.collection('channels').add({
                            channelName: channelName
                        });
                    }
                      

          }} />
          <SideBarIcon icon={<BsFillLightningFill size="28" />} text="love ❤️" />
          <SideBarIcon icon={<FaPoo size="28" />} text={'youube 🚀'} />
          <Divider />
          <SideBarIcon icon={<BsGearFill size="22" />} text={'setting 🛠️'} />
        </div>
              <div className="relative w-[75%] bg-gray-700 text-white flex flex-col">
                  <h1 className="font-bold text-white text-center text-[30px] my-4 ">Channels</h1>
                  {channels.map(({id, data:{channelName}}) => (
                  <SidebarChats  key={id} id={id} name={channelName} />    
                  ))}
       
                  {/* <SidebarChats name={'Clever Qazi' } />
                  <SidebarChats name={'FireShip'} />
                  <SidebarChats name={'Papa react'} /> */}
         <div className="absolute bottom-0 mb-0  bg-gray-600 w-full py-2 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              {console.log('kk', user.photo)}
              <img src={user.photo || DummyPhoto}  className="h-10 w-10 rounded-full cursor-pointer" alt=""  onClick={() => auth.signOut()} />
              <div className="flex flex-col">
                <span className="text-sm text-gray-100">{user.displayName}</span>
                <span className="text-sm text-gray-400">#{user.uid.substring(0,5)}</span>
              </div>
            </div>
            <div className="flex space-x-2 px-2">
              <PhoneIcon className='w-[1.3rem] h-[1.3rem] cursor-pointer hover:text-gray-400 text-blue-300' />
              <MicrophoneIcon className='w-[1.3rem] h-[1.3rem] cursor-pointer hover:text-gray-400 text-blue-300' />
            </div>
        </div>
        </div>

       
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip 💡", onClick }) => (
  <div className="sidebar-icon group" onClick={onClick}>
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default Sidebar;
