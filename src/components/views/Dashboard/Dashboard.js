import React from 'react';
import styles from './Dashboard.module.scss';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const Dashboard = () => (
  <div>
    <Card className={styles.component}>
      <h2>User: Pegs Poerwantoro</h2>
      <h3>User ID: 04_ID</h3>
      <h3>Logged</h3>
      <br></br>
      <Button className={styles.button} variant="outlined" color="secondary" href=''>Open Break</Button>
      <Button className={styles.button} variant="outlined" color="secondary" href='' disabled> End Break</Button>
      <br></br>
      <br></br>
      <p>Status: Active</p>
      <p>Last log: KTW 0723:21-07-2020</p>
      <p>Next holidays: 21/07/2020</p>
      <br></br>
      <h3>Day log 21-07-2020</h3>
      <p>0732: logged</p>
      <p>0849: busy</p>
      <p>0900: in</p>
      <p>0910: table 1</p>
      <p>0919: table 3</p>
      <p>0947: table 1</p>
      <p>1010: table 2</p>
      <p>1054: table 3</p>
      <p>1114: break</p>
      <p>1156: in</p>
      <p>1207: table 1</p>
      <p>1233: table 3</p>
      <p>1245: table 1</p>
      <p>1311: busy</p>
      <p>(...)</p>
      <br></br>
      <br></br>
      <Button className={styles.button} variant="outlined" color="primary" href=''>Manage</Button>
      <Button className={styles.button} variant="outlined" color="primary" href='' >Options</Button>
      <Button className={styles.button} variant="outlined" color="primary" href='' disabled >Timesheet</Button>
      <Button className={styles.button} variant="outlined" color="secondary" href='' >Calendar</Button>
    </Card>
    <Card className={styles.component}>
      <h2>Notes</h2>
      <br></br>
      <Card className={styles.note} variant="outlined">
        <h3>From: Andrea (manager)</h3>
        <p>Timestamp: 2143:20-07-2020</p>
        <p>&quot;Event 12 has been cancelled&quot;</p>
        <Button className={styles.button} variant="outlined" color="secondary" href='' disabled>Responded</Button>
        <Button className={styles.button} variant="outlined" color="secondary" href='' >Archive</Button>
      </Card>
      <br></br>
      <Card className={styles.note} variant="outlined">
        <h3>From: Andrea (manager)</h3>
        <p>Timestamp: 2348:20-07-2020</p>
        <p>&quot;Thanks for calling&quot;</p>
        <Button className={styles.button} variant="outlined" color="secondary" href=''>Respond</Button>
        <Button className={styles.button} variant="outlined" color="secondary" href='' disabled>Archive</Button>
      </Card>
      <br></br>
      <Card className={styles.note} variant="outlined">
        <h3>From: Carlos (cook)</h3>
        <p>Timestamp: 0625:21-07-2020</p>
        <p>&quot;Arrange shallots&quot;</p>
        <Button className={styles.button} variant="outlined" color="secondary" href=''>Respond</Button>
        <Button className={styles.button} variant="outlined" color="secondary" href='' disabled>Archive</Button>
      </Card>
      <br></br>
      <Card className={styles.note} variant="outlined">
        <h3>From: Andrea (manager)</h3>
        <p>Timestamp: 0745:21-07-2020</p>
        <p>&quot;Bobby absent today&quot;</p>
        <Button className={styles.button} variant="outlined" color="secondary" href=''>Respond</Button>
        <Button className={styles.button} variant="outlined" color="secondary" href='' disabled>Archive</Button>
      </Card>
      <br></br>
      <Card className={styles.note} variant="outlined">
        <h3>From: Carlos (cook)</h3>
        <p>Timestamp: 0758:21-07-2020</p>
        <p>&quot;thx&quot;</p>
        <Button className={styles.button} variant="outlined" color="secondary" href=''>Respond</Button>
        <Button className={styles.button} variant="outlined" color="secondary" href='' disabled>Archive</Button>
      </Card>
      <br></br>
      <Card className={styles.note} variant="outlined">
        <h3>From: Andrea (manager)</h3>
        <p>Timestamp: 0905:21-07-2020</p>
        <p>&quot;Added events for next week&quot;</p>
        <Button className={styles.button} variant="outlined" color="secondary" href=''>Respond</Button>
        <Button className={styles.button} variant="outlined" color="secondary" href='' disabled>Archive</Button>
      </Card>
      <br></br>
      <Card className={styles.note} variant="outlined">
        <h3>From: Gio Bono (owner)</h3>
        <p>Timestamp: 1304:21-07-2020</p>
        <p>&quot;please meet me at the office asap&quot;</p>
        <Button className={styles.button} variant="outlined" color="secondary" href=''>Respond</Button>
        <Button className={styles.button} variant="outlined" color="secondary" href='' disabled>Archive</Button>
      </Card>
      <br></br>
      <Card className={styles.note} variant="outlined">
        <h3>From: Bobby N (waiter)</h3>
        <p>Timestamp: 1309:21-07-2020</p>
        <p>&quot;Kill boss&quot;</p>
        <Button className={styles.button} variant="outlined" color="secondary" href=''>Respond</Button>
        <Button className={styles.button} variant="outlined" color="secondary" href='' disabled>Archive</Button>
      </Card>
      <br></br>
 
      <br></br>
      <br></br>
      <br></br>
      <Button className={styles.button} variant="outlined" color="secondary" href=''>+ Add Note</Button>
      <Button className={styles.button} variant="outlined" color="primary" href='' > Open email</Button>
      <Button className={styles.button} variant="outlined" color="primary" href='' > Open archive</Button>
      <Button className={styles.button} variant="outlined" color="primary" href='' > Options</Button>
    </Card>
  </div>
);

export default Dashboard;
