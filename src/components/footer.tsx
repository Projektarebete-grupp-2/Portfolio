import React, { CSSProperties, Fragment } from 'react';


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
                <div style={socialmedia}>
                    <a href="#">Instagram</a>
                    <a href="#">Github</a>
                    <a href="#">Snapchat</a>
                </div>
                <div style={pFooter}>
                    <p style={marginFooter}>&copy;{new Date().getFullYear()} Företagets namn | </p>
                    <p style={marginFooter}>All right reserved | </p>
                    <p style={marginFooter}>Terms of Service | </p>
                    <p style={marginFooter}>Privacy</p>
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
    backgroundColor: '#282c34',
    color: ' white',
   
}

const leftFooter: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '50%',
    height: '50%',
    margin: '1em'
   
  
}
const rightFooter: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '50%',
    height: '50%',
    margin: '1em'
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
const marginFooter: CSSProperties = {
    margin: '5px'
}