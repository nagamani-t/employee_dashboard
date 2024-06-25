import React, { useState } from 'react';
import { ImHome } from 'react-icons/im';
import { BiSolidUser } from 'react-icons/bi';
import profile from '../assets/profile.png';
import dashboardLogo from '../assets/moptro.png';
import Employee from '../components/employee';
import ProgressBoard from '../components/progressBoard';

const Dashboard = () => {
  const [home, setHome] = useState(false);
  const [user, setUser] = useState(false);

  return (
    <div className='h-[100vh] flex flex-col'>
      <div className='h-[30%] overflow-scroll flex flex-col text-white'>
        <div className='flex flex-col h-[50%]'>
          <div className='flex justify-end items-center h-11 pr-6'>
            <div className='h-10 w-10 bg-[#38383885] rounded-3xl mt-6'>
              <img src={profile} alt='profile' />
            </div>
          </div>
          <div className='flex justify-center items-center mt-16'>
            <div className='h-16 w-16 bg-[#38383885] rounded-full flex items-center justify-center ml-4'>
              <img src={dashboardLogo} className='h-16 w-16' alt='dashboard' />
            </div>
            <div className='h-8 w-8 bg-[#38383885] rounded-full flex items-center justify-center mb-10 text-[#36A546]'>
              4
            </div>
          </div>
        </div>
      </div>
      <div className='h-[65%]'>
        {/* {user && <Employee /> } */}
        {home ?  <Employee />:<ProgressBoard />}
      </div>
      <div className='bg-[#38383885] h-[63px] flex justify-evenly items-center border-[#000000] shadow-sm rounded-xl'>
        <span>
          <ImHome className='text-3xl text-[#36A546]' onClick={() => setHome(!home)} />
        </span>
        <span>
          <BiSolidUser className='text-3xl text-[#36A546]' onClick={() => setHome(!home)} />
        </span>
      </div>
    </div>
  );
};

export default Dashboard;
