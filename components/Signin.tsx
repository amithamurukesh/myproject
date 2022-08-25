import React, { Component } from "react";
import { MdLockOutline } from "react-icons/md";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegEnvelope,
  FaGoogle,
} from "react-icons/fa";
import Button from "./Button";
export default function Signin() {
  return (
    <div>
      <div className="py-10 w-4/5">
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
        </div>
      </div>
      {/* Social login section*/}
      <p className="text-gray-500 my-3">or use your email account</p>
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
        <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
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
        <Button label="Signin"/>
      </div>
    </div>
  );
}
