import React from 'react';
import './SidebarRow.css';
const SidebarRow = ({tittle, Icon}) => {
  return (
    <div className="sidebarRow">
      {Icon && <Icon />}
      <h4>
        {tittle}
      </h4>
    </div>
  );
};

export default SidebarRow;
