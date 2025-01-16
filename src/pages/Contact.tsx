import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const stores = [
    {
      city: "Mumbai",
      address: "Zaveri Bazaar, Mumbai, Maharashtra",
      phone: "+91 22 1234 5678"
    },
    {
      city: "Delhi",
      address: "Chandni Chowk, Delhi",
      phone: "+91 11 1234 5678"
    },
    {
      city: "Bangalore",
      address: "Commercial Street, Bangalore, Karnataka",
      phone: "+91 80 1234 5678"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Our Locations</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.832739655259!2d72.82766611490722!3d18.92699998717754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c73a0d5cad%3A0xc70a25a7209c733c!2sZaveri%20Bazaar!5e0!3m2!1sen!2sin!4v1645523456789!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg mb-6"
          ></iframe>
        </div>
      </div>

      {/* Store Locations */}
      <div className="grid md:grid-cols-3 gap-6">
        {stores.map((store) => (
          <div key={store.city} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">{store.city}</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-600 mt-1" />
                <span>{store.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-600" />
                <span>{store.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-600" />
                <span>contact@ratna.com</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;