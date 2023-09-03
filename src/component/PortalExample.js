// App.js
import React from 'react';
import PortalComponent from './Portal-dom';

const Applook = () => {
  return (
    <div>
      <h1>React Portal Example</h1>
      <PortalComponent>
        <div className="portal-content">
          This content is rendered using a portal.
        </div>
      </PortalComponent>
    </div>
  );
};

export default Applook;
