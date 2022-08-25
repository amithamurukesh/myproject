import Head from "next/head";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegEnvelope,
  FaGoogle,
} from "react-icons/fa";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import { MdLockOutline } from "react-icons/md";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
//import Button from "./components/Button";


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
            
            

            
            <Signin />
            
          </div>
          <Signup /> 
         
        </div>
        
      </main>
      
    </div>
    
  );
}
