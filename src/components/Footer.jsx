import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer w-full py-2 bg-slate-800 bottom-0 fixed">
      <div className="flex text-white justify-center items-center">
          <a className="flex items-center gap-2 cursor-pointer hover:text-blue-400 hover:font-bold" 
          href="https://github.com/xNegi"
          target="_blank"
          rel="noopener noreferrer"> 
          Made by xNegi <AiFillGithub  size={20} />
          </a>
      </div>
    </div>
  );
};

export default Footer;
