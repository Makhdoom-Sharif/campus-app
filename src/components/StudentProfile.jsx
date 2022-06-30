// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// // import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// // import RadioButtonsGroup from './RadioButtonsGroup';
// import {Link, useNavigate} from 'react-router-dom'
// import { useState } from 'react';
// // import { loginUser } from '../firebase/login';
// import { useSelector, useDispatch } from "react-redux";
// import { loginInitiate,clearError,loginStart,loginSuccess,loginFail } from "../redux/action";
// import { useEffect } from 'react';
// import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
// import { getDatabase, ref, child, get } from "firebase/database";
// // import CircularIntegration from './loading button';
// // import LoadingButton from "@mui/lab/LoadingButton";

// // import LoadingButton from '@mui/lab/LoadingButton';
// // or
// import { LoadingButton } from '@mui/lab';
// import BasicAlerts from './Alert';


// function Copyright(props) {
//     const UserDetails = useSelector((state) => state.user);
//     return (
      
//       <Typography variant="body2" color="text.secondary" align="center" {...props}>
//         {'Copyright © '}
//         <Link to={UserDetails.loading?"#":'/'} style={{color:"inherit" , textDecoration: "underline"}}>
//           Your Website
//         </Link>{' '}
//         {new Date().getFullYear()}
//         {'.'}
//       </Typography>
//     );
//     }
  
//   const theme = createTheme();


// const StudentProfile = () => {
//     const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const UserDetails = useSelector((state) => state.user);
//   console.log("UserRoll==>"+ UserDetails.roll)
// //   useEffect(()=>{
// //     if(UserDetails.roll==="student"){
// //       navigate('/homepage')
// //     }
// //     else if(UserDetails.roll==="company"){
// //       navigate('/company')
// //     }
// //     else{

// //     }
// //   },[UserDetails,navigate])

//   // const [roll , setRoll]=useState('');
//   // const pull_data = (roll) => {
//   //   setRoll(roll);
//   // }
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//       // roll: roll
//     })
//     try{
//       await loginUser({
//         email: data.get('email'),
//         password: data.get('password'),
//         // roll: roll
//       })
//     }catch(error){

//     }
//   };

//  const loginUser= async (authParams)=>{
//   const auth = getAuth();
//   const {email, password} = authParams
//   try{
//   dispatch(loginStart());
//   const { user: { uid } } = await signInWithEmailAndPassword(auth, email, password)
//   const db = getDatabase();
//   const dbRef = ref(getDatabase());
// await get(child(dbRef, `users/${uid}`)).then((snapshot) => {
// if (snapshot.exists()) {
//   console.log(snapshot.val().roll)
//   dispatch(loginSuccess(snapshot.val()))
//   console.log("Login Successfull")
// } else {

//   console.log("Login fail");
// }
// }).catch((error) => {
// console.error(error);
// });

// }
//   catch(error){
//       // alert(error)
//       dispatch(loginFail())
//   }}
//   return (
        
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

//           <Typography component="h1" variant="h5">
//            Your Profile
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             {UserDetails.error&&<BasicAlerts/>}
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             {/* <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             /> */}
//             {/* <RadioButtonsGroup func={pull_data} /> */}
//             <LoadingButton
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//               loading={UserDetails.loading? true:false}
//             >
//               Update
//             </LoadingButton>
//             {/* <LoadingButton>Sign In</LoadingButton> */}
//             {/* <LoadingButton
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//             loading={true}
//           loadingPosition="end"
//           >
//               Sign In
//             </LoadingButton> */}
//             <Grid container>
//               <Grid item xs>
//                 {/* <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link> */}
//               </Grid>
//               {/* <Grid item>
//                 <Link to={UserDetails.loading?"#":'/signup'} style={{color:"inherit" , textDecoration: "underline"}}>
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid> */}
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
  

//   )
// }

// export default StudentProfile





import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, InputAdornment, TextField } from '@mui/material';
import Title from './Title';
import "./StudentProfile.css";
import UpdateIcon from '@mui/icons-material/Update';
import { useState } from 'react';
import { AccountCircle } from '@material-ui/icons';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import Checkout from './Form/Checkout';

export default function SStudentProfile() {
  const [date, setDate] = useState(null);

  return(
    <>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > :not(style)': {
          m: 1,
          width: "128vh",
          height: "128vh",
        },
      }}
    >
      {/* <Paper elevation={0} />
      <Paper /> */}
      <Paper elevation={3} >
    <div className='profile'>
    <div className='Personal-info'>
      <Title>Personal Info</Title>
      <TextField
        id="input-with-icon-textfield"
        label="Full Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"

        style={{marginBottom:"10px"}}
      />

      <TextField
        id="input-with-icon-textfield"
        label="Father Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
        style={{marginBottom:"10px"}}
      />
      <TextField
      variant="standard"
      id="standard-basic" 
      label="CNIC No" 
     type="tel"
     name="cnic no."
     onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
                            }
       }}
        inputProps={{ minLength: 13 ,maxLength: 13  }}
        autoComplete="off"
        style={{marginBottom:"10px"}}
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
              renderInput={(props) => 
                  <TextField
                            variant="standard"  
                            id="standard-basic" 
                            label="Date Of Birth" 
                            name="DOB"
                            autoComplete="off"
                             {...props} />
                            }
                            label="Date Of Birth"
                            value={date}
                            onChange={(newValue) => {
                                setDate(new Date(newValue).toString());
                            }}
                        />
                    </LocalizationProvider>
          {/* </div>
          <div className='Personal-info' > */}
          <br/>
          <Title>Contact Info</Title>
          <TextField
        id="input-with-icon-textfield"
        label="Email"
        type="email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"

        style={{marginBottom:"10px"}}
      />

      <TextField
        id="input-with-icon-textfield"
        label="Permenant Address"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <HomeIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
        style={{marginBottom:"10px"}}
      />
      <TextField
      variant="standard"
      id="input-with-icon-textfield" 
      label="Contact No" 
     type="tel"
     name="cnic no."
     onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
                            }
       }}
        inputProps={{ minLength: 11 ,maxLength: 11  }}
        autoComplete="off"
        style={{marginBottom:"10px"}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CallIcon />
            </InputAdornment>
          ),
        }}
        />
      
          </div>
          </div>
          </Paper>
          </Box>
          
          <Checkout/>
          </>
  )
}
//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'center',
//         '& > :not(style)': {
//           m: 1,
//           width: "128vh",
//           height: "128vh",
//         },
//       }}
//     >
//       {/* <Paper elevation={0} />
//       <Paper /> */}
//       <Paper elevation={3} >
//       <div className='profile'>
//         <h2>Your Profile</h2>
//         <Avatar style={{marginLeft:"10px"}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//       </div>
//       <div className='data'>
//         <Title ClassName="title">Personal Bio:</Title>
//         <p>Full Name:</p>
//         <p>Father Name:</p>
//         <p>CNIC:</p>
//         <p>Date Of Birth:</p>

        
        
//         <Title>Contact Info:</Title>
//         <p>Address:</p>
//         <p>Email Address:</p>

//         <Title>Academic Info.:</Title>
//         <p>Degree:</p>
//         <p>Institute Name:</p>
//         <p>Passing Year:</p>
//         <p>Percentage/CGPA</p>
//       </div>
//       <IconButton onClick={handleClickOpen} ClassName="update-btn" aria-label="Add"  >
//                    Edit <UpdateIcon  />
//       </IconButton>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Subscribe</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             To subscribe to this website, please enter your email address here. We
//             will send updates occasionally.
//           </DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Email Address"
//             type="email"
//             fullWidth
//             variant="standard"
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleClose}>Subscribe</Button>
//         </DialogActions>
//       </Dialog> 
//       </Paper>
//     </Box>
//   );
// }
