import React, { useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import bck from "../../components/assets/bck.jpg";
import starx91 from '../../components/assets/starx91.jpg';


const ForgotPassPage = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [valid, setValid] = useState(true);
  const [message, setMessage] = useState(""); // To display success or error messages

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phone) => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phone);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/forgot-password", { email });
      if (response && response.data) {
        setMessage(response.data.message);
      } else {
        setMessage("An unexpected error occurred.");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data.message);
      } else {
        setMessage("An unexpected error occurred.");
      }
    }
  };

  const handleSub = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/forgot-password", { phone });
      if (response && response.data) {
        setMessage(response.data.message);
      } else {
        setMessage("An unexpected error occurred.");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data.message);
      } else {
        setMessage("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className='bg-black  h-full sm:w-screen sm:h-screen   lg:h-screen lg:w-screen'>
      <div className='flex justify-center content-center pt-4 '>
            <img src={starx91} className='w-36 h-8 px-5 '/>
          </div>  
      <div className="bg-black flex max-w-screen min-[320px]:flex-wrap-reverse min-[320px]:place-content-center md:flex-wrap-reverse lg:flex-nowrap ">
        <div className="flex-row min-[320px]:px-12  sm:px-28 md:mt-24 min[320px]:mt-10 mb-5">
          <h1 className="text-white text-2xl font-bold">Forgot Password?</h1>
          <h2 className="text-white ">Check your email for reset link.</h2>
          {message && <p>{message}</p>}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-2  text-zinc-400">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                className="  min-[320px]:h-9 md:w-48 lg:w-72 bg-zinc-900 rounded-lg p-3 "
              />
              <button
                type="submit"
                className="bg-white text-black rounded-md h-10 gap-34 font-bold hover:bg-zinc-200 boder-solid border-2 hover:border-zinc-700  "
              >
                Send Reset Email
              </button>
            </div>
          </form>

          <br />
          <p className="text-[#A19A9A]">or</p>
          <br />

          <form onSubmit={handleSub}>
            <div className="flex flex-col gap-y-2  text-zinc-400">
              <label htmlFor="phone">
                Your Phone Number
                <PhoneInput
                  type="text"
                  country={"ind"}
                  value={phone}
                  onChange={handlePhoneChange}
                  inputProps={{ required: true }}
                  className="  min-[320px]:h-9 md:w-48 lg:w-72 bg-zinc-900 rounded-lg p-3 "
                />
              </label>
              {!valid && <p>Please enter a valid 10-digit phone number</p>}
              <button
                type="submit"
                className="bg-white text-black rounded-md h-10 gap-34 font-bold hover:bg-zinc-200 boder-solid border-2 hover:border-zinc-700  "
                disabled={!valid}
              >
                Send Phone Number
              </button>
            </div>
          </form>
          <br />
          <br />
          <button
            type="submit"
            className="bg-white text-black w-1/2 rounded-md  h-10 gap-34 font-bold hover:bg-zinc-200 boder-solid border-2 hover:border-zinc-700  "
          >
            GET OTP
          </button>
        </div>
        <div className="flex place-content-center w-7/12  p-5">
          <img src={bck} className="lg:w-full h-5/12" alt="Background" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassPage;
