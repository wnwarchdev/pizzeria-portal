import React from 'react';
import styles from './Tables.module.scss';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

const TablesEventsNew = () => (
  <Card className={styles.component}>
    <h2>Table 01: event #13</h2>
    <h3>Event ID: #####</h3>
    <h3>Date: 17/05/2020 Hour: 1930</h3>
    <br></br>
    <Button className={styles.button} variant="outlined" color="secondary" href=''>+ Begin event</Button>
    <Button className={styles.button} variant="outlined" color="secondary" href=''>+ Assign waiter</Button>
    <br></br>
    <br></br>
    <p>Customer: ...</p>
    <p>Contact number: ...</p>
    <p>Contact email: ...</p>
    <p>Waiter: ...</p>
    <p>Remarks: ...</p>
    <br></br>
    <br></br>
    <Button className={styles.button} variant="outlined" color="secondary" href=''>+ Create order</Button>
    <Button className={styles.button} variant="outlined" color="secondary" href='' disabled >Manage</Button>
    <br></br>
    <br></br>
    <p>Subtotal: $0.00</p>
    <p>Service 12%: $0.00</p>
    <h3>Total: $0.00</h3>
    <br></br>
    <Button className={styles.button} variant="outlined" color="primary" href=''>↩ Return</Button>
    <Button className={styles.button} variant="outlined" color="primary" href='' disabled >+ Add to event</Button>
    <Button className={styles.button} variant="outlined" color="primary" href='' disabled >Notify</Button>
    <Button className={styles.button} variant="outlined" color="primary" href='' disabled >History</Button>
    <Button className={styles.button} variant="outlined" color="secondary" href='' disabled >Cancel</Button>




  </Card>
);

export default TablesEventsNew;
