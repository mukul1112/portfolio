import bannerBackground from "../assets/banner_wallpaper.svg";
const Expertise = () => {
  return (
    <>
      <div className="mt-2">
        <h1 className=" mb-16 text-5xl font-bold underline  text-center">
        Technical Expertise
        </h1>
        {/* box section */}

        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="box-container items-center flex py-16"
        >
          <div className="flex text-white justify-center ">
            {/* text container */}
            <div className="w-2/3 text-center space-y-6  pr-30 mr-60 truncate ">
              <h1 className="text-4xl font-bold">Fullstack</h1>
              <p class="text-1xl px-4 text-justify text-wrap">
              My proficiency in Spring Boot empowers me to build robust
               and scalable backend systems. 
              Leveraging the power of the Spring framework,
              On the frontend, I specialize in React, 
              a library renowned for its flexibility and performance.
               Whether it's crafting intuitive user interfaces or architecting complex frontend applications, 
               I am adept at harnessing React's capabilities to deliver a seamless and engaging user experience.


              </p>
              
            </div>
          </div>
          <div className="flex justify-center">
            {/* skills container */}

            <div className="flex justify-center w-2/3 h-fit space-x-3  flex-wrap">
              <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">
                Core Java
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                J2EE
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Hibernate(ORM Tool)
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Spring Framework
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Spring Boot Framework
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Spring Security
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Javascript
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                ReactJS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Tailwind CSS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Angular
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                NextJS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                State Management
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
              Bootstrap
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
              solidity
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                web3.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
