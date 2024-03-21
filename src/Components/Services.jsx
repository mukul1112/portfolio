import { useState } from "react";

const Services = () => {
  useState([
    {
      id: "",
      title: "",
      description: "",
      actionButton: {
        title: "",
        link: "",
      },
    },
  ]);
  return (
    <>
      <div className="main-container py-14">
        <h1 className="text-5xl font-bold text-center underline">
          My Projects
        </h1>
        <div className="services-container space-x-5 px-10 flex mt-12">
          <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl   service1 space-y-4">
            <i class=" text-5xl fa-brands fa-ethereum"></i>
            <h1 className="text-4xl">Web3 Development</h1>
            <p className="text-1xl text-wrap  text-justify">
              The Token Triggering System is an innovative application that combines the power of React.js for the
              front-end and a blockchain-based backend for managing and triggering tokens.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
            <a href="https://github.com/mukul1112/web3" target="_blank"rel="noreferrer"> check</a>
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i className="fa-brands fa-react text-5xl"></i>
            <h1 className="text-4xl">Frontend  Development</h1>
            <p className="text-1xl text-wrap  text-justify">
              frontend for hotels and management systems
              where user can come to search for hotels for their accommodation save 
              them for the future and also rate them and get knowledge about hotels and
              book them.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg " >
              <a href="https://github.com/mukul1112/hotels_frontend" target="_blank"rel="noreferrer"> check</a>
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i class=" text-5xl fa-solid fa-server"></i>
            <h1 className="text-4xl">Backend Development</h1>
            <p className="text-1xl text-wrap  text-justify">
            backend development including the microservices of hotels,
     ratings, users and making them  secure with the spring security and jwt and using the intercommunication of
      microservices.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg  ">
            <a href="https://github.com/mukul1112/hotel-microservices" target="_blank"rel="noreferrer"> check</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
