import React, { useState } from 'react';
import './navbar.scss';
import Netflix from '../../assets/netflix.jpg';
import Doggo from '../../assets/doggo.jpg';
import { Notifications, Search } from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const navigate = useNavigate();

  window.onscroll = () => {
    setIsScroll(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll == null;
  };

  return (
    <div className={isScroll ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        <div className="left">
          <img src={Netflix} alt="Logo of Netflix" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New & Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img src={Doggo} alt="Profile icon of user" />

          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <span>Settings</span>
              <span
                onClick={() => {
                  navigate(-1);
                }}
              >
                Log Out
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
