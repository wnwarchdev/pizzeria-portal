import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const demoContent = [
  {id: '12121', status: 'ready', description: 'pizza; pizza; beer; wine'},
  {id: '23232', status: 'cancelled', description: 'pizza; wine'},
  {id: '97979', status: 'new', description: 'coffee'},
  {id: '12345', status: 'new', description: 'spaghetti; wine; pizza; wine; water'},
];


const Kitchen = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell width={100}>Order ID</TableCell>
          <TableCell width={150}>Status</TableCell>
          <TableCell>Description</TableCell>
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
              {row.description}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <Button className={styles.button} variant="outlined" color="secondary" href=''>Open Break</Button>
    <Button className={styles.button} variant="outlined" color="secondary" href='' disabled >End Break</Button>
    <Button className={styles.button} variant="outlined" color="secondary" href=''>Waiter</Button>
    <Button className={styles.button} variant="contained" color="secondary" href='' >Distress</Button>
  </Paper>
);

export default Kitchen;
