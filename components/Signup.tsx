import React, { Component } from "react";
import Button from "./Button_signup";
export default function Signup() {
    return (
      <div>
    <div className="w-4/5 bg-green-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-">
            <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
            <div className="border-2 w-10 border-gray inline-block mb-2"></div>
            <p className="mb-10">
              Fill up personal information and start journey with us.
            </p>
            <Button label="Signup"/>
          </div>
          </div>
          
    );
}