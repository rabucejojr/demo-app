import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material/';

const Login = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = () => {
      // Simulate login logic
      console.log('Username:', username);
      console.log('Password:', password);
      // Replace with your actual login logic
   };

   return (
      <Container component="main" maxWidth="xs" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
         <Grid container spacing={2}>
            <Grid item xs={12}>
               <Typography component="h1" variant="h5" align="center">
                  Login Form
               </Typography>
            </Grid>
            <Grid item xs={12}>
               <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
               />
            </Grid>
            <Grid item xs={12}>
               <TextField
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  autoComplete="current-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
            </Grid>
            <Grid item xs={12}>
               <Button variant="contained" type="submit" onClick={()=>handleSubmit()} fullWidth startIcon={<LockOutlined />}>
                  Sign In
               </Button>
            </Grid>
         </Grid>
      </Container>
   );
};

export default Login;
