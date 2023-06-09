import React, { useState } from 'react';
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { BiMenuAltLeft } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FaOpencart } from 'react-icons/fa';
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosHeartEmpty,
  IoIosMenu,
} from 'react-icons/io';
import { RxCross1 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { backend_url } from '../../server';
import { categoriesData } from '../../static/data';
import styles from '../../styles/styles';
import Wishlist from '../Wishlist/Wishlist';
import Cart from '../cart/Cart';
import DropDown from './DropDown';
import Navbar from './Navbar';

const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSearchChange = (e) => {
    e.preventDefault();
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      allProducts &&
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  window.addEventListener('scroll', () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div className={`${styles.section}`}>
        <div className='hidden md:h-16 md:my-[20px] md:flex items-center justify-between'>
          <div className='hover:scale-x-[103%] transition easy-in-out duration-150'>
            <Link to='/'>
              <img src='/Images/Logo.png' alt='' className='w-44' />
            </Link>
          </div>
          {/* search box */}
          <div className='w-1/2 relative'>
            <input
              type='text'
              placeholder='Search Product...'
              value={searchTerm}
              onChange={handleSearchChange}
              className='h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md'
            />
            <AiOutlineSearch
              size={30}
              className='absolute right-2 top-1.5 cursor-pointer'
            />
            {searchData && searchData.length !== 0 ? (
              <div className='absolute min-h-auto border rounded-b-lg bg-slate-50 shadow-md z-10'>
                {searchData &&
                  searchData.map((i, index) => {
                    return (
                      <Link to={`/product/${i._id}`}>
                        <div className='hover:bg-indigo-200/70 p-1'>
                          <div className='w-full flex items-center mx-3 my-1'>
                            <img
                              src={`${backend_url}${i.images[0]}`}
                              alt=''
                              className='w-12 h-12 mr-[10px]'
                            />
                            <h1>{i.name}</h1>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>

          <div className={`${styles.button} group`}>
            <Link to={`${isSeller ? '/dashboard' : '/shop-create'}`}>
              <h1 className='text-[#fff] flex items-center'>
                {isSeller ? 'Go Dashboard' : 'Become Seller'}{' '}
                <IoIosArrowForward
                  size={20}
                  className=' transition ease-in duration-100  group-hover:translate-x-1 w-8 hover:text-lg'
                />
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active === true ? 'shadow-sm fixed top-0 left-0 z-10' : null
        } transition hidden md:flex items-center justify-between w-full bg-[#673DE6] h-16`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          {/* categories */}
          <div onClick={() => setDropDown(!dropDown)}>
            <div className='relative  h-12 mt-3.5 w-64 hidden lg:block'>
              <IoIosMenu size={30} className='absolute  top-3 left-2' />
              <button
                className={`h-full w-full flex justify-between items-center pl-12 bg-white font-sans text-lg font-normal select-none rounded-t-md`}
              >
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className='absolute right-3 top-5 cursor-pointer'
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          {/* navitems */}
          <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>

          <div className='flex flex-1 justify-end lg:flex-none'>
            <div className={`${styles.noramlFlex}`}>
              <div
                className='relative cursor-pointer mr-[15px] hover:opacity-90'
                onClick={() => setOpenWishlist(true)}
              >
                <IoIosHeartEmpty size={30} color='rgb(255 255 255 / 83%)' />
                <span className='absolute rounded-full bg-red-600 w-5 h-5 flex items-center justify-center -top-1 -right-1 p-0 m-0 text-white font-mono text-sm leading-tight text-center'>
                  {wishlist && wishlist.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div
                className='relative cursor-pointer mr-[15px] hover:opacity-90'
                onClick={() => setOpenCart(true)}
              >
                <FaOpencart size={30} color='rgb(255 255 255 / 83%)' />
                <span className='absolute rounded-full bg-red-600 w-5 h-5 flex items-center justify-center -top-1 -right-1 p-0 m-0 text-white font-mono text-sm leading-tight text-center'>
                  {cart && cart.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className='relative cursor-pointer mr-[15px]'>
                {isAuthenticated ? (
                  <Link to='/profile'>
                    <img
                      src={`${backend_url}${user.avatar}`}
                      className='w-[35px] h-[35px] rounded-full'
                      alt=''
                    />
                  </Link>
                ) : (
                  <Link to='/login'>
                    <CgProfile size={30} color='rgb(255 255 255 / 83%)' />
                  </Link>
                )}
              </div>
            </div>

            {/* cart popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/* wishlist popup */}
            {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null}
          </div>
        </div>
      </div>

      {/* mobile header */}
      <div
        className={`${
          active === true ? 'shadow-sm fixed top-0 left-0 z-10' : null
        }
      w-full bg-[#fff] p-3 border-b shadow-lg md:hidden`}
      >
        <div className='w-full flex items-center justify-between'>
          <div className='bg-gray-100/90 hover:bg-gray-200/80 transition duration-200 ease-in-out p-1 rounded-full'>
            <BiMenuAltLeft
              size={40}
              className=''
              onClick={() => setOpen(true)}
            />
          </div>
          <div>
            <Link to='/'>
              <img
                src='Images/Logo.png'
                alt=''
                className=' w-36 cursor-pointer'
              />
            </Link>
          </div>
          <div>
            <div
              className='relative mr-5 bg-gray-100/90 hover:bg-gray-200/80 transition duration-200 ease-in-out p-2 rounded-full'
              onClick={() => setOpenCart(true)}
            >
              <AiOutlineShoppingCart size={30} />
              <span class='absolute flex items-center justify-center -right-1 -top-1 rounded-full bg-[#5624D0] w-5 h-5 p-0 m-0 text-white font-mono text-xs  leading-tight text-center'>
                {cart && cart.length}
              </span>
            </div>
          </div>
          {/* cart popup */}
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

          {/* wishlist popup */}
          {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
        </div>

        {/* header sidebar */}
        {open && (
          <div
            className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
          >
            <div className='fixed w-[70%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll'>
              <div className='w-full justify-between flex pr-3'>
                <div>
                  <div className='relative mr-[15px]'>
                    <AiOutlineHeart size={30} className='mt-5 ml-3' />
                    <span class='absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center'>
                      {wishlist && wishlist.length}
                    </span>
                  </div>
                </div>
                <RxCross1
                  size={30}
                  className='ml-4 mt-5'
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className='my-8 w-[92%] m-auto h-[40px relative]'>
                <input
                  type='search'
                  placeholder='Search Product...'
                  className='h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md'
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                {searchData && (
                  <div className='absolute bg-[#fff] z-10 shadow w-full left-0 p-3'>
                    {searchData.map((i) => {
                      const d = i.name;

                      const Product_name = d.replace(/\s+/g, '-');
                      return (
                        <Link to={`/product/${Product_name}`}>
                          <div className='flex items-center'>
                            <img
                              src={i.image_Url?.[0].url}
                              alt=''
                              className='w-[50px] mr-2'
                            />
                            <h5>{i.name}</h5>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Navbar active={activeHeading} />
              <div className={`${styles.button} ml-4 !rounded-[4px]`}>
                <Link to='/shop-create'>
                  <h1 className='text-[#fff] flex items-center'>
                    Become Seller <IoIosArrowForward className='ml-1' />
                  </h1>
                </Link>
              </div>
              <br />
              <br />
              <br />

              <div className='flex w-full justify-center'>
                {isAuthenticated ? (
                  <div>
                    <Link to='/profile'>
                      <img
                        src={`${backend_url}${user.avatar}`}
                        alt=''
                        className='w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]'
                      />
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link
                      to='/login'
                      className='text-[18px] pr-[10px] text-[#000000b7]'
                    >
                      Login /
                    </Link>
                    <Link
                      to='/sign-up'
                      className='text-[18px] text-[#000000b7]'
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
