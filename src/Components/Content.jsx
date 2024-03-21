import bannerImage from "../assets/m11.jpeg";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useRef } from "react";
import { useEffect } from "react";

function Content() {

    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["java backend developer", "Frontend Developer", "blockchain Developer"], // Strings to display
        // Speed settings, try diffrent values untill you get good results
        startDelay: 100,
        typeSpeed: 50,
        backSpeed: 10,
        backDelay: 100,
        loop: true,
      });
  
      // Destropying
      return () => {
        typed.destroy();
      };
    }, []);
    return (  <>
   <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex items-center"
    >
      {/* first dabba */}
      <div className="w-full flex items-center justify-center text-white ">
        {/* text */}
        <div className="w-2/3 space-y-2  ms-10">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="text-5xl font-bold">Mukul Palariya</h1>
          <h2 className="text-3xl ">
            I am <span className="font-bold underline" ref={el}></span>
          </h2>
          <p className="">
          Seasoned Software Developer with a passion for crafting cutting-edge solutions at the intersection of Spring Boot, 
          Blockchain technology, and React. With a solid foundation in software development
           and a knack for problem-solving.
          </p>
          <br />
          <div
            className=" text-2xl   mt-3  px-3   "
            href="/contact"
          >
            Connect with Me
          </div>

          <div className="icons-container flex space-x-5">
            <a href="https://twitter.com/MukulPalariya"
            target="_blank"
            rel="noreferrer" 
            className=" hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-4xl  fa-twitter"></i>
            </a>

           

            <a target="_blank" rel="noreferrer"  href="https://github.com/mukul1112"
            className="  hover:bg-orange-600 border  cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-4xl  fa-github"></i>
            </a>

            <a rel="noreferrer" target="_balnk" href="https://www.linkedin.com/in/mukul-palariya-a519001a0/"
            className=" hover:bg-orange-600  border  cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-4xl  fa-linkedin-in"></i>
            </a>
          </div>
          
         
        </div>
      </div>

      {/* second  dabba */}

      <div className=" w-full flex justify-center">
        {/* image */}
        <img className="rounded-full my-2 shadow-lg w-fit" src={bannerImage} alt="" />
      </div>
    </div>
    
    </>);
}

export default Content;