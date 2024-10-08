import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import chair01 from "../assets/chair01.png";
import chair02 from "../assets/chair02.png";
import chair03 from "../assets/chair03.png";
import chair04 from "../assets/chair04.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import Slider from "react-slick";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className=" absolute h-[40px] w-[40px] bg-[#05E6B7] rounded-full  text-[#fff] top-[50%] translate-y-[-50%] right-[10px] cursor-pointer z-50 duration-300 ease-in-out  hover:bg-black"
      onClick={onClick}
    >
      <FaArrowRight className=" absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className=" absolute h-[40px] w-[40px] bg-[#05E6B7] rounded-full  text-[#fff] top-[50%] translate-y-[-50%] left-[10px] cursor-pointer z-50 duration-300 ease-in-out  hover:bg-black"
      onClick={onClick}
    >
      <FaArrowLeft className=" absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]" />
    </div>
  );
}

const Featured = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          left: "50%",
          bottom: "-50px",
          transform: "translateX(-50%)",
        }}
      >
        <ul style={{ margin: "0px", display: "flex" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "blue",
          padding: "0  20px",
          borderBottom: "5px #F6F7FB solid",
        }}
      ></div>
    ),
  };
  return (
    <div>sdfd</div>
    // <section className="py-[100px] ">
    //   <Container>
    //     <div className=" text-center ">
    //       <h3 className="font-Sans font-bold lg:text-[42px] text-[32px] text-[#0D0E43]">
    //         Featured Products
    //       </h3>
    //     </div>

    //     <Slider className="" {...settings}>
    //       <div className="lg:w-[24%] w-full pt-[20px] pb-2 bg-[#F6F7FB] ">
    //         <div className="">
    //           <img
    //             className="ml-[50%] translate-x-[-50%] h-[250px]"
    //             src={chair01}
    //             alt=""
    //           />
    //           <div className=" relative text-center  w-[100%] py-[10px] bg-[#fff] mt-[50px] before:absolute  before:contain-[''] before:bottom-0 before:right-0 before:w-[100%] before:h-[0] before:bg-[#2F1AC4] before:duration-300 before:ease-in-out before:hover:h-[100%] before:hover:text-[#fff] ">
    //             <h3 className=' relative font-Sans font-bold text-[22px] text-[#FB2E86] after:absolute after:contain-[""] after:top-[30px] after:left-[50%] after:translate-x-[-50%] after:h-[4px] after:w-[120px]  after:bg-[#05E6B7]'>
    //               Cantilever chair
    //             </h3>
    //             <h4 className=" relative font-Sans font-bold text-[16px] text-[#000] mt-[10px] ">
    //               Code - Y523201
    //             </h4>
    //             <h5 className=" relative font-Sans font-bold text-[16px] text-[#000] ">
    //               $42.00
    //             </h5>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="lg:w-[24%] w-fullpt-[45px] pb-2 bg-[#F6F7FB] ">
    //         <div className="">
    //           <img
    //             className="ml-[50%] translate-x-[-50%] h-[270px]"
    //             src={chair02}
    //             alt=""
    //           />
    //           <div className=" relative text-center  w-[100%] py-[10px] bg-[#fff] mt-[50px] before:absolute  before:contain-[''] before:bottom-0 before:right-0 before:w-[100%] before:h-[0] before:bg-[#2F1AC4] before:duration-300 before:ease-in-out before:hover:h-[100%] before:hover:text-[#fff] ">
    //             <h3 className=' relative font-Sans font-bold text-[22px] text-[#FB2E86] after:absolute after:contain-[""] after:top-[30px] after:left-[50%] after:translate-x-[-50%] after:h-[4px] after:w-[120px]  after:bg-[#05E6B7]'>
    //               Cantilever chair
    //             </h3>
    //             <h4 className=" relative font-Sans font-bold text-[16px] text-[#000] mt-[10px] ">
    //               Code - Y523201
    //             </h4>
    //             <h5 className=" relative font-Sans font-bold text-[16px] text-[#000] ">
    //               $42.00
    //             </h5>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="lg:w-[24%] w-full pt-[20px] pb-2 bg-[#F6F7FB] ">
    //         <div className="">
    //           <img
    //             className="ml-[50%] translate-x-[-50%] h-[250px]"
    //             src={chair03}
    //             alt=""
    //           />
    //           <div className=" relative text-center  w-[100%] py-[10px] bg-[#fff] mt-[50px] before:absolute  before:contain-[''] before:bottom-0 before:right-0 before:w-[100%] before:h-[0] before:bg-[#2F1AC4] before:duration-300 before:ease-in-out before:hover:h-[100%] before:hover:text-[#fff] ">
    //             <h3 className=' relative font-Sans font-bold text-[22px] text-[#FB2E86] after:absolute after:contain-[""] after:top-[30px] after:left-[50%] after:translate-x-[-50%] after:h-[4px] after:w-[120px]  after:bg-[#05E6B7]'>
    //               Cantilever chair
    //             </h3>
    //             <h4 className=" relative font-Sans font-bold text-[16px] text-[#000] mt-[10px] ">
    //               Code - Y523201
    //             </h4>
    //             <h5 className=" relative font-Sans font-bold text-[16px] text-[#000] ">
    //               $42.00
    //             </h5>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="lg:w-[24%] w-full pt-[45px] pb-2 bg-[#F6F7FB] ">
    //         <div className="">
    //           <img
    //             className="ml-[50%] translate-x-[-50%] h-[225px]"
    //             src={chair04}
    //             alt=""
    //           />
    //           <div className=" relative text-center  w-[100%] py-[10px] bg-[#fff] mt-[50px] before:absolute  before:contain-[''] before:bottom-0 before:right-0 before:w-[100%] before:h-[0] before:bg-[#2F1AC4] before:duration-300 before:ease-in-out before:hover:h-[100%] before:hover:text-[#fff] ">
    //             <h3 className=' relative font-Sans font-bold text-[22px] text-[#FB2E86] after:absolute after:contain-[""] after:top-[30px] after:left-[50%] after:translate-x-[-50%] after:h-[4px] after:w-[120px]  after:bg-[#05E6B7]'>
    //               Cantilever chair
    //             </h3>
    //             <h4 className=" relative font-Sans font-bold text-[16px] text-[#000] mt-[10px] ">
    //               Code - Y523201
    //             </h4>
    //             <h5 className=" relative font-Sans font-bold text-[16px] text-[#000] ">
    //               $42.00
    //             </h5>
    //           </div>
    //         </div>
    //       </div>
    //     </Slider>
    //   </Container>
    // </section>
  );
};

export default Featured;
