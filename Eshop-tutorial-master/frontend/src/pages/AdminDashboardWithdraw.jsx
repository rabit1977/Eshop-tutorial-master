import React from 'react';
import AdminHeader from '../components/Layout/AdminHeader';
import AllWithdraw from '../components/Admin/AllWithdraw';
import AdminSideBar from '../components/Admin/Layout/AdminSidebar';

const AdminDashboardWithdraw = () => {
  return (
    <div>
      <AdminHeader />
      <div className='w-full flex'>
        <div className='flex items-start justify-between w-full'>
          <div className='w-[80px] md:w-[330px]'>
            <AdminSideBar active={7} />
          </div>
          <AllWithdraw />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardWithdraw;
