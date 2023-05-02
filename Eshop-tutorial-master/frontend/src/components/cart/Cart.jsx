import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { IoBagHandleOutline } from 'react-icons/io5';
import { HiOutlineMinus, HiPlus } from 'react-icons/hi';
import styles from '../../styles/styles';
import { Link } from 'react-router-dom';
import { backend_url } from '../../server';
import { useDispatch, useSelector } from 'react-redux';
import { addTocart, removeFromCart } from '../../redux/actions/cart';
import { toast } from 'react-toastify';

const Cart = ({ setOpenCart }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCartHandler = (data) => {
    dispatch(removeFromCart(data));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.qty * item.discountPrice,
    0
  );

  const quantityChangeHandler = (data) => {
    dispatch(addTocart(data));
  };

  return (
    <div className='fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10'>
      <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
        {cart && cart.length === 0 ? (
          <div className='w-full h-screen flex items-center justify-center'>
            <div className='flex w-full justify-end pt-5 pr-5 fixed top-3 right-4'>
              <RxCross1
                size={25}
                className='cursor-pointer'
                onClick={() => setOpenCart(false)}
              />
            </div>
            <h5 className='text-lg underline underline-offset-4'>
              Cart Items is empty!
            </h5>
          </div>
        ) : (
          <>
            <div>
              <div className='flex pb-8'>
                <div className='relative flex w-full justify-end p-4 items-center  '>
                  {/* Item length */}
                  <div
                    className={`${styles.noramlFlex} p-4 absolute top-12 left-4`}
                  >
                    <IoBagHandleOutline size={25} />
                    <h5 className='pl-2 text-[20px] font-[500]'>
                      {cart && cart.length} items
                    </h5>
                  </div>
                  <RxCross1
                    size={25}
                    className='cursor-pointer'
                    onClick={() => setOpenCart(false)}
                  />
                </div>
              </div>

              {/* cart Single Items */}
              <br />
              <div className='w-full border-t'>
                {cart &&
                  cart.map((i, index) => (
                    <CartSingle
                      key={index}
                      data={i}
                      quantityChangeHandler={quantityChangeHandler}
                      removeFromCartHandler={removeFromCartHandler}
                    />
                  ))}
              </div>
            </div>

            <div className='px-5 mb-3'>
              {/* checkout buttons */}
              <Link to='/checkout'>
                <div
                  className={`h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]`}
                >
                  <h1 className='text-[#fff] text-[18px] font-[600]'>
                    Checkout Now - {totalPrice}$ <small>usd</small>
                  </h1>
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler }) => {
  const [value, setValue] = useState(data.qty);
  const totalPrice = data.discountPrice * value;

  const increment = (data) => {
    if (data.stock < value) {
      toast.error('Product stock limited!');
    } else {
      setValue(value + 1);
      const updateCartData = { ...data, qty: value + 1 };
      quantityChangeHandler(updateCartData);
    }
  };

  const decrement = (data) => {
    setValue(value === 1 ? 1 : value - 1);
    const updateCartData = { ...data, qty: value === 1 ? 1 : value - 1 };
    quantityChangeHandler(updateCartData);
  };

  return (
    <div className='relative border-b p-4'>
      <RxCross1
        className='cursor-pointer flex float-right mb-2'
        onClick={() => removeFromCartHandler(data)}
      />
      <div className=' w-full flex flex-col space-y-4'>
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            <img
              src={`${backend_url}${data?.images?.[0]}`}
              alt=''
              className='w-28 h-28 object-contain'
            />
            <div className='flex flex-col justify-center space-y-2'>
              <h1 className='text-medium font-semibold hover:underline hover:underline-offset-4'>
                {data?.name}
              </h1>
              <div className='flex flex-col'>
                <small className=' text-slate-500 font-Roboto'>
                  {totalPrice}$ * {data.qty}
                </small>
                <h4 className='font-[600] text-base text-[#d02222] font-Roboto'>
                  {totalPrice}
                  <small>$</small>-
                  <small>(usd)</small>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-around'>
          <div className='flex items-center'>
            <div
              className={`bg-[#e44343] hover:opacity-80 rounded-full w-8 h-8 ${styles.noramlFlex} justify-center cursor-pointer`}
              onClick={() => increment(data)}
            >
              <HiPlus size={18} color='#fff' />
            </div>
            <span className='px-3'>{data.qty}</span>
            <div
              className='bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer'
              onClick={() => decrement(data)}
            >
              <HiOutlineMinus size={18} color='#7d879c' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
