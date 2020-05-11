import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/views/Login/Login';
import Dashboard from './components/views/Dashboard/Dashboard';
import Tables from './components/views/Tables/Tables';
import TablesBookingId from './components/views/Tables/TablesBookingId';
import TablesBookingNew from './components/views/Tables/TablesBookingNew';
import TablesEventsId from './components/views/Tables/TablesEventsId';
import TablesEventsNew from './components/views/Tables/TablesEventsNew';
import Waiter from './components/views/Waiter/Waiter';
import WaiterOrderId from './components/views/Waiter/WaiterOrderId';
import WaiterOrderNew from './components/views/Waiter/WaiterOrderNew';
import Kitchen from './components/views/Kitchen/Kitchen';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { StylesProvider } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    /*secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },*/
  },
});

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <ThemeProvider theme={theme}>
          <StylesProvider injectFirst>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL} component={Dashboard} />
              <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
              <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBookingId} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/bookingNew'} component={TablesBookingNew} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={TablesEventsId} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/eventsNew'} component={TablesEventsNew} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={WaiterOrderId} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter/orderNew'} component={WaiterOrderNew} />
              <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
            </Switch>
          </StylesProvider>
        </ThemeProvider>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
