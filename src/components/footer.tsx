import React, { CSSProperties, Fragment } from 'react';
import SocialFollow from './socialmedia';

const Footer = () =>{
    return(
        <Fragment>
            {/* main footer */}
        <div style={mainFooter}>
        
            <div style={leftFooter}>
                {/* missing navbar import */}
                <div style={leftFooterDiv}>
                    Postgatan 411 06 Göteborg</div>
                    {/* Här kan menu bli importerad  istället för diven nedan. */}
                <div style={leftFooterDiv}>
                    Postgatan 411 06 Göteborg</div>
              
            </div>
            <div style={rightFooter}>
                <SocialFollow></SocialFollow>
                <div>
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
    /* backgroundColor: 'green', */
    backgroundColor: '#282c34',
    color: 'white',
   
   
}

const leftFooter: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:  'center',
    width: '50%',
    height: '100%',
    flex: '1', 
}
const leftFooterDiv: CSSProperties ={
    margin: '0.5em',
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

