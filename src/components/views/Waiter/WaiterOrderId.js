import React from 'react';
import styles from './Waiter.module.scss';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const WaiterOrderId = () => (
  <Card className={styles.component}>
    <h2>Table 01: order</h2>
    <h3>Order ID: 123</h3>
    <h3>Date: 17/05/2020 Hour: 1530</h3>
    <p>Customer #1: pizza Nonna Alba; house wine - red; Arancini</p>
    <p>Customer #2: pizza Ufossa; tap water</p>
    <p>Customer #3: salad Giuseppe; house wine - red</p>
    <p>...</p>
    <br></br>
    <br></br>
    <p>Allergies: none</p>
    <p>Remarks: none</p>
    <p>Waiter: Pegs</p>
    <br></br>
    <br></br>
    <p>Subtotal: $47.40</p>
    <p>Service 12%: $47</p>
    <h3>Total: $53.30</h3>
    <br></br>
    <Button className={styles.button} variant="outlined" color="primary" component={Link}  to={`${process.env.PUBLIC_URL}/waiter`}>↩ Return</Button>
    <Button className={styles.button} variant="outlined" color="primary" href=''>+ Add to order</Button>
    <Button className={styles.button} variant="outlined" color="primary" href=''>Print</Button>
    <Button className={styles.button} variant="outlined" color="secondary" href=''>Cancel</Button>




  </Card>
);

export default WaiterOrderId;
