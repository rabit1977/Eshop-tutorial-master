import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { IoBagHandleOutline } from 'react-icons/io5';
import { BsCartPlus } from 'react-icons/bs';
import styles from '../../styles/styles';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../../redux/actions/wishlist';
import { backend_url } from '../../server';
import { addTocart } from '../../redux/actions/cart';

const Wishlist = ({ setOpenWishlist }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const removeFromWishlistHandler = (data) => {
    dispatch(removeFromWishlist(data));
  };

  const addToCartHandler = (data) => {
    const newData = { ...data, qty: 1 };
    dispatch(addTocart(newData));
    setOpenWishlist(false);
  };

  return (
    <div className='fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10'>
      <div className='fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm'>
        {wishlist && wishlist.length === 0 ? (
          <div className='w-full h-screen flex items-center justify-center'>
            <div className='flex w-full justify-end pt-5 pr-5 fixed top-3 right-3'>
              <RxCross1
                size={25}
                className='cursor-pointer'
                onClick={() => setOpenWishlist(false)}
              />
            </div>
            <h5>Wishlist Items is empty!</h5>
          </div>
        ) : (
          <>
            <div>
              <div className='flex w-full justify-end pt-5 pr-5'>
                <RxCross1
                  size={25}
                  className='cursor-pointer'
                  onClick={() => setOpenWishlist(false)}
                />
              </div>
              {/* Item length */}
              <div className={`${styles.noramlFlex} p-4`}>
                <AiOutlineHeart size={25} />
                <h5 className='pl-2 text-[20px] font-[500]'>
                  {wishlist && wishlist.length} items
                </h5>
              </div>

              {/* cart Single Items */}
              <br />
              <div className='w-full border-t'>
                {wishlist &&
                  wishlist.map((i, index) => (
                    <CartSingle
                      key={index}
                      data={i}
                      removeFromWishlistHandler={removeFromWishlistHandler}
                      addToCartHandler={addToCartHandler}
                    />
                  ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const CartSingle = ({ data, removeFromWishlistHandler, addToCartHandler }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.discountPrice * value;

  return (
    <div className='border-b last:border-0 p-4'>
      <div className='w-full flex flex-col space-y-4'>
        <div className='relative flex items-center justify-between'>
          <img
            src={`${backend_url}${data?.images[0]}`}
            alt=''
            className='w-28 h-28 object-contain rounded-md'
          />
          <RxCross1
            className='cursor-pointer absolute top-2 text-xl right-4'
            onClick={() => removeFromWishlistHandler(data)}
          />
        </div>
        <div className='flex items-center justify-between'>
          <div className='pl-2'>
            <h1>{data.name}</h1>
            <h4 className='font-[600] text-lg text-[#d02222] font-Roboto'>
              {totalPrice}$
            </h4>
          </div>
          <div>
            <BsCartPlus
              size={40}
              className='cursor-pointer border hover:bg-red-200 rounded-full trasnsition ease-in-out duration-200 bg-red-100 p-2'
              tile='Add to cart'
              fill='red'
              onClick={() => addToCartHandler(data)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
