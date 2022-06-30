import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RadioButtonsGroup from './RadioButtonsGroup';
import {Link, useNavigate} from 'react-router-dom'
import { signUp } from '../firebase/signup';
import { useState } from 'react';
import { registerInitiate,clearError } from "../redux/action";

// import {signUp} from "../redux/reducer/index";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';


function Copyright(props) {
  
  

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link to={'/'} style={{color:"inherit" , textDecoration: "underline"}} >
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();



export default function SignUp() {
  // const state = useSelector(state => state);
  // console.log(state)
  const navigate = useNavigate();
  // useEffect(()=>{
  //   if(currentUser){
  //     navigate.push("/homepage")
  //   }
  // },[currentUser,navigate])
  const dispatch = useDispatch();
  const { currentUser,error } = useSelector((state) => state.user);
  useEffect(()=>{
    if(currentUser){
      navigate('/homepage')
    }
  },[currentUser,navigate])
  const [roll , setRoll]=useState('');
  const pull_data = (roll) => {
    setRoll(roll);
  }
  
  const handleSubmit = async  (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get)
    console.log({
      fullname: data.get('fullname'),
      email: data.get('email'),
      password: data.get('password'),
      roll: roll
    });
    try{
      // dispatch(registerInitiate({
      //   fullname: data.get('fullname'),
      //   email: data.get('email'),
      //   password: data.get('password'),
      //   roll: roll}))}
      await  signUp({
      fullname: data.get('fullname'),
      email: data.get('email'),
      password: data.get('password'),
      roll: roll})
      alert('SignUp Successfully')
      }
      catch (e) {
      alert(e.message)
        }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          Student/Company Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  name="fullname"
                  autoComplete="given-name + family-name"
                  autoFocus
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid> */}
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
                <RadioButtonsGroup func={pull_data} />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
                Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={'/login'} style={{color:"inherit" , textDecoration: "underline"}}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}