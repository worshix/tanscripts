import { FaPhone, FaWhatsapp, FaEnvelope, FaFacebook } from 'react-icons/fa';
import ContactUs from './ContactUs';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

const page = () => {
  return (
    <main className="overflow-x-hidden bg-gray-300">
      {/* Page Heading */}
      <h1 className="text-4xl sm:text-5xl font-semibold mt-6 sm:my-12 text-center text-main-600">
        Contact Us
      </h1>
          {/* Contact Form */}
          <ContactUs />
      {/* Contact Options Section */}
      <section className="flex items-center justify-center my-12 p-2">
        <div className="flex flex-col md:flex-row lg:flex-col gap-10 text-center sm:text-left items-center justify-center max-w-4xl w-full">
          
          {/* Connect With Us */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-1/3">
            <h4 className="text-xl font-semibold text-gray-700 mb-4">Connect With Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+263713664345" className="flex items-center gap-2 text-main-600 hover:text-main-800">
                  <FaPhone className="text-xl" /> Phone: +263713664345
                </a>
              </li>
              <li>
                <a href="https://wa.me/263713664345" className="flex items-center gap-2 text-green-600 hover:text-green-800">
                  <FaWhatsapp className="text-xl" /> WhatsApp: +263713664345
                </a>
              </li>
            </ul>
          </div>

          {/* Mail */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-1/3">
            <h4 className="text-xl font-semibold text-gray-700 mb-4">Mail</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:transcripts@gmail.com" className="flex items-center gap-2 text-main-600 hover:text-blue-800">
                  <FaEnvelope className="text-xl" /> transcripts@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-1/3">
            <h4 className="text-xl font-semibold text-gray-700 mb-4">Follow Us</h4>
            <div className="flex justify-center gap-6 text-2xl">
              <Link href='https://www.facebook.com/profile.php?id=61564240952795&mibextid=ZbWKwL'>
                <span className="text-main-600 hover:text-main-800">
                  <FaFacebook size={30} />
                </span>
              </Link>
            </div>
          </div>

        </div>
      </section>
      <section className='bg-main-600 py-16'>
        <ContactForm />
      </section>
    </main>
  );
};

export default page;
