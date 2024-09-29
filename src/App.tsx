import React from "react";

import "./App.css";
import MyButton from "./components/MyButton";
import MyField from "./components/MyField";
import MyText from "./components/MyText";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Front from "./Front";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import Switch from "@mui/material/Switch";




function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        
      </BrowserRouter>



    </>
  );
}

export default App;

