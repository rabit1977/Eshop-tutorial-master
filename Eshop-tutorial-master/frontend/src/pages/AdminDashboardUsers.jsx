import React from 'react';
import AdminHeader from '../components/Layout/AdminHeader';
import AllUsers from '../components/Admin/AllUsers';
import AdminSideBar from '../components/Admin/Layout/AdminSidebar';

const AdminDashboardUsers = () => {
  return (
    <div>
      <AdminHeader />
      <div className='w-full flex'>
        <div className='flex items-start justify-between w-full'>
          <div className='w-[80px] md:w-[330px]'>
            <AdminSideBar active={4} />
          </div>
          <AllUsers />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardUsers;
