import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (send an email)  TO DO
    console.log('Hooray!! We have received your message. We will get back to you soon');
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col p-2 bg-main-800 rounded-md m-2 gap-2 w-[350px] mx-auto sm:w-[400px] md:w-[500px]'>
      <h1 className='font-bold py-2'>Send Message</h1>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className='bg-white bg-opacity-15 text-white rounded-md p-2'
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className='bg-white bg-opacity-15 text-white rounded-md p-2'
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className='bg-white bg-opacity-15 text-white rounded-md p-2'
      />
      <button type="submit" className='block bg-white text-main-800 font-bold w-fit p-2 rounded-md ml-auto mr-4 hover:scale-110 transition-transform duration-300'>Send</button>
    </form>
  );
};

export default ContactForm;

