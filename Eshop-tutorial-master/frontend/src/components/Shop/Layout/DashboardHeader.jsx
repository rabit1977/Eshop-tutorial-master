import React from 'react';
import { AiOutlineGift } from 'react-icons/ai';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { FiPackage, FiShoppingBag } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { backend_url } from '../../../server';

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);
  return (
    <div className='w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4'>
      <div className='w-40'>
        <Link to='/dashboard'>
          <img src='Images/Logo.png' alt='' />
        </Link>
      </div>
      <div className='flex items-center'>
        <div className='flex items-center mr-4'>
          <Link to='/dashboard/cupouns' className='md:block hidden'>
            <AiOutlineGift
              color='#555'
              size={30}
              className={`mx-5 cursor-pointer`}
              title='gifts'
            />
          </Link>

          <Link to='/dashboard-events' className='md:block hidden'>
            <MdOutlineLocalOffer
              color='#555'
              size={30}
              className='mx-5 cursor-pointer'
              title='Events'
            />
          </Link>
          <Link to='/dashboard-products' className='md:block hidden'>
            <FiShoppingBag
              color='#555'
              size={30}
              className='mx-5 cursor-pointer'
              title='All Orders'
            />
          </Link>
          <Link to='/dashboard-orders' className='md:block hidden'>
            <FiPackage
              title='All Products'
              color='#555'
              size={30}
              className='mx-5 cursor-pointer'
            />
          </Link>
          <Link to='/dashboard-messages' className='md:block hidden'>
            <BiMessageSquareDetail
              color='#555'
              size={30}
              className='mx-5 cursor-pointer'
              title='Inbox Messages'
            />
          </Link>
          <Link to={`/shop/${seller._id}`}>
            <img
              src={`${backend_url}${seller.avatar}`}
              alt=''
              className='w-[50px] h-[50px] rounded-full object-cover'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
