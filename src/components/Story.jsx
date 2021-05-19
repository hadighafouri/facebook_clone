import {Avatar} from '@material-ui/core';
import React from 'react';
import './Story.css';

const Stoty = ({img, tittle, profileImg}) => {
  return (
    <div className="story">
      <div style={{backgroundImage: `url( ${img}  )`}} className="story__bgImg">
        <Avatar className="story__avatar" src={profileImg} />
        <h4>{tittle}</h4>
      </div>
    </div>
  );
};

export default Stoty;
