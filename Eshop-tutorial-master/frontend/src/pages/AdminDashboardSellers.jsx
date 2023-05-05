import React from 'react';
import AdminHeader from '../components/Layout/AdminHeader';
import AllSellers from '../components/Admin/AllSellers';
import AdminSideBar from '../components/Admin/Layout/AdminSidebar';

const AdminDashboardSellers = () => {
  return (
    <div>
      <AdminHeader />
      <div className='w-full flex'>
        <div className='flex items-start justify-between w-full'>
          <div className='w-[80px] md:w-[330px]'>
            <AdminSideBar active={3} />
          </div>
          <AllSellers />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardSellers;
