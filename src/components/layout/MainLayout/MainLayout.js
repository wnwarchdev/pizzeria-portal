import React from 'react';
//import styles from './MainLayout.scss';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';

const MainLayout = (props) => (
  <div>
    <PageNav/>
    {props.children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;
