import {Avatar} from '@material-ui/core';
import React from 'react';
import './Post.css';
import NearMeIcon from '@material-ui/icons/NearMe';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const Post = ({profilePic, image, userName, timestamp, message}) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar className="post__avatar" src={profilePic} />
        <div className="post__topInfo">
          <h3>{userName}</h3>
          <p>{timestamp}</p>
        </div>
      </div>
      <div className="post__bottom">
        {message}
      </div>
      <div className="post__image"><img src={image} alt="" /></div>
      <div className="post__options">
        <div className="post__option"><ThumbUpAltIcon /><p>Like</p></div>
        <div className="post__option">
          <ChatBubbleOutlineIcon /><p>Comment</p>
        </div>
        <div className="post__option"><NearMeIcon /><p>Share</p></div>
        <div className="post__option">
          <AccountCircleIcon /><ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
