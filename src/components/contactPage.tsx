import 'react-app-polyfill/ie11';
import React from 'react';
import './contactform.css';

import { Formik, Field, Form, FormikHelpers } from 'formik';
import { CSSProperties } from '@material-ui/styles';

interface Values {
    name: string;
    email: string;
    message: string;
}

const ContactPage = () => {
  return (
    <div style={formDiv}>
      <h1>Kontakt Formulär</h1>
      <Formik
        initialValues={{
            name: '',
            email: '',
            message: '',
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
            /* Här ska det läggas till så att när du klickar på submit så skickas ett mail via api.... */
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <div >
            <Form style={mainForm}>
            <label htmlFor="name">Namn</label>
            <Field 
                id="name" 
                name="name" 
                placeholder="John Doe" 
                style={fieldDiv} 
            />
            <label htmlFor="email">Email</label>
            <Field
                id="email"
                name="email"
                placeholder="john@doe.com"
                type="email"
                style={fieldDiv}
            />
            <label htmlFor="message">Medelande</label>
            <Field 
                id="message" 
                name="message"  
                placeholder="Medelande" 
                style={fieldMessage} 
            />
            <button 
                type="submit"
                style={fieldDiv}
                >Skicka</button>
            </Form>

        </div>
      </Formik>
    </div>
  );
}
export default ContactPage

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
const fieldMessage: CSSProperties={
    height: '15vh',
}

