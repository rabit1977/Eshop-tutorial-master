import React from 'react';
import AdminHeader from '../components/Layout/AdminHeader';
import AdminDashboardMain from '../components/Admin/AdminDashboardMain';
import AdminSideBar from '../components/Admin/Layout/AdminSidebar';

const AdminDashboardPage = () => {
  return (
    <div>
      <AdminHeader />
      <div className='w-full flex'>
        <div className='flex items-start justify-between w-full'>
          <div className='w-[80px] md:w-[330px]'>
            <AdminSideBar active={1} />
          </div>
          <AdminDashboardMain />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
