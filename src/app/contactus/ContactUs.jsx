'use client'
import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message(1).');
      }
    } catch (error) {
      setStatus('Failed to send message(2).');
    }
  };

  return (
    <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: "url('/assets/automation.jpg')" }}>
      {/* Overlay for form */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Form Container */}
      <div className="relative z-10 max-w-lg mx-auto p-6 backdrop-blur-sm rounded-lg shadow-lg space-y-6 my-4">
        <h1 className="font-bold text-white text-2xl text-center underline">Mail us directly</h1>

        {/* Form Start */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-main-500 focus:border-main-500 sm:text-sm"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-main-500 focus:border-main-500 sm:text-sm"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-main-500 focus:border-main-500 sm:text-sm"
              placeholder="Your message..."
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-main-500 rounded-md shadow-sm hover:bg-main-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-500 bg-opacity-45"
            >
              Send Message
            </button>
          </div>

          {/* Status Message */}
          {status && <p className="text-sm text-white text-center">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
