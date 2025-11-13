"use client";
import { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';
import { TextHoverEffect } from './ui/text-hover-effect';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    niche: '',
    budget: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const email = 'omar.mostafa0205@gmail.com';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! I will get back to you within 24h.');
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
<div className="min-h-screen text-white p-8 md:p-16 lg:-mt-40">
<div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-8">
            <p className="text-indigo-400 text-sm uppercase tracking-wider">Contact me</p>
            
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
              Let's enhance your excellent enterprise with an amazing website
            </h1>
            
            <p className="text-gray-400 text-lg">
              For every prosperous enterprise, a proficient website is necessary, and I'm the expert for it. Contact me now, let's kick-start!
            </p>
            
            <div className="space-y-4">
              <p className="text-gray-400">Also you can find me here:</p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 bg-opacity-50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
            <h2 className="text-2xl font-semibold mb-2">Enter your details</h2>
            <p className="text-gray-400 mb-8">Let me know your details and i will get in touch with you within 24h.</p>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="bg-black bg-opacity-50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-black bg-opacity-50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="niche"
                  placeholder="Your Website Niche"
                  value={formData.niche}
                  onChange={handleChange}
                  className="bg-black bg-opacity-50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition"
                />
                <input
                  type="text"
                  name="budget"
                  placeholder="What is your budget?"
                  value={formData.budget}
                  onChange={handleChange}
                  className="bg-black bg-opacity-50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition"
                />
              </div>
              
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Tell me more about your needs..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-black bg-opacity-50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition resize-none"
                ></textarea>
                <div className="absolute bottom-3 right-3 flex gap-2">
                  <button type="button" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button type="button" className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-500 transition">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              <button 
              onClick={handleSubmit}
              className="bg-[#9456f1] px-6 py-3 text-white rounded-md cursor-pointer w-full ">
            Submit
      </button>
            </div>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-gray-400">
              <span>Or you can email me at:</span>
              <button
                onClick={copyEmail}
                className="text-white hover:text-indigo-400 transition flex items-center gap-2 group"
              >
                <span className="font-medium">{email}</span>
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='-mb-430 mt-40'>
      <TextHoverEffect text="OMAR" />
      </div>
    </div>
  );
}