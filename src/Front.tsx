import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/MyButton";
import MyField from "./components/MyField";
import MyText from "./components/MyText";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { Box, Container, CssBaseline, Stack, Typography } from "@mui/material";

function Front() {
  return (
    <>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <Box 
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' }, bgcolor: '#F5B3EE', height: '50vh' }}
        noValidate
        autoComplete="off"
        >

        <Stack>
        <Typography variant="h3" sx={{color:"#753C6E"}}>Egle</Typography>
        <br/>
        </Stack>

        
      </Box>
        
      </Container>
    </React.Fragment>

      
    </>
  );
}

export default Front;
