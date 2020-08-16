import React from 'react';
import styles from './Tables.module.scss';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

const TablesEventsId = () => (
  <Card className={styles.component}>
    <h2>Table 01: event #07</h2>
    <h3>Event ID: 97979</h3>
    <h3>Date: 17/05/2020 Hour: 1430</h3>
    <br></br>
    <Button className={styles.button} variant="outlined" color="secondary" href=''>Modify</Button>
    <br></br>
    <br></br>
    <p>Customer: Marly Krushkhova</p>
    <p>Contact number: n/a</p>
    <p>Contact email: ml_turbo@gibson.net</p>
    <p>Waiter: Bobby N</p>
    <p>Remarks: 3x vegetarian; classroom arrangement; beamer; audio</p>
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
    <Button className={styles.button} variant="outlined" color="primary" href='' >+ Add to event</Button>
    <Button className={styles.button} variant="outlined" color="primary" href='' >Notify</Button>
    <Button className={styles.button} variant="outlined" color="primary" href=''  >History</Button>
    <Button className={styles.button} variant="outlined" color="secondary" href=''  >Cancel</Button>




  </Card>
);

export default TablesEventsId;
