import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactSection.scss';
import { useState, useEffect } from "react";
import EmailBanner from '../../EmailBanner/EmailBanner';

export const Contact = () => {

  const [sendSuccess, setSendSuccess] = useState(null);

  const form = useRef();

  const send = true;

  const sendEmail = (e) => {
    e.preventDefault();
    if (send) {
      //console.log(form.current);
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
          setSendSuccess(true);
          form.current.reset();
        }, (error) => {
          console.log(error.text);
          setSendSuccess(false);
        });
    } else {
      console.log('Send Blocked');
    }
  };

  const handleTextareaInput = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight - 40}px`;
  };

  function resetForm() {
    setSendSuccess(null);
    form.current.reset();
  }

  return (
    <div className='contact section'>
      <div className='section-content'>
        <h1 className='heading'>Get In Touch</h1>
        <p>You can also email me directly at: <a href="mailto:curtisadams28@gmail.com">curtisadams28@gmail.com</a></p>
        {sendSuccess &&
          <EmailBanner type='success' message='Email sent!' resetForm={resetForm}/>
        }
        {sendSuccess === false &&
          <EmailBanner type='error' message='There was an error.' resetForm={resetForm}/>
        }
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
          <div className='form-item sender-name'>
            <label>Name</label>
            <input className='form-field sender-name' type="text" name="sender_name" required/>
          </div>
          <div className='form-item sender-email'>
            <label>Email</label>
            <input className='form-field' type="email" name="email" required/>
          </div>
          <div className='form-item sender-message'>
            <label>Message</label>
            <textarea className='form-field' name="message" rows='2' onInput={handleTextareaInput} required/>
          </div>
          <input className='sender-submit button' type="submit" value="Send"/>
        </form>
      </div>
    </div>


  );
};

export default Contact;