import React , { useState }from 'react'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Button, Grid, Paper, Switch, Typography } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';

export default function Theme() {

    const [darkMode, setDarkMode] = useState(true);
    const darkTheme = createMuiTheme({
        palette: {
            type: 'dark',
        },
    });
    const lightTheme = createMuiTheme({
        palette: {
            primary: {
              main: '#00796b',
            },
            
          },
    });



    return (
        <ThemeProvider theme={darkMode ? lightTheme : darkTheme}>
        <Paper className="root" style={{height: '100vh'}}>
         <Grid container direction='column'>
             <Typography variant='h4'>Change Theme</Typography>
               <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} color="default"></Switch>
            </Grid>
           </Paper>
       </ThemeProvider>
    )
}
