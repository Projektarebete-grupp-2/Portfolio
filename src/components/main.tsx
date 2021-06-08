import React, { useState } from "react";
import HelloWorld from './HelloWorld'
import Skills from './Skills';
import Team from './Team'
import  About  from "./About";
import SimplePortal from './portal';
import Footer from './footer';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Button, Grid, Paper, Switch, Typography } from '@material-ui/core';


function Main() {
   const [darkMode, setDarkMode] = useState(true);
    const theme = createMuiTheme({
        palette: {
            type: darkMode ? 'dark' : 'light',
        },
    });


  return (
    <ThemeProvider theme={theme}>
    <Paper style={{height: '100vh'}}>
     <Grid container direction='column'>
           <Switch checked={darkMode} color="default" onChange={() => setDarkMode(!darkMode)}></Switch>
           <HelloWorld />
           <Team />
           <Skills />
           <About />
           <SimplePortal></SimplePortal>
           <Footer></Footer>
     </Grid>
    </Paper>
</ThemeProvider>
  );
}
export default Main;



