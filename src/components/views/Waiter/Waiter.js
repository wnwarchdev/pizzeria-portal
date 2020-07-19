import React from 'react';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {id: '1', status: 'free', order: null},
  {id: '2', status: 'thinking', order: null},
  {id: '3', status: 'ordered', order: 123},
  {id: '4', status: 'prepared', order: 234},
  {id: '5', status: 'delivered', order: 345},
  {id: '6', status: 'paid', order: 456},
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button>thinking</Button>
        </>
      );
    case 'thinking':
      return (
        <Button>new order</Button>
      );
    case 'ordered':
      return (
        <Button>prepared</Button>
      );
    case 'prepared':
      return (
        <Button>delivered</Button>
      );
    case 'delivered':
      return (
        <Button>paid</Button>
      );
    case 'paid':
      return (
        <Button>free</Button>
      );
    default:
      return null;
  }
};

const Waiter = () => (
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
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.status}
            </TableCell>
            <TableCell>
              {row.order && (
                <Button href={`${process.env.PUBLIC_URL}/panel/waiter/order/${row.order}`}>
                  {row.order}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {renderActions(row.status)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Waiter;



/*import React from 'react';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter</h2>
    <Link to={`${process.env.PUBLIC_URL}/waiter/orderNew`} className={styles.link}>+ New Order</Link>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/123abc`} className={styles.link}>Order: 123abc</Link>
  </div>
);

export default Waiter;*/
