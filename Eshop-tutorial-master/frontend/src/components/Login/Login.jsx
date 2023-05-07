import axios from 'axios';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { server } from '../../server';
import styles from '../../styles/styles';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `${server}/user/login-user`,
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success('Login Success!');
        navigate('/');
        window.location.reload(true);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className='min-h-screen bg-indigo-100/20 flex flex-col justify-center '>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='text-center text-4xl font-extrabold text-indigo-900 text-shadow-lg'>
          Login to your account
        </h2>
      </div>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-sm text-md hover:shadow-xl'>
        <div className='bg-white/90 ring-indigo-500 ring-1 py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form className='space-y-8' onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor='email'
                className='block font-medium text-gray-700'
              >
                Email address
              </label>
              <div className='mt-1'>
                <input
                  type='email'
                  name='email'
                  autoComplete='email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='hover:bg-indigo-100/10 appearance-none block w-full px-3 py-2 border border-indigo-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='password'
                className='block text-md font-medium text-gray-700'
              >
                Password
              </label>
              <div className='mt-1 relative'>
                <input
                  type={visible ? 'text' : 'password'}
                  name='password'
                  autoComplete='current-password'
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='w-full px-3 py-2 border border-indigo-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md hover:bg-indigo-100/10'
                />
                {visible ? (
                  <AiOutlineEye
                    className='absolute right-2 top-2 cursor-pointer text-indigo-400'
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className='absolute text-indigo-800 right-2 top-2 cursor-pointer'
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
              <div className={`${styles.noramlFlex} justify-between mt-2`}>
                <div className={`${styles.noramlFlex} `}>
                  <input
                    type='checkbox'
                    name='remember-me'
                    id='remember-me'
                    className='h-4 w-4 accent-indigo-600 text-indigo-600 focus:ring-indigo-800 border-indigo-400  rounded cursor-pointer'
                  />
                  <label
                    htmlFor='remember-me'
                    className='ml-2 block text-md text-gray-900 cursor-pointer'
                  >
                    Remember me
                  </label>
                </div>
                <div className='text-md'>
                  <a
                    href='.forgot-password'
                    className='font-medium text-indigo-600 hover:text-indigo-500'
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-lg  font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
              >
                Submit
              </button>
            </div>
            <div className={`${styles.noramlFlex} w-full`}>
              <h4>Not have any account?</h4>
              <Link to='/sign-up' className='text-indigo-700 pl-2'>
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
