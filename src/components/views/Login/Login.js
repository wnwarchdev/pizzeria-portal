import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const Login = () => (
  <Card className={styles.component}>
    <form className={styles.form} noValidate autoComplete="off">
      <TextField
        id="login"
        label="Login"
        required
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        required
      />
      <Button 
        component={Link} 
        className={styles.button}
        to={`${process.env.PUBLIC_URL}/`}> 
        Log in
      </Button>
    </form>
  </Card>
);

export default Login;
