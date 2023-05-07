import React from 'react';
import AllEvents from '../components/Admin/AllEvents';
import AdminSideBar from '../components/Admin/Layout/AdminSideBar';
import AdminHeader from '../components/Layout/AdminHeader';

const AdminDashboardEvents = () => {
  return (
    <div>
      <AdminHeader />
      <div className='w-full flex'>
        <div className='flex items-center justify-between w-full'>
          <div className='w-[80px] md:w-[330px]'>
            <AdminSideBar active={6} />
          </div>
          <AllEvents />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardEvents;
