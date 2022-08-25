import React, { Component } from "react";




export default function Button (props) {
  return (
    
        <div>
        <a
          href="#"
          className="border-2 border-green text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"
        >
          {props.label}
        </a>
      </div>
  );
}
