import React from 'react'
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="m-auto max-w-screen-2xl pt-20 pb-11 flex items-center justify-center">
   
        <div className="flex">
          {[
            "For Designers",
            "Hire Talent",
            "Inspiration",
            "Advertising",
            "Blog",
            "About",
            "Careers",
            "Support",
          ].map((ele) => {
            return <button className="flex mx-8 items-center">{ele}</button>;
          })}
        </div>
        <div className="right-icons grid gap-x-4 grid-flow-col">
          <TiSocialTwitter size={26} />
          <FaFacebookSquare size={24} />
          <FaInstagram size={24} />
          <FaPinterest size={24} />
        </div>
      </div>
    );
}

export default Footer