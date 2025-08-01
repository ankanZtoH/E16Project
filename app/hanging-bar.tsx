'use client';

import React from 'react';

export default function HangingBanner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <style>
        {`
          @keyframes swing {
            0% { transform: rotate(6deg); }
            50% { transform: rotate(-6deg); }
            100% { transform: rotate(6deg); }
          }
        `}
      </style>

      <div className="absolute top-[200px]">
        {/* Dot at top center */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 z-0">
          <div className="w-3 h-3 bg-[#656565] rounded-full mx-auto mb-1" />
        </div>

        {/* Swinging group: lines + banner */}
        <div
          className="absolute left-1/2 top-[5px] transform -translate-x-1/2"
          style={{
            animation: 'swing 2s ease-in-out infinite',
            transformOrigin: 'top center',
          }}
        >
          {/* Longer hanging lines */}
          <svg width="160" height="200">
            <line x1="80" y1="0" x2="-10" y2="175" stroke="#656565" strokeWidth="2" />
            <line x1="80" y1="0" x2="165" y2="170" stroke="#656565" strokeWidth="2" />
          </svg>

          {/* Move banner down to match line ends */}
          <div
            className="absolute top-[155px] left-1/2 w-[280px] transform -translate-x-1/2 bg-orange-500 text-white font-bold text-lg px-6 py-2 text-center border-2 border-dashed border-white shadow-md rounded-sm"
          >
            Explore Test Series
          </div>
        </div>
      </div>
    </div>
  );
}
