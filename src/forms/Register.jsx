import * as React from 'react';
import { Email, Lock } from '@mui/icons-material';
import { Container, Typography, TextField, Button, FormControl, InputAdornment, IconButton, Grid } from '@mui/material';

const Register = () => {
   const [formData, setFormData] = React.useState({
      email: '',
      password: '',
   });

   const handleChange = (event) => {
      setFormData({
         ...formData,
         [event.target.name]: event.target.value,
      });
   };

   // Add your form submission logic here (e.g., handle form submit event)

   return (
      <Container component="main" maxWidth="xs" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
         <Grid container spacing={2}>
            <Grid item xs={12}>
               <Typography component="h1" variant="h5" align="center">
                  User Registration Form
               </Typography>
            </Grid>
            <Grid item xs={12}>
               <FormControl fullWidth variant="standard">
                  <TextField
                     label="Email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     type="email"
                     required
                     InputProps={{
                        startAdornment: (
                           <InputAdornment position="start">
                              <IconButton>
                                 <Email />
                              </IconButton>
                           </InputAdornment>
                        ),
                     }}
                  />
               </FormControl>
            </Grid>
            <Grid item xs={12}>
               <FormControl fullWidth variant="standard">
                  <TextField
                     label="Password"
                     name="password"
                     value={formData.password}
                     onChange={handleChange}
                     type="password"
                     required
                     InputProps={{
                        startAdornment: (
                           <InputAdornment position="start">
                              <IconButton>
                                 <Lock />
                              </IconButton>
                           </InputAdornment>
                        ),
                     }}
                  />
               </FormControl>
            </Grid>
            <Grid item xs={12}>
               <Button variant="contained" type="submit" fullWidth>
                  Register
               </Button>
            </Grid>
         </Grid>
      </Container>
   );
};

export default Register;
