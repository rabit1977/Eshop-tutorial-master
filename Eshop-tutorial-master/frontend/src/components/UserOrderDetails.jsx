import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsFillBagFill } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAllOrdersOfUser } from '../redux/actions/order';
import { backend_url, server } from '../server';
import styles from '../styles/styles';

const UserOrderDetails = () => {
  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [rating, setRating] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch]);

  const data = orders && orders.find((item) => item._id === id);

  const reviewHandler = async (e) => {
    await axios
      .put(
        `${server}/product/create-new-review`,
        {
          user,
          rating,
          comment,
          productId: selectedItem?._id,
          orderId: id,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success(res.data.message);
        dispatch(getAllOrdersOfUser(user._id));
        setComment('');
        setRating(null);
        setOpen(false);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const refundHandler = async () => {
    await axios
      .put(`${server}/order/order-refund/${id}`, {
        status: 'Processing refund',
      })
      .then((res) => {
        toast.success(res.data.message);
        dispatch(getAllOrdersOfUser(user._id));
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className={`py-4 min-h-screen ${styles.section}`}>
      <div className='w-full flex items-center justify-between'>
        <div className='flex items-center'>
          <BsFillBagFill size={35} color='crimson' />
          <h1 className='pl-2 text-3xl font-bold'>Order Details</h1>
        </div>
      </div>

      <div className='w-full flex items-center justify-between pt-6'>
        <h5 className='text-slate-600'>
          Order ID: <span>#{data?._id?.slice(0, 8)}</span>
        </h5>
        <h5 className='text-slate-600'>
          Placed on: <span>{data?.createdAt?.slice(0, 10)}</span>
        </h5>
      </div>

      {/* order items */}
      {data &&
        data?.cart.map((item, index) => {
          return (
            <div className='flex justify-between  my-8'>
              <div className='flex'>
                <img
                  src={`${backend_url}/${item.images[0]}`}
                  alt=''
                  className='w-20 h-20'
                />
                <div className='w-full'>
                  <h5 className='pl-3 text-xl font-medium'>{item.name}</h5>
                  <h5 className='pl-3 text-md text-slate-500'>
                    US${item.discountPrice} x {item.qty}
                  </h5>
                </div>
              </div>
              {!item.isReviewed && data?.status === 'Delivered' ? (
                <div
                  className={`${styles.button}  text-[#fff]`}
                  onClick={() => setOpen(true) || setSelectedItem(item)}
                >
                  <button>Write a review</button>
                </div>
              ) : null}
            </div>
          );
        })}

      {/* review popup */}
      {open && (
        <div className='w-full fixed top-0 left-0 h-screen bg-[#0005] z-50 flex items-center justify-center'>
          <div className='w-1/2 h-min bg-[#fff] shadow rounded-md p-4'>
            <div className='w-full flex justify-end pr-4'>
              <RxCross1
                size={30}
                onClick={() => setOpen(false)}
                className='cursor-pointer'
              />
            </div>
            <div className='space-y-6'>
              <h2 className='text-[30px] font-[500] font-Poppins text-center'>
                Give a Review
              </h2>
              <br />
              <div className='w-full flex pb-2 pl-2'>
                <img
                  src={`${backend_url}/${selectedItem?.images[0]}`}
                  alt=''
                  className='w-[80px] h-[80px]'
                />
                <div>
                  <div className='pl-3 text-[20px]'>{selectedItem?.name}</div>
                  <h4 className='pl-3 text-[20px]'>
                    US${selectedItem?.discountPrice} x {selectedItem?.qty}
                  </h4>
                </div>
              </div>
              {/* ratings */}
              <div className='w-full p-2'>
                <h5 className='text-xl  font-medium'>
                  Give a Rating <span className='text-red-500'>*</span>
                </h5>
                <div className='flex w-full -ml-0.5 pb-2'>
                  {[1, 2, 3, 4, 5].map((i) =>
                    rating >= i ? (
                      <AiFillStar
                        key={i}
                        className='mr-1 cursor-pointer'
                        color='rgb(246,186,0)'
                        size={25}
                        onClick={() => setRating(i)}
                      />
                    ) : (
                      <AiOutlineStar
                        key={i}
                        className='mr-1 cursor-pointer'
                        color='rgb(246,186,0)'
                        size={25}
                        onClick={() => setRating(i)}
                      />
                    )
                  )}
                </div>
                <label className='block text-xl font-medium mt-3'>
                  Write a comment
                  <span className='ml-1 font-[400] text-[16px] text-[#00000052]'>
                    (optional)
                  </span>
                </label>
                <textarea
                  name='comment'
                  id=''
                  cols='20'
                  rows='5'
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder='How was your product? write your expresion about it!'
                  className='mt-2 w-[95%] border p-2 outline-none'
                ></textarea>
              </div>
              <div
                className={`${styles.button} text-white text-[20px] ml-3`}
                onClick={rating > 1 ? reviewHandler : null}
              >
                Submit
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='border-t w-full text-right'>
        <h5 className='pt-3 text-[18px]'>
          Total Price: <strong>US${data?.totalPrice}</strong>
        </h5>
      </div>
      <br />
      <br />
      <div className='w-full md:flex items-center'>
        <div className='w-full md:w-[60%]'>
          <h4 className='pt-3 text-[20px] font-[600]'>Shipping Address:</h4>
          <h4 className='pt-3 text-[20px]'>
            {data?.shippingAddress.address1 +
              ' ' +
              data?.shippingAddress.address2}
          </h4>
          <h4 className=' text-[20px]'>{data?.shippingAddress.country}</h4>
          <h4 className=' text-[20px]'>{data?.shippingAddress.city}</h4>
          <h4 className=' text-[20px]'>{data?.user?.phoneNumber}</h4>
        </div>
        <div className='w-full md:w-[40%]'>
          <h4 className='pt-3 text-[20px]'>Payment Info:</h4>
          <h4>
            Status:{' '}
            {data?.paymentInfo?.status ? data?.paymentInfo?.status : 'Not Paid'}
          </h4>
          <br />
          {data?.status === 'Delivered' && (
            <div
              className={`${styles.button} text-white`}
              onClick={refundHandler}
            >
              Give a Refund
            </div>
          )}
        </div>
      </div>
      <br />
      <Link to='/'>
        <div className={`${styles.button} text-white`}>Send Message</div>
      </Link>
      <br />
      <br />
    </div>
  );
};

export default UserOrderDetails;
