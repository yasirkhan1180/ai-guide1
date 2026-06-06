"use client"; // REQUIRED for forms and event handlers

import { useState } from 'react';

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Event handler for form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-4">Subscribe to AI Guide</h1>
      <p className="mb-8 text-gray-600">Get the latest insights on biotechnology and AI delivered to your inbox.</p>
      
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 border p-2 rounded"
        />
        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>

      {status === 'success' && <p className="mt-4 text-green-600">Thanks for subscribing!</p>}
      {status === 'error' && <p className="mt-4 text-red-600">Something went wrong. Please try again.</p>}
    </div>
  );
}