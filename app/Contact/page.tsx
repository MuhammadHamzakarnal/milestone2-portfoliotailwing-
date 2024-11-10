import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Header />
      
      
      <div className="bg-[url('https://i.pinimg.com/originals/e6/9d/90/e69d9064d5c02d16f5b8683c96f39678.gif')] bg-no-repeat bg-cover bg-center py-20">
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-300">
            <h1 className="text-4xl sm:text-5xl text-center font-bold mb-6">Contact Us</h1>
            
            
            <form className="space-y-4">
              <div className="mb-4">
                <label htmlFor="name" className="text-xl sm:text-2xl">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your Name"
                  className="w-full mt-2 p-2 rounded border border-gray-300"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="text-xl sm:text-2xl">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your Email"
                  className="w-full mt-2 p-2 rounded border border-gray-300"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="contact" className="text-xl sm:text-2xl">Contact</label>
                <input
                  type="tel"
                  id="contact"
                  placeholder="Enter your Contact"
                  className="w-full mt-2 p-2 rounded border border-gray-300"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="text-xl sm:text-2xl">Your Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Enter Your Message"
                  className="w-full mt-2 p-2 rounded border border-gray-300"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-secendory hover:bg-green-400 text-white p-2 rounded-lg transition duration-600 hover:text-gray-500 active:bg-blue-90 w-full sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
