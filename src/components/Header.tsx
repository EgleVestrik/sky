import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Front from '../Front';
import App from '../App';

//import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'red' }}>
      <AppBar position="static">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<App />} />
          <Route path="./Front" element={<Front />} />
        </Route>
      </Routes>
      <ul>
        <li>
        <Link to="../App">Front Page</Link>
        </li>
        <li>
            <Link to="../Login">Login</Link>
            
        </li>
        <li>
            <Link to="../Front">About me</Link>
            
        </li>
      </ul>


      </AppBar>
    </Box>
  );
}