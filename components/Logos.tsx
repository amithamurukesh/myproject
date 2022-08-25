import React, { Component } from "react";
import { MdLockOutline } from "react-icons/md";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegEnvelope,
  FaGoogle,
} from "react-icons/fa";

export default function Logos() {
  return (
    <div>
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
    
  )
}