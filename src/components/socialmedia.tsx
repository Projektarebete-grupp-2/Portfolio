import React, { CSSProperties } from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';


import './socialmedia.css';
function HomeIcon(props: SvgIconProps) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

export default function SocialFollow() {
  return (
    <div style={socialContainer}>
    <a href="https://www.youtube.com"
    className="youtube social">
    <YouTubeIcon fontSize="large"></YouTubeIcon>
    </a>
    <a href="https://www.facebook.com/"
    className="facebook social">
     <FacebookIcon fontSize="large"></FacebookIcon>
    </a>
    <a href="https://www.twitter.com/" className="twitter social">
    <TwitterIcon fontSize="large"></TwitterIcon>
    </a>
    <a href="https://www.instagram.com/"
    className="instagram social">
    <InstagramIcon fontSize="large"></InstagramIcon>
    </a>
    </div>
    
  );
}

const socialContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
   
 }