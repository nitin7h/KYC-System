
import React, { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
export default function VerifyOtp() {
  const adhar = localStorage.getItem("KYC_adhar");
  const emailStore =localStorage.getItem("KYC_email");
  // console.log("emailStore : ",emailStore);

  const otpFlag = localStorage.getItem("Otp_flag");
  // console.log("Verifypage Otp_flag : ", otpFlag);
  

  const navigate = useNavigate();

  const [user, setUser] = useState({
    
    otp: "",
  });
// console.log("hdejfjdfjd : ",user.otp);

  const onchangeHandle = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const onclickSubmit = async (e) => {
    const { otp} = user;

    const sendEmailOtp = {
      otp : user.otp,
      adhar : adhar,
      email: emailStore

    }

    localStorage.removeItem("Otp_flag");
    // console.log("pura : ",sendEmailOtp);
    
    try {
      if (otp) {
        await axios
          .post("http://localhost:7000/verifyOtp", sendEmailOtp)
          .then((res) => {
            alert(res.data.message);
            // console.log("#$###$$% : ",res.data.kycData);
            
            if (res.data.message === "OTP Verified successfully...") {


              if(res.data.kycData){
                const kycData = res.data.kycData;
            localStorage.setItem("KYC_name", kycData.name);
           localStorage.setItem("KYC_email", kycData.email);
            localStorage.setItem("KYC_adhar", kycData.adhar);
            localStorage.setItem("KYC_pancard", kycData.pancard);
            localStorage.setItem("KYC_mobile", kycData.mobile);

            navigate("/dataDetails");

              }




              
            }
            // else{
            //   alert("Wrong OTP or Expired OTP")
            // }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("Please Enter Valid inputs");
      }
    } catch (error) {
      console.log(error);
    }}









    const [timeLeft, setTimeLeft] = useState(120); // 10 minutes in seconds (10 * 60)

    useEffect(() => {

      
      
        

          if (timeLeft <= 0) return;

          const intervalId = setInterval(() => {
              setTimeLeft(timeLeft - 1);
          }, 1000);
  
          return () => clearInterval(intervalId); // Clean up the interval on component unmount
        



        
    }, [timeLeft]);







    useEffect(() => {
      if(!localStorage.getItem("Otp_flag")){
        
        navigate("/gettDatafromBlockchain")
        
      }
    }, []);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
       
    };

  return (
    <div className="mx-auto max-w-7xl px-2 py-10 lg:px-0">
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between  ">
      <div className=" w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-3xl font-bold text-black">Enter OTP for Verification...</h2>
       
        
      </div>
      <div className="mt-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2">
        <form className="flex lg:justify-center">
          <div className="flex w-full max-w-md flex-col space-y-4">
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="number"
              placeholder="Enter OTP"
              id='otp'
              name='otp'
              value={user.name}
                      onChange={onchangeHandle}
            ></input>
            <button
            onClick={onclickSubmit}
              type="button"
              className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Submit
            </button>
          </div>
        </form>
        <p className="mt-2 lg:text-center">
          <span className="text-sm text-gray-600">
            OTP expire within : <span className='text-blue-500 font-bold'>{formatTime(timeLeft)}</span> sec
          </span>
        </p>
      </div>
    </div>
  </div>
  )
}
