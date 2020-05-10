import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/bookingNew`} className={styles.link}>+ New Booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/123abc`} className={styles.link}>Booking: 123abc</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/eventsNew`} className={styles.link}>+ New Event</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/123abc`} className={styles.link}>Event: 123abc</Link>
  </div>
);

export default Tables;
