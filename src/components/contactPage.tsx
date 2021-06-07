
import React from 'react';
import emailjs from 'emailjs-com';

import { CSSProperties } from '@material-ui/styles';

 export default function ContactPage(){
/* Kanske göra en klass utav detta? */
  function sendEmail(e: any ) {
    e.preventDefault();
  
    emailjs.sendForm('service_7mhxm8q', 'template_vj0p6rn', e.target, 'user_914CcAaQ8KuJjqqafaLS5')
      .then((result) => {
          console.log(result.text);
          alert('Thanks for contacting us!')
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      
      
  } 
  return (
    <div style={formDiv}>
      <h1>Kontakta oss</h1>
      
        <form  onSubmit={sendEmail} style={mainForm}>
          <div style={fieldDiv}>
          <input type="subject" placeholder='Subject' name='subject'/>
          </div>
          <div style={fieldDiv}>
            <input type="text" placeholder='Name' name='name'/>
          </div>
          <div style={fieldDiv}>
          <input type="email" placeholder='Email' name='email'/>
          </div>
          <div >
          <input type="message" placeholder='Message' name='message'/>
          </div>
          <div style={fieldBtn}>
            <input type="submit" value='Send Message' />
          </div>
        </form>
    </div>
  );
}


const formDiv: CSSProperties={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   /*  backgroundColor: '#282c34', */
   
    
}
const mainForm: CSSProperties={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '20vw',
    height: '30vh',
}
const fieldDiv: CSSProperties={
    height: '5vh',
   
}

const fieldBtn: CSSProperties={
    width: '5vw',
    height: '5vh',
}

