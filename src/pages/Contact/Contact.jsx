import React from 'react';
import './contact.css';
import { assets } from '../../assets/assets';

const contactDetails = [
  {
    title: 'Call us',
    value: '+1 (555) 123-4567',
    description: 'Our support team is available daily from 8:00 AM to 10:00 PM.',
  },
  {
    title: 'Email us',
    value: 'hello@foodiehub.com',
    description: 'Send us an email and we will get back to you within 24 hours.',
  },
  {
    title: 'Visit us',
    value: '24 Market Street, New York, NY',
    description: 'Drop by for a quick chat with our team and taste our newest dishes.',
  },
];

const Contact = () => {
  return (
    <div className='contact-page'>
      <div className='contact-hero'>
        <p className='contact-tag'>Contact us</p>
        <h1>We’d love to hear from you.</h1>
        <p>
          Whether you have a question about your order, sponsorship opportunities, or a general inquiry,
          our team is ready to help.
        </p>
      </div>

      <div className='contact-content'>
        <div className='contact-cards'>
          {contactDetails.map((item) => (
            <div className='contact-card' key={item.title}>
              <h3>{item.title}</h3>
              <p className='contact-value'>{item.value}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <form className='contact-form' onSubmit={(e) => e.preventDefault()}>
          <h2>Send a message</h2>
          <div className='input-row'>
            <input type='text' placeholder='Your name' />
            <input type='email' placeholder='Your email' />
          </div>
          <input type='text' placeholder='Subject' />
          <textarea rows='5' placeholder='Your message' />
          <button type='submit'>Send message</button>
        </form>
      </div>

      <div className='socials'>
        <a href='https://facebook.com' target='_blank' rel='noreferrer'>
          <img src={assets.facebook_icon} alt='Facebook' />
        </a>
        <a href='https://twitter.com' target='_blank' rel='noreferrer'>
          <img src={assets.twitter_icon} alt='Twitter' />
        </a>
        <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
          <img src={assets.linkedin_icon} alt='LinkedIn' />
        </a>
      </div>
    </div>
  );
};

export default Contact;
