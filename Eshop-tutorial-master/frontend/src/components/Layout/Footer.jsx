import React from 'react';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from '../../static/data';
import styles from '../../styles/styles';

const Footer = () => {
  return (
    <div className='bg-[#1C1D1F] text-white mt-8'>
      <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#673DE6] py-7'>
        <h1 className='text-3xl lg:text-5xl md:mb-0 mb-6 md:text-left text-center lg:leading-normal font-semibold'>
          Subscribe here
        </h1>
        <div className='flex sm:flex-row flex-col'>
          <input
            type='text'
            required
            placeholder='Enter your email...'
            className='text-gray-700 placeholder:text-[#673DE6]
                lg:w-96 md:w-80 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 sm:mb-0 py-2.5 rounded-lg pl-3 focus:outline-none'
          />
          <button className={`${styles.footerButton}`}>Submit</button>
        </div>
      </div>
      <div className='grid justify-items-center gap-1 mt-4 m-auto'>
        <img src='Images/Logo.png' alt='' className='invert w-44' />
        <p>The home and elements needeed to create beatiful products.</p>
      </div>
      <div className='grid grid-cols-1 xs:grid-cols-2 gap-8 p-8 sm:grid-cols-3 md:grid-cols-4 justify-items-center'>
        <ul className='text-center sm:text-start'>
          <h1 className='mb-1 font-semibold'>Company</h1>
          {footerProductLinks.map((link, index) => (
            <li key={index}>
              <Link
                className='text-gray-300 hover:text-white duration-300
                   text-sm cursor-pointer leading-6'
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className='text-center sm:text-start'>
          <h1 className='mb-1 font-semibold'>Shop</h1>
          {footercompanyLinks.map((link, index) => (
            <li key={index}>
              <Link
                className='text-gray-300 hover:text-white duration-300
                   text-sm cursor-pointer leading-6'
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className='text-center sm:text-start'>
          <h1 className='mb-1 font-semibold'>Support</h1>
          {footerSupportLinks.map((link, index) => (
            <li key={index}>
              <Link
                className='text-gray-300 hover:text-white duration-300
                   text-sm cursor-pointer leading-6'
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className='grid gap-4 md:col-span-1 md:grid-cols-1 col-span-full grid-cols-4'>
          <AiFillFacebook size={25} className='cursor-pointer' />
          <AiOutlineTwitter size={25} className='cursor-pointer' />
          <AiFillInstagram size={25} className='cursor-pointer' />
          <AiFillYoutube size={25} className='cursor-pointer' />
        </div>
      </div>

      <div className='grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 text-gray-300 text-sm pb-8'>
        <span>© 2023 Learn-ReactJS. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className='sm:col-span-full lg:col-span-1 md:col-span-full '>
          <img
            src='https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
