import React from 'react';
import { FaHome, FaUser, FaUsers, FaAppStore } from 'react-icons/fa';
import { HiOutlineBookOpen } from 'react-icons/hi2';
import './sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar-menu">
        <ul>
          <li>
            <a href="/home">
              <FaHome className="sidebar-icon" />
              Home
            </a>
          </li>
          <li>
            <a href="/profile">
              <FaUser className="sidebar-icon" />
              Profile
            </a>
          </li>
          <li>
            <a href="/users">
              <FaUsers className="sidebar-icon" />
              Users
            </a>
          </li>
          <li>
            <a href="/participants">
              <FaUsers className="sidebar-icon" />
              Participants
            </a>
          </li>
          <li>
            <a href="/apps">
              <FaAppStore className="sidebar-icon" />
              Apps
            </a>
          </li>
          <li>
            <a href="/explore-terminology">
              <HiOutlineBookOpen className="sidebar-icon" />
              Explore Terminology
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
