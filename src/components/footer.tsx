import React, { CSSProperties, Fragment } from 'react';
import SocialFollow from './socialmedia';

const Footer = () =>{
    return(
        <Fragment>
            {/* main footer */}
        <div style={mainFooter}>
        
            <div style={leftFooter}>
                {/* missing navbar import */}
                <div>Postgatan</div>
                <div>411 06</div>
                <div>Göteborg</div>
            </div>
            <div style={rightFooter}>
                <SocialFollow></SocialFollow>
                <div style={pFooter}>
                    <p >&copy;{new Date().getFullYear()} Företagets namn</p>
               </div>
            </div>
            </div>

        </Fragment>
    )
}
export default Footer



const mainFooter: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
    height: '15vh',
    backgroundColor: 'green',
    /* backgroundColor: '#282c34', */
    color: 'white',
   
   
}

const leftFooter: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:  'center',
    width: '50%',
    height: '100%',
    flex: '1',
   
  
}
const rightFooter: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1',
    width: '50%',
    height: '100%',
   
   
}
const socialmedia: CSSProperties = {
   display: 'flex',
   justifyContent: 'space-evenly',
   width: '100%',
   
  
}
const pFooter: CSSProperties = {
   display: 'flex',
   flexDirection: 'row',
  
}
