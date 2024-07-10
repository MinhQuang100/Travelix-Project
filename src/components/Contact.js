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
    <div className="contact relative py-16 bg-gray-100">
      <div className="contact_background absolute bottom-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(images/contact.png)' }}></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-5/12 px-4 mb-8 lg:mb-0">
            <div className="contact_image"></div>
          </div>
          <div className="w-full lg:w-7/12 px-4">
            <div className="contact_form_container p-8 bg-gradient-to-tr from-yellow-500 to-blue-500 rounded-lg shadow-lg relative z-10">
              <div className="contact_title text-2xl font-bold text-white uppercase mb-4">Get in touch</div>
              <form onSubmit={onSubmit} id="contact_form" className="contact_form space-y-4">
                <input
                  type="text"
                  id="contact_form_name"
                  name="name"
                  className="contact_form_name input_field w-full placeholder:text-white p-3 text-sm bg-transparent text-white border-b border-gray-300 focus:outline-none focus:border-white"
                  placeholder="Name"
                  value={formData.name}
                  onChange={onChange}
                  required
                />
                <input
                  type="email"
                  id="contact_form_email"
                  name="email"
                  className="contact_form_email input_field w-full placeholder:text-white p-3 text-sm bg-transparent text-white border-b border-gray-300 focus:outline-none focus:border-white"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={onChange}
                  required
                />
                <input
                  type="text"
                  id="contact_form_subject"
                  name="subject"
                  className="contact_form_subject input_field w-full placeholder:text-white p-3 text-sm bg-transparent text-white border-b border-gray-300 focus:outline-none focus:border-white"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={onChange}
                  required
                />
                <textarea
                  id="contact_form_message"
                  name="message"
                  className="contact_form_message input_field w-full placeholder:text-white p-3 text-sm bg-transparent text-white border-b border-gray-300 focus:outline-none focus:border-white"
                  rows="4"
                  placeholder="Message"
                  value={formData.message}
                  onChange={onChange}
                  required
                ></textarea>
                <button
                  type="submit"
                  id="form_submit_button"
                  className="form_submit_button w-full py-3 text-sm font-bold text-white uppercase bg-purple-700 hover:bg-purple-800 rounded-lg transition duration-300"
                >
                  Send Message
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
