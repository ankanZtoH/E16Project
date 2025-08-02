import React from 'react'
import { FaCalendarAlt, FaGlobe } from 'react-icons/fa';

export function Webiner() {
  return (
      <div className="flex items-center justify-center p-6 space-x-10">

         {/* Card for person1 */}



      <div className="w-[350px] relative">
        {/* Yellow Background Image Card */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/e16classes_logo.png" // replace with your actual image path
            alt="Webinar Background"
            className="w-full h-[200px] object-cover"
          />

          {/* Speaker Image */}
          <div className="absolute right-4 bottom-0 z-100">
            <div className="relative">
              <img
                src="/sattik-da.jpg"
                alt="Speaker"
                className="w-28 h-28 rounded-full border-4 border-white relative z-10 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom White Card */}
        <div className="bg-white rounded-2xl shadow-md p-5 mt-6 relative z-10 -top-10 mx-2">
          <p className="text-xs font-semibold text-gray-500 mb-1">ONLINE</p>
          <h4 className="font-bold text-base text-gray-900 leading-snug mb-2">
            Breakups are hard: Unless you are an Unsupervised Model
          </h4>

          <div className="flex items-center text-sm text-gray-600 gap-4 mb-2">
            <div className="flex items-center gap-1">
              <FaCalendarAlt className="text-green-600" />
              <span>Sept 25, 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <FaGlobe className="text-green-600" />
              <span>e16class.com</span>
            </div>
          </div>

          <p className="text-sm text-gray-400">
            Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
          </p>
        </div>
      </div>
       

       {/* card for person 2 */}

      <div className="w-[350px] relative">
        {/* Yellow Background Image Card */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/e16classes_logo.png" // replace with your actual image path
            alt="Webinar Background"
            className="w-full h-[200px] object-cover"
          />

          {/* Speaker Image */}
          <div className="absolute right-4 bottom-0 z-100">
            <div className="relative">
              <img
                src="/sattik-da.jpg"
                alt="Speaker"
                className="w-28 h-28 rounded-full border-4 border-white relative z-10 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom White Card */}
        <div className="bg-white rounded-2xl shadow-md p-5 mt-6 relative z-10 -top-10 mx-2">
          <p className="text-xs font-semibold text-gray-500 mb-1">ONLINE</p>
          <h4 className="font-bold text-base text-gray-900 leading-snug mb-2">
            Breakups are hard: Unless you are an Unsupervised Model
          </h4>

          <div className="flex items-center text-sm text-gray-600 gap-4 mb-2">
            <div className="flex items-center gap-1">
              <FaCalendarAlt className="text-green-600" />
              <span>Sept 25, 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <FaGlobe className="text-green-600" />
              <span>e16class.com</span>
            </div>
          </div>

          <p className="text-sm text-gray-400">
            Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
          </p>
        </div>
      </div>

       {/* card for person 3 */}

      <div className="w-[350px] relative">
        {/* Yellow Background Image Card */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/e16classes_logo.png" // replace with your actual image path
            alt="Webinar Background"
            className="w-full h-[200px] object-cover"
          />

          {/* Speaker Image */}
          <div className="absolute right-4 bottom-0 z-100">
            <div className="relative">
              <img
                src="/sattik-da.jpg"
                alt="Speaker"
                className="w-28 h-28 rounded-full border-4 border-white relative z-10 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom White Card */}
        <div className="bg-white rounded-2xl shadow-md p-5 mt-6 relative z-10 -top-10 mx-2">
          <p className="text-xs font-semibold text-gray-500 mb-1">ONLINE</p>
          <h4 className="font-bold text-base text-gray-900 leading-snug mb-2">
            Breakups are hard: Unless you are an Unsupervised Model
          </h4>

          <div className="flex items-center text-sm text-gray-600 gap-4 mb-2">
            <div className="flex items-center gap-1">
              <FaCalendarAlt className="text-green-600" />
              <span>Sept 25, 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <FaGlobe className="text-green-600" />
              <span>e16class.com</span>
            </div>
          </div>

          <p className="text-sm text-gray-400">
            Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
          </p>
        </div>
      </div>
    </div>
  )
}
