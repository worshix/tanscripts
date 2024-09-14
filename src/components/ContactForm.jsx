'use client';
import { useState } from 'react';
import axios from 'axios';

function SubscribeForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
	setStatus('sending');
	setMessage('');

        try {
	  const response = await axios.post('/api/subscribe', { email, name });
	  if (response.data.error) {
	    setStatus('error');
	    setMessage(response.data.error);
	  } else {
	    setStatus('success');
	    setMessage('Subscribed!');
	    }
	} catch (error) {
	  console.error('Form submission error:', error.response?.data);
	  setStatus('error');
	  setMessage(error.response?.data?.error || 'An error occurred. Please try again.');
	}
    };

    return (
        <article className="flex flex-col items-center p-6 rounded-lg w-full sm:w-1/2 mx-auto m-4">
            <h2 className="font-bold text-white text-2xl mb-4">Subscribe for updates</h2>
            <form onSubmit={handleSubmit} className="w-full space-y-8">
                <div className="mb-4">
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-main-300"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-main-300"
                        placeholder="Enter your email"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-main-300 text-white font-bold py-2 px-4 rounded-lg hover:bg-main2"
                >
                    Subscribe
                </button>
                {status === 'sending' && <div className='text-yellow-400 text-sm mb-4 p-2'>Sending...</div>}
                {status === 'error' && <div className='text-red-500 text-sm mb-4 p-2'>{message}</div>}
                {status === 'success' && <div className='text-green-500 text-sm mb-4 p-2'>{message}</div>}
            </form>
        </article>
    );
}

export default SubscribeForm;
