import React from 'react';
//import styles from './MainLayout.scss';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { StylesProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const MainLayout = (props) => (
  <div>
    <StylesProvider injectFirst>
      <AppBar position="static">

        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <PageNav/>
          </Toolbar>
        </Container>

      </AppBar>
      
      <Toolbar/>
      <Container maxWidth="lg">
        {props.children}
      </Container>
    </StylesProvider>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;
