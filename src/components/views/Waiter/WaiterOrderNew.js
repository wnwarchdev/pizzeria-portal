import React from 'react';
import styles from './Waiter.module.scss';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const WaiterOrderNew = () => (
  <Card className={styles.component}>
    <h2>Table 01: new order</h2>
    <h3>Order ID: ######</h3>
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
    <Button className={styles.button} variant="outlined" color="primary" component={Link}  to={`${process.env.PUBLIC_URL}/waiter`}>↩ Return</Button>
    <Button className={styles.button} variant="outlined" color="primary" href='' disabled >+ Add to order</Button>
    <Button className={styles.button} variant="outlined" color="primary" href='' disabled >Print</Button>
    <Button className={styles.button} variant="outlined" color="secondary" href='' disabled >Cancel</Button>




  </Card>
);

export default WaiterOrderNew;
