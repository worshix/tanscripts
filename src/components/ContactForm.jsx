'use client';
import { useState } from 'react';

function SubscribeForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email) {
            setError('Please fill in all fields.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setError('');
        // Handle successful form submission
        console.log('Form submitted:', { name, email });
    };

    return (
        <article className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-full sm:w-1/2 mx-auto m-4">
            <h2 className="font-bold text-main-300 text-2xl mb-4">Subscribe for updates</h2>
            <form onSubmit={handleSubmit} className="w-full">
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <div className="mb-4">
                    <label className="block text-main-300 font-bold mb-2" htmlFor="name">Name</label>
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
                    <label className="block text-main-300 font-bold mb-2" htmlFor="email">Email</label>
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
            </form>
        </article>
    );
}

export default SubscribeForm;
