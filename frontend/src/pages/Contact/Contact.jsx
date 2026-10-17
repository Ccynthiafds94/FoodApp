import { useState } from 'react';
import './contact.css';
import { assets } from '../../assets/assets';

const contactEmail = 'hello@foodiehub.com';

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
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const subject = formData.get('subject').trim();
    const message = formData.get('message').trim();
    const emailSubject = encodeURIComponent(subject || `Message from ${name}`);
    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    setSubmitMessage('Your email app should open with your message ready to send.');
    window.location.href = `mailto:${contactEmail}?subject=${emailSubject}&body=${emailBody}`;
  };

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

        <form className='contact-form' onSubmit={handleSubmit}>
          <h2>Send a message</h2>
          <div className='input-row'>
            <input type='text' name='name' placeholder='Your name' aria-label='Your name' autoComplete='name' required />
            <input type='email' name='email' placeholder='Your email' aria-label='Your email' autoComplete='email' required />
          </div>
          <input type='text' name='subject' placeholder='Subject' aria-label='Subject' required />
          <textarea name='message' rows='5' placeholder='Your message' aria-label='Your message' required />
          {submitMessage && <p className='contact-form-message' role='status'>{submitMessage}</p>}
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
