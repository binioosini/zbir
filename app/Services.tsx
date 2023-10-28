import React from 'react';
import { MdDeveloperMode } from 'react-icons/md';
import { SiHiveBlockchain } from 'react-icons/si';
import { AiOutlineFieldTime } from 'react-icons/ai';

type Props = {};

export default function Services (props: Props) {
  const services = [
    {
      icon: <SiHiveBlockchain size={28} color="pink" />,
      title: 'Blockchain development',

    },
    {
      icon: <MdDeveloperMode size={28} color="blue" />,
      title: 'Clean & Organised Code',

    },
    {
      icon: <AiOutlineFieldTime size={28} color="yellow" />,
      title: 'Fast Delivery Code',
    },
  ];

  return (
    <div className="w-10/12 mx-auto">
      <h1 className="md:text-4xl text-3xl lg:text-5xl font-bold mb-10">
        Services
      </h1>
      <div className="flex flex-wrap gap-6 justify-between">
        {services.map((service, index) => (
          <div
            className="d p-5 relative overflow-hidden mt-5"
            key={index}
          >
            <h1 className="text-center mt-5">{service.title}</h1>
            <div className="flex justify-center mt-4 md-10">
              {service.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
