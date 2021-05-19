import React from 'react';
import SidebarRow from '../components/SidebarRow';
import './Sidebar.css';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import {Avatar} from '@material-ui/core';
import {People} from '@material-ui/icons';
import {useStateValue} from '../contexAPI/StateProvider';

const Sidebar = () => {
  const [{user}, dispatch] = useStateValue ();
  return (
    <div className="sidebar">
      <div className="sidebar__avatar">
        <Avatar src={user.photoURL} />
        <h4>{user.displayName}</h4>
      </div>
      <SidebarRow
        tittle="COVID-19 Information Center"
        Icon={LocalHospitalIcon}
      />
      <SidebarRow tittle="Pages" Icon={EmojiFlagsIcon} />
      <SidebarRow tittle="Friends" Icon={PeopleOutlineIcon} />
      <SidebarRow tittle="Messenger" Icon={InsertCommentIcon} />
      <SidebarRow tittle="Marketplace" Icon={StorefrontIcon} />
      <SidebarRow tittle="Videos" Icon={VideoLibraryIcon} />

    </div>
  );
};

export default Sidebar;
