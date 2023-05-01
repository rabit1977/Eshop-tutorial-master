import React from 'react';
import { useNavigate } from 'react-router-dom';
import { brandingData, categoriesData } from '../../../static/data';
import styles from '../../../styles/styles';

const Categories = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`${styles.section} hidden sm:block`}>
        <div
          className={`branding my-12 flex items-center justify-between shadow-sm border bg-white p-5 rounded-md`}
        >
          {brandingData &&
            brandingData.map((i, index) => (
              <div
                className='lg:flex-row lg:text-left flex items-center flex-col space-y-2  text-center'
                key={index}
              >
                <span>{i.icon}</span>
                <div className='px-3'>
                  <h3 className='font-bold text-sm md:text-base'>{i.title}</h3>
                  <p className='text-xs md:text-sm'>{i.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div
        className={`${styles.section} bg-white p-6 rounded-lg mb-12`}
        id='categories'
      >
        <div className=' grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 2xl:grid-cols-5 xl:gap-6 gap-3'>
          {categoriesData &&
            categoriesData.map((i) => {
              const handleSubmit = (i) => {
                navigate(`/products?category=${i.title}`);
              };
              return (
                <div
                  className='w-full bg-gray-100 p-4 rounded-md h-[100px] flex items-center justify-between cursor-pointer overflow-hidden'
                  key={i.id}
                  onClick={() => handleSubmit(i)}
                >
                  <h5 className={`text-[18px] leading-[1.3]`}>{i.title}</h5>
                  <img
                    src={i.image_Url}
                    className='w-[120px] object-cover'
                    alt=''
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Categories;
