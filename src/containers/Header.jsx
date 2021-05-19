import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import AddIcon from '@material-ui/icons/Add';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {Avatar, IconButton} from '@material-ui/core';

function Header({user}) {
  console.log (
    '🚀 ~ file: Header.jsx ~ line 16 ~ Header ~ user',
    user.authUser
  );

  return (
    <div className="header">

      <div className="header__left">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
          alt=""
          className="header__left__img"
        />
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option">
          <div className="header__option"><HomeIcon fontSize="large" /></div>
          <div className="header__option"><FlagIcon fontSize="large" /></div>
          <div className="header__option">
            <SubscriptionsIcon fontSize="large" />
          </div><div className="header__option">
            <StorefrontIcon fontSize="large" />
          </div>
          <div className="header__option">
            <PeopleAltIcon fontSize="large" />
          </div>

        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton><AddIcon /></IconButton>
        <IconButton><MessageIcon /></IconButton>
        <IconButton><NotificationsActiveIcon /></IconButton>
        <IconButton><KeyboardArrowDownIcon /></IconButton>
      </div>
    </div>
  );
}

export default Header;
