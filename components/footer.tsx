'use client';

import TeamModal from '@/app/TeamModal';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo and description */}
        <div>
          <div className='flex items-center space-x-2 mb-3'>
                <img src="/e16classes_logo.png" alt="e16 logo" className="h-[50px] rounded-[10px]"/>
                <h2 className="dark:text-blue-500 text-blue-800 font-bold">e<sup>16</sup>classes</h2>
            </div>
          <p className="text-sm text-gray-400">Empowering students through quality education and guidance.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Webinars</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-red-500"><FaYoutube /></a>
          </div>
          <div className='mt-5'>
            <TeamModal/>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} E16 Education. All rights reserved.
      </div>
    </footer>
  );
}
