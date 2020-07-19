import React from 'react';
import styles from './Tables.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const demoContent = [
  {id: 1,
    time: '12:00-12.30',
    table1: [],
    table2: [],
    table3: [],
  },

  {id: 2,
    time: '12:30-13.00',
    table1: ['reservation', '12345'],
    table2: ['event', '09876'],
    table3: ['reservation', '67564'],
  },

  {id: 3,
    time: '13:00-13.30',
    table1: ['reservation', '23456'],
    table2: [],
    table3: ['event', '54321'],
  },

  {id: 4,
    time: '13:30-14.00',
    table1: ['reservation', '34567'],
    table2: ['event', '98765'],
    table3: ['event', '65432'],
  },

  {id: 5,
    time: '14:00-14.30',
    table1: [],
    table2: [],
    table3: ['event', '76543'],
  },
];

const renderActions = status => {
  switch (status[0]) {
    case 'reservation':
      return (
        <Button className={styles.button} variant='contained' href={`${process.env.PUBLIC_URL}/tables/booking/${status[1]}`}>Reservation</Button>
      );
    case 'event':
      return (
        <Button className={styles.button} variant='contained' href={`${process.env.PUBLIC_URL}/tables/events/${status[1]}`}>Event</Button>
      );
    default:
      return null;
  }
};

const Tables = () => {

  return (
    <Paper className={styles.component}>
      <div className={styles.dataPicker}>
        <form noValidate>
          <TextField
            id='date'
            label='Date'
            type='date'
            defaultValue={'2020-05-17'}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </div>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell align='center' width={100}>TIME</TableCell>
            <TableCell align='center' width={200}>Table 1</TableCell>
            <TableCell align='center' width={200}>Table 2</TableCell>
            <TableCell align='center' width={200}>Table 3</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.id}>
              <TableCell align='center' component='th' scope='row'>
                {row.time}
              </TableCell>
              <TableCell align='center'>
                {renderActions(row.table1)}
              </TableCell>
              <TableCell align='center'>
                {renderActions(row.table2)}
              </TableCell>
              <TableCell align='center'>
                {renderActions(row.table3)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </Paper>

  );
};

export default Tables;
