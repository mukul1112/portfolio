import React from 'react'
import { useState } from 'react';
import resume from  '../assets/m111.pdf'

function Navbar() {

  const [brandName, setBrandName] = useState("Mukul");
  const [menuLinks, setMenuLinks] = useState([
   
    {
      title: "Skills",
      link: "/skills",
      id: 3,
    },
    
    {
      title: "Projects",
      link: "/Contact",
      id: 4,
    },
    {
      title: "Contact",
      link: "/Contact",
      id: 46,
    }
   ,
  ]);

  const [actionButton, setActionButton] = useState({
    title: "Download CV",
    link: resume,
  });
  return (
    <div>
      <div className="h-20 border main md:flex md:justify-between  flex justify-between items-center px-6 md:px-16 bg-gray-100">
        <div>
          {/* brand logo */}
          <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>

        <div className=" hidden md:flex space-x-6">
          {/* menu links */}

          {menuLinks.map((link) => (
            <a key={link.id} href={link.link} className="hover:text-orange-600 cursor-pointer">
              {link.title}
            </a>
          ))}

          {/* 
          <a href="/about" className="hover:text-orange-600">
            About
          </a>

          <a href="/skills" className="hover:text-orange-600">
            Skills
          </a>

          <a href="/Portfolio" className="hover:text-orange-600">
            Portfolio
          </a>

          <a href="/contact" className="hover:text-orange-600">
            Contact
          </a> */}
        </div>

        <div className="hidden md:flex justify-end">
          {/* buttons */}
          <a
            target="_blank"
            rel="noopener"
            href={actionButton.link}
            className=" px-4 py-2 bg-orange-500 shadow rounded-full text-1xl md:text-base cursor-pointer"
          >
            {actionButton.title}
          </a>
        </div>
        <div className="md:hidden text-4xl">
          <a href="" className="">&#8801;</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
