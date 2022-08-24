import Head from "next/head";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegEnvelope,
  FaGoogle,
} from "react-icons/fa";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { MdLockOutline } from "react-icons/md";
import Signin from "./components/signin";

import Signup from "./components/Signup";
// import Logos from "./components/Logos";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white-500">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-green-500">My</span>App
            </div>
            {/* <div className="py-10">
              <h2 className="text-3xl font-bold text-green-500 mb-2">
                Sign in to Account
              </h2>
              
              <div className="flex justify-center my-2">
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-gray-300"
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-gray-300"
                >
                  <FaLinkedinIn className="text-sm " />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3   mx-1 hover:bg-gray-300"
                >
                  <FaGoogle className="text-sm" />
                </a>
              </div> */}
            {/* Social login section*/}
            {/* <p className="text-gray-500 my-3">or use your email account</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-500 m-2" />
                  
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div> 

            
            {/* <Logos /> */}

            {/* <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-500 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="flex justify-between w-64 mb-5">
                <label className="flex items-center text-xs">
                  <input type="checkbox" name="remember" className="mr-1" />
                  Remember me
                </label>
                <a href="#" className="text-xs">
                  Forgot Password?
                </a>
                </div> 
                <a
                  href="#"
                  className="border-2 border-green text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"
                >
                  Sign In
                </a>
               </div> 
             </div>  */}
            <Signin />
            
          </div>
          <Signup /> 
          {/*signin */}
          {/* <div className="w-2/5 bg-green-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
            <div className="border-2 w-10 border-gray inline-block mb-2"></div>
            <p className="mb-10">
              Fill up personal information and start journey with us.
            </p>
            <a
              href="#"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-600"
            >
              Sign Up
            </a>
          </div>  */}

          {/*signup */}
        </div>
        
      </main>
      
    </div>
    
  );
}
