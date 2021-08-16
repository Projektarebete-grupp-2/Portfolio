import React, { CSSProperties } from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import '../style/socialmedia.css';
import { Grid, Link, Paper, ThemeProvider, useTheme } from "@material-ui/core";




export default function SocialFollow() {
  const theme = useTheme();
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Grid style={socialContainer}>
        <Link onClick={preventDefault} href="https://www.youtube.com"
        className="youtube social">
        <YouTubeIcon fontSize="large"></YouTubeIcon>
        </Link>
        <Link onClick={preventDefault} href="https://www.facebook.com/"
        className="facebook social">
        <FacebookIcon fontSize="large"></FacebookIcon>
        </Link>
        <Link onClick={preventDefault} href="https://www.twitter.com/" className="twitter social">
        <TwitterIcon fontSize="large"></TwitterIcon>
        </Link>
        <Link onClick={preventDefault} href="https://www.instagram.com/"
        className="instagram social">
        <InstagramIcon fontSize="large"></InstagramIcon>
        </Link>
        </Grid>
    </Paper>
    </ThemeProvider>    
  );
}

const socialContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
   
 }