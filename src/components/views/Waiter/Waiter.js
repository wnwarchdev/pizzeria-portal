import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    tables: PropTypes.any,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.any,
    }),
    toggleTableStatus: PropTypes.func,
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(id, status){
    const {toggleTableStatus} = this.props;
    switch (status) {
      case 'free':
        return (
          <Button variant="contained" onClick={()=> toggleTableStatus(id, 'thinking')}>new customer</Button>
        );
      case 'thinking':
        return (
          <div>
            <Button onClick={()=> toggleTableStatus(id, 'thinking')}>thinking</Button>
            <br></br>
            <Button color="primary" onClick={()=> toggleTableStatus(id, 'paid')}>cancel</Button>
            <br></br>
            <Button color="secondary" component={Link} to={`${process.env.PUBLIC_URL}/waiter/orderNew`}>add order</Button>
          </div>
        );
      case 'ordered':
        return (
          <Button variant="outlined" onClick={()=> toggleTableStatus(id, 'prepared')}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button variant="outlined" onClick={()=> toggleTableStatus(id, 'delivered')}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button variant="outlined" onClick={()=> toggleTableStatus(id, 'paid')}>paid</Button>
        );
      case 'paid':
        return (
          <Button variant="outlined" onClick={()=> toggleTableStatus(id, 'free')}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button component={Link}  to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.id, row.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;