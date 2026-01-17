import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { AdminContext } from '../context/AdminContext';
import { DoctorContext } from '../context/DoctorContext';

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  // Helper function for active link styles
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
      isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''
    }`;

  return (
    <div className="min-h-screen bg-white border-r">
      {/* Admin Sidebar */}
      {aToken && (
        <ul className="text-[#515151] mt-5">
          <NavLink className={navLinkClass} to="/admin-dashboard">
            <img src={assets.home_icon} alt="" />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>

          <NavLink className={navLinkClass} to="/all-appointments">
            <img src={assets.appointment_icon} alt="" />
            <p className="hidden md:block">Appointments</p>
          </NavLink>

          <NavLink className={navLinkClass} to="/add-doctor">
            <img src={assets.add_icon} alt="" />
            <p className="hidden md:block">Add Doctor</p>
          </NavLink>

          <NavLink className={navLinkClass} to="/doctor-list">
            <img src={assets.people_icon} alt="" />
            <p className="hidden md:block">Doctors List</p>
          </NavLink>

          {/* Extra option only for admin */}
          <NavLink className={navLinkClass} to="/delete-doctor">
            <img src={assets.delete_icon} alt="" className="w-7 h-8"/>
            <p className="hidden md:block">Delete Doctor</p>
          </NavLink>
        </ul>
      )}

      {/* Doctor Sidebar */}
      {dToken && (
        <ul className="text-[#515151] mt-5">
          <NavLink className={navLinkClass} to="/doctor-dashboard">
            <img src={assets.home_icon} alt="" />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>

          <NavLink className={navLinkClass} to="/doctor-appointments">
            <img src={assets.appointment_icon} alt="" />
            <p className="hidden md:block">Appointments</p>
          </NavLink>

          <NavLink className={navLinkClass} to="/doctor-profile">
            <img src={assets.people_icon} alt="" />
            <p className="hidden md:block">Profile</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
