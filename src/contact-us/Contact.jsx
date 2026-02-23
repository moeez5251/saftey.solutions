import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Twitter } from 'lucide-react';
import SEO from '../components/SEO';

function Contact() {
  const siteUrl = "https://www.sssafetysolutions.com";
  const contactUrl = `${siteUrl}/contact`;

  const breadcrumbs = [
    { name: "Home", url: siteUrl },
    { name: "Contact Us", url: contactUrl }
  ];

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact SS Safety Solutions",
    "description": "Get in touch with SS Safety Solutions for premium safety equipment inquiries. Call, email, or visit us in Pakistan.",
    "url": contactUrl,
    "publisher": {
      "@type": "Organization",
      "name": "SS Safety Solutions"
    }
  };

  return (
    <>
      <SEO
        title="Contact Us | SS Safety Solutions - Safety Equipment Pakistan"
        description="Get in touch with SS Safety Solutions for premium safety equipment inquiries. Call us at +92 334 7616779 or email info@sssafetysolutions.com. Nationwide delivery in Pakistan."
        keywords="contact SS Safety Solutions, safety equipment Pakistan, fire fighting equipment contact, PPE supplier Pakistan, safety gear inquiry"
        url={contactUrl}
        image={`${siteUrl}/contact-og.jpg`}
        type="website"
        breadcrumbs={breadcrumbs}
        schema={[contactSchema]}
      />
      {/* Hero Section */}
      <section className="relative py-24 md:py-36 overflow-hidden bg-gradient-to-br from-gray-900 via-red-900/40 to-gray-900">
        <div className="absolute inset-0 bg-black/50"></div>
        <img
          src="https://media.istockphoto.com/id/2202739604/photo/brave-firefighter-battling-flames-in-smoky-scene.jpg?s=612x612&w=0&k=20&c=d4u_iYVsLrMv0LT-Gku9xQ7KgrN22hBAgit5hvARR88="
          alt="Brave Firefighters in Action"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-wider mb-8 drop-shadow-2xl"
          >
            Contact <span className="text-orange-500">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
          >
            We're here to assist you with expert safety solutions. Get in touch today.
          </motion.p>
        </div>
      </section>

      {/* Contact Details & Map Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-red-50/30 to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-center text-red-800 uppercase tracking-wider mb-16"
          >
            Get in Touch
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Info */}
            <div className="space-y-8">
              {/* Address */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="w-10 h-10 text-red-700" />
                  <h3 className="text-2xl font-bold text-red-700">Our Location</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  SS.SAFETY SOLUTIONS<br />
                  123 Safety Street, Industrial Area<br />
                  New Delhi - 110020, India
                </p>
              </motion.div>

              {/* Phone & Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition"
                >
                  <Phone className="w-12 h-12 text-red-700 mx-auto mb-4" />
                  <p className="text-xl font-bold text-gray-800">+91 98765 43210</p>
                  <p className="text-gray-600">Call us anytime</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition"
                >
                  <Mail className="w-12 h-12 text-red-700 mx-auto mb-4" />
                  <p className="text-xl font-bold text-gray-800">info@sssafety.in</p>
                  <p className="text-gray-600">24/7 Email Support</p>
                </motion.div>
              </div>

              {/* Working Hours */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-xl p-8 text-center"
              >
                <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-red-700 mb-3">Working Hours</h3>
                <p className="text-lg text-gray-700">
                  Monday - Saturday: 9:00 AM - 7:00 PM<br />
                  Sunday: Closed
                </p>
              </motion.div>
            </div>

            {/* Right: Map + Images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              {/* Fixed & Responsive Map with Original Location */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="relative pt-[75%]"> {/* Responsive 4:3 aspect ratio - perfect for maps */}
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://maps.google.com/maps?q=31.5204,74.3587&hl=en&z=15&output=embed"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SS.SAFETY SOLUTIONS Location"
                  ></iframe>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <img
                  src="https://aiefire.com/wp-content/uploads/2020/10/AIE-Fire-Exit-FIre-Safety-System-AdobeStock_161189679.webp"
                  alt="Our Safety Store"
                  className="rounded-xl shadow-xl object-cover h-56 w-full hover:scale-105 transition"
                />
                <img
                  src="https://thumbs.dreamstime.com/b/fire-team-sitting-unfirom-occupation-safety-suit-fighting-professional-firefighter-people-221048999.jpg"
                  alt="Our Team"
                  className="rounded-xl shadow-xl object-cover h-56 w-full hover:scale-105 transition"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Decent & Clean Connect Section - WhatsApp Button Toned Down */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-red-700 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-extrabold uppercase tracking-wider mb-10"
          >
            Connect With Us
          </motion.h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            {/* Decent WhatsApp Button */}
            <motion.a
              href="https://wa.me/923347616779?text=Hi%20I%20am%20MR-sufiyan%20CEO%20of%20SS.%20Safety%20Solution.%20How%20can%20I%20help%20you"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-4 bg-green-600 hover:bg-green-700 px-8 py-5 rounded-full font-bold text-xl shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-10 h-10" />
              Chat on WhatsApp
            </motion.a>

            {/* Social Icons - Clean & Simple */}
            <div className="flex gap-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="p-4 bg-white/20 rounded-full hover:bg-white/30 transition"
              >
                <Facebook className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="p-4 bg-white/20 rounded-full hover:bg-white/30 transition"
              >
                <Instagram className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="p-4 bg-white/20 rounded-full hover:bg-white/30 transition"
              >
                <Twitter className="w-8 h-8" />
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;