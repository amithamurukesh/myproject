import React, { Component } from "react";
export default function Button_signup (props) {
  return (
    
        <div>
        <a
              href="#"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-600"
            >
            {props.label}
            </a>
      </div>
  );
}
