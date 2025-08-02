'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

const creators = [
  {
    name: 'Sattik Da',
    qualification: 'Msc. in Data Science',
    image: '/e16classes_logo.png', // optional, use placeholder
    bio: 'Frontend Developer & Designer',
  },
  {
    name: 'Arnab Bera',
    qualification: 'Msc. in Data Science',
    image: '/e16classes_logo.png',
    bio: 'Backend Developer & Database Expert',
  },
  {
    name: 'Sourav Da',
    qualification: 'B.Sc in IT',
    image: '/e16classes_logo.png',
    bio: 'UI/UX Designer',
  },
];

export default function TeamModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-sm text-white bg-blue-600 px-4 py-2 cursor-pointer rounded-[10px] hover:bg-blue-700 transition"
      >
        Meet the Creators
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <Dialog.Title className="text-xl font-bold text-gray-800 mb-4 text-center">
                  Meet the Creators of E16
                </Dialog.Title>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {creators.map((creator, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl shadow-sm"
                    >
                      <img
                        src={creator.image}
                        alt={creator.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{creator.name}</h3>
                        <p className="text-sm text-gray-500">{creator.qualification}</p>
                        <p className="text-xs text-gray-400">{creator.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-6">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-6 py-2 bg-red-500 text-white rounded-[15px] cursor-pointer hover:bg-red-600"
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
