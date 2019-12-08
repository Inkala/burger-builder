import React from 'react';
import classes from './Layout.module.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = props => {
  return (
    <React.Fragment>
      <Toolbar />
      {/* <div>SideDrawer, Backdrop</div> */}
      <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
