import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../../static/data';
import styles from '../../styles/styles';

const Navbar = ({ active }) => {
  return (
    <div className={`md:${styles.noramlFlex}`}>
      {navItems &&
        navItems.map((i, index) => (
          <div className='flex'>
            <Link to={i.url} className='mx-2 px-3 xl:mx-3 xl:px-4'>
              <p
                className={`${
                  active === index + 1
                    ? 'text-[#673DE6] md:text-white underline underline-offset-8'
                    : 'text-gray-700 md:text-[#fff]'
                } text-lg pb-8 md:pb-0 hover:text-opacity-80 font-normal  cursor-pointer}`}
              >
                {i.title}
              </p>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
