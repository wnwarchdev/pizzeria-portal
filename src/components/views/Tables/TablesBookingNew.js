import React from 'react';
import styles from './Tables.module.scss';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

const TablesBookingNew = () => (
  <Card className={styles.component}>
    <h2>Table 01: new booking</h2>
    <h3>Booking ID: ######</h3>
    <h3>Date: 17/05/2020 Hour: 1530</h3>
    <br></br>
    <Button className={styles.button} variant="outlined" color="secondary" href=''>+ Open order</Button>
    <br></br>
    <br></br>
    <p>Allergies: ...</p>
    <p>Remarks: ...</p>
    <p>Waiter: Pegs</p>
    <br></br>
    <br></br>
    <p>Subtotal: $0.00</p>
    <p>Service 12%: $0.00</p>
    <h3>Total: $0.00</h3>
    <br></br>
    <Button className={styles.button} variant="outlined" color="primary" href=''>↩ Return</Button>
    <Button className={styles.button} variant="outlined" color="primary" href='' disabled >+ Add to order</Button>
    <Button className={styles.button} variant="outlined" color="primary" href='' disabled >Print</Button>
    <Button className={styles.button} variant="outlined" color="secondary" href='' disabled >Cancel</Button>




  </Card>
);

export default TablesBookingNew;
