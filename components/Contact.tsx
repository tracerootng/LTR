import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-emerald-100 text-[#008753] px-4 py-2 rounded-full text-sm font-bold mb-6"
          >
            <MessageSquare size={16} />
            <span className="uppercase tracking-wider">Get in Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            Contact <span className="text-[#008753]">Us</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            We would be happy to provide answers to your questions and if you would like to collaborate with us, please visit our office address or contact us using the links below.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-[#008753] shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Office Address</h4>
                  <p className="text-gray-600 leading-relaxed">
                    No. 30 Da Chibi Rwang Street<br />
                    Rayfield, Jos<br />
                    Plateau State<br />
                    Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-[#008753] shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Mailing Address</h4>
                  <p className="text-gray-600 leading-relaxed">
                    P. O. Box 759 Bukuru<br />
                    Jos, Plateau State<br />
                    Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-[#008753] shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Contact Details</h4>
                  <a href="mailto:info@ltrnigeria.org" className="block text-gray-600 hover:text-[#008753] transition-colors mb-1">
                    info@ltrnigeria.org
                  </a>
                  <a href="tel:+2349094977500" className="block text-gray-600 hover:text-[#008753] transition-colors mb-1">
                    +234 909 497 7500
                  </a>
                  <a href="tel:+2348056377735" className="block text-gray-600 hover:text-[#008753] transition-colors">
                    +234 805 637 7735
                  </a>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#008753]/5 rounded-bl-[100px] -z-10"></div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#008753]/20 focus:border-[#008753] outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#008753]/20 focus:border-[#008753] outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#008753]/20 focus:border-[#008753] outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#008753]/20 focus:border-[#008753] outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#008753] hover:bg-[#006e43] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#E67E22]/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Contact;
