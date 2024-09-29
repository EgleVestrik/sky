import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import MyButton from './MyButton';
import { Stack, Typography } from '@mui/material';
import { FormEvent, useState, useEffect } from 'react';
import Grid from '@mui/material/Grid2';

export default function SimpleContainer() {
  const [form, setForm] = useState({ username: "", password: "" });

  //const[username,setUsername]=useState("");
  //const[password,setPassword]=useState("");
  
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      console.log(form);
      //console.log({
        //username,
        //password,
      //});
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prevForm=>({
        ...prevForm,
        [event.target.name]:event.target.value
    }));

    };

  //useEffect(()=> {
    //console.log("Reloads every time");
  //});
  //useEffect(()=> {
  //  console.log("Render first time");
  //},[] );
  //useEffect(()=> {
  //  console.log("Renders everytime user changes");
  //},[username] );

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <Box 
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' }, bgcolor: '#F5B3EE', height: '50vh' }}
        noValidate
        autoComplete="off"
        >
        <form onSubmit={handleSubmit}>
        <Stack>
        <Typography variant="h3" sx={{color:"#753C6E"}}>LOGIN</Typography>
        <TextField id="username" name="username" label="username" variant="standard" 
            onChange={handleChange}
            //onChange={(event) => setUsername(event.target.value)}
            />
        <TextField id="password" name="password" label="password" variant="standard"
            onChange={handleChange}
            //onChange={(event) => setPassword(event.target.value)}
            /> 
        <br/>
        <MyButton/>
        </Stack>
        </form>
        
      </Box>
        
      </Container>
    </React.Fragment>
  );
}