import React, { useContext, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import appleIcon from '../../components/assets/apple.png';
import googleIcon from '../../components/assets/google.png';
import bck from "../../components/assets/bck.jpg";
import starx91 from '../../components/assets/starx91.jpg';
import { ProfileContext } from '../../context/ProfileContext.jsx';
import { auth, googleProvider, appleProvider, signInWithPopup, signInWithEmailAndPassword, sendPasswordResetEmail } from './firebaseConfig.jsx'; // Adjust the import path as needed

const Login = () => {
  const navigate = useNavigate();
  const { setProfileImg } = useContext(ProfileContext);
  const [resetEmail, setResetEmail] = useState('');
  const [isResetRequested, setIsResetRequested] = useState(false);
  const [message, setMessage] = useState('');

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const profileImgUrl = user.photoURL;
      setProfileImg(profileImgUrl); // Update profileImg in ProfileContext

      // Navigate to services if the email is verified
      if (user.emailVerified) {
        navigate('/services');
      } else {
        setMessage('Please verify your email before logging in.');
        await auth.signOut(); // Sign out if email is not verified
      }
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  const handleAppleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, appleProvider);
      const user = result.user;
      const profileImgUrl = user.photoURL;
      setProfileImg(profileImgUrl);

      // Navigate to services if the email is verified
      if (user.emailVerified) {
        navigate('/services');
      } else {
        setMessage('Please verify your email before logging in.');
        await auth.signOut(); // Sign out if email is not verified
      }
    } catch (error) {
      console.error("Apple sign-in error:", error);
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    const { username, password } = values;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      const user = userCredential.user;

      // Check email verification
      if (user.emailVerified) {
        navigate('/services');
      } else {
        setMessage('Please verify your email before logging in.');
        await auth.signOut(); // Sign out if email is not verified
      }
    } catch (error) {
      console.error('Error logging in with email and password:', error);
      alert('Login failed. Please check your email and password.');
    } finally {
      setSubmitting(false);
    }
  };

  const handlePasswordReset = async () => {
    if (resetEmail) {
      try {
        await sendPasswordResetEmail(auth, resetEmail);
        alert('Password reset email sent!');
        setIsResetRequested(false);
      } catch (error) {
        console.error('Error sending password reset email:', error);
        alert('Error sending password reset email');
      }
    } else {
      alert('Please enter your email address');
    }
  };

  return (
    <div className='bg-black min-[320px] h-full sm:w-screen sm:h-screen lg:h-full lg:w-screen'>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={Yup.object({
          username: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
        })}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <div className='bg-black min-[320px]:h-full sm:w-full sm:h-screen lg:h-screen lg:w-full'>
            <div className='flex justify-center content-center pt-4'>
              <img src={starx91} className='w-36 h-8 px-5'/>
            </div>
            <div className='flex max-w-screen min-[320px] flex-wrap-reverse place-content-center md:flex-wrap-reverse lg:flex-nowrap'>
              <div className='flex-row min-[320px] px-12 sm:px-28 mt-10 mb-5'>
                <h1 className='text-white text-2xl font-bold'>Welcome Back!</h1>
                <h2 className='text-white'>Your flights await. Log in and take off.</h2>

                <button
                  className='flex min-[320px] px-12 py-2 justify-center rounded-lg my-3 min-[320px] h-11 md:w-48 lg:w-72 border-solid border-2 border-zinc-800 hover:bg-zinc-900 hover:text-white gap-2'
                  onClick={signInWithGoogle}
                >
                  <div className='flex justify-center gap-2'>
                    <img src={googleIcon} alt="Google Icon" className='w-1/12 h-1/12 py-1'/>
                    <h1 className='gap-y-30 text-zinc-400 text-sm'>Login with Google</h1>
                  </div>
                </button>

                <button
                  className='flex min-[320px] px-12 py-2 justify-center rounded-lg my-3 min-[320px] h-11 md:w-48 lg:w-72 border-solid border-2 border-zinc-800 hover:bg-zinc-900 hover:text-white gap-2'
                  onClick={handleAppleSignIn}
                >
                  <div className='flex justify-center gap-2'>
                    <img src={appleIcon} alt="Apple Icon" className='w-1/12 h-1/12 py-1'/>
                    <h1 className='gap-y-30 text-zinc-400 text-sm'>Login with Apple</h1>
                  </div>
                </button>

                <Form>
                  <div className='flex flex-col gap-y-2 text-zinc-400'>
                    <label htmlFor="username">Username</label>
                    <Field name="username" type="email" placeholder="xyz@domain.com" className='min-[320px] h-9 md:w-48 lg:w-72 bg-zinc-900 rounded-lg p-3' />
                    <ErrorMessage name="username" />
                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" placeholder="At least 6 characters" className='min-[320px] h-9 md:w-48 lg:w-72 bg-zinc-900 rounded-lg p-3' />
                    <ErrorMessage name="password" />
                    <div className='flex justify-between'>
                      <div className='flex gap-1'>
                        <input type='checkbox' className='px-2 py-2 bg-green-300' />
                        <h1 className='text-zinc-500'>Remember me.</h1>
                      </div>
                      <button type="button" onClick={() => setIsResetRequested(true)} className='text-white text-sm'>Forgot Password?</button>
                    </div>
                    <button type="submit" className='bg-white text-black rounded-md h-10 gap-34 font-bold hover:bg-zinc-200 border-solid border-2 hover:border-zinc-700' disabled={isSubmitting}>
                      Login
                    </button>
                  </div>
                </Form>
                <div className='flex gap-2 text-sm'>
                  <h1 className='text-zinc-500'>Don't have an account? </h1>
                  <Link to="/" className='text-white'>Signup</Link>
                </div>
              </div>

              <div className='flex place-content-center'>
                <img src={bck} className='w-fit h-fit'/>
              </div>
            </div>

            {isResetRequested && (
              <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'>
                <div className='bg-white p-6 rounded-md'>
                  <h2 className='text-lg font-bold mb-4'>Reset Password</h2>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    className='w-full p-2 mb-4 border rounded'
                  />
                  <button
                    onClick={handlePasswordReset}
                    className='bg-blue-500 text-white p-2 rounded'
                  >
                    Send Password Reset Email
                  </button>
                  <button
                    onClick={() => setIsResetRequested(false)}
                    className='ml-2 p-2 border rounded'
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            {message && (
              <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'>
                <div className='bg-white p-6 rounded-md'>
                  <p className='text-lg'>{message}</p>
                  <button
                    onClick={() => setMessage('')}
                    className='mt-4 bg-blue-500 text-white p-2 rounded'
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
