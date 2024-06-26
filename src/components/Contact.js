import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      console.error(err.response.data);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="contact">
      <div className="contact_background" style={{ backgroundImage: 'url(images/contact.png)' }}></div>

      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="contact_image"></div>
          </div>
          <div className="col-lg-7">
            <div className="contact_form_container">
              <div className="contact_title">get in touch</div>
              <form onSubmit={onSubmit} id="contact_form" className="contact_form">
                <input
                  type="text"
                  id="contact_form_name"
                  name="name"
                  className="contact_form_name input_field"
                  placeholder="Name"
                  value={formData.name}
                  onChange={onChange}
                  required
                  data-error="Name is required."
                />
                <input
                  type="email"
                  id="contact_form_email"
                  name="email"
                  className="contact_form_email input_field"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={onChange}
                  required
                  data-error="Email is required."
                />
                <input
                  type="text"
                  id="contact_form_subject"
                  name="subject"
                  className="contact_form_subject input_field"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={onChange}
                  required
                  data-error="Subject is required."
                />
                <textarea
                  id="contact_form_message"
                  name="message"
                  className="text_field contact_form_message"
                  rows="4"
                  placeholder="Message"
                  value={formData.message}
                  onChange={onChange}
                  required
                  data-error="Please, write us a message."
                ></textarea>
                <button type="submit" id="form_submit_button" className="form_submit_button button">
                  send message<span></span><span></span><span></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
