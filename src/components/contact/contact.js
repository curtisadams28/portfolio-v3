import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.scss'

export const Contact = () => {
  const form = useRef();

  const send = false;

  let templateParams = {
    name: 'James',
    notes: 'Check this out!'
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (send) {
      emailjs.sendForm('s', 't', form.current, '')

        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    } else {
      console.log('Send Blocked');
    }
  };

  const handleTextareaInput = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight - 40}px`;
    
  };

  return (
    <div className='contact section'>
      <div className='section-content'>
        <h1 className='heading'>Get In Touch</h1>
        <p>You can also email me directly at: <a href="mailto:curtisadams28@gmail.com">curtisadams28@gmail.com</a></p>
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
          <div className='form-item sender-name'>
            <label>Name</label>
            <input className='form-field sender-name' type="text" name="sender_name" />
          </div>
          <div className='form-item sender-email'>
            <label>Email</label>
            <input className='form-field' type="email" name="email" />
          </div>
          <div className='form-item sender-message'>
            <label>Message</label>
            <textarea className='form-field' name="message" rows='2' onInput={handleTextareaInput}/>
          </div>
          <input className='sender-submit button' type="submit" value="Send"/>
        </form>
      </div>
    </div>


  );
};

export default Contact;