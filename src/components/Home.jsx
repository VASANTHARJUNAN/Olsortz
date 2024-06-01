import React from "react";
import sec1banner from "../assert/sec-1-banner.jpg";
import aboutimg1 from "../assert/home-about-img1.jpg";
import benefitsimg from "../assert/home-benefit-img.jpg";
import futureimg from "../assert/home-future-img.jpg";
import impimg from "../assert/home-import-img.jpg";
import goldimg from "../assert/home-gold-img.jpg";
import fcimg from "../assert/home-fc-img.jpg";
import solarimg from "../assert/home-solar-img.jpg";
import lubeimg from "../assert/home-lube-img.jpg";
import itimg from "../assert/home-it-img.jpg";
import realestateimg from "../assert/home-realestate-img.jpg";
import foodimg from "../assert/home-food-img.jpg";
import { GiMedal, GiTrophyCup } from "react-icons/gi";
import { MdGroups } from "react-icons/md";
import { FaArrowRight, FaProjectDiagram, FaRProject } from "react-icons/fa";
import { VscArrowSmallRight } from "react-icons/vsc";
import CountUp from 'react-countup';
import { CounterUpClient } from "./countup";
function Section1() {
  const CounterAwards = () => {
    return (
      <>
        <span>
          <CountUp start={0} end={175} duration={1} delay={0}/>
      </span>
      </>
    )
  }
  const CounterTeams = () => {
    return (
      <>
        <span>
          <CountUp start={0} end={150} duration={1} delay={0}/>
      </span>
      </>
    )
  }
  const CounterProjects = () => {
    return (
      <>
        <span>
          <CountUp start={0} end={200} duration={1} delay={0}/>
      </span>
      </>
    )
  }
  return (
    <section>
      <div id="sec-1" className="container h-[450px] md:h-[520px] xl:h-[600px]">
        <div className="absolute">
          <img
            src={sec1banner}
            className="h-[450px] md:h-[520px] md:w-[1024px]  lg:w-[1600px] xl:h-[600px] object-cover duration-500"
            alt="providing energy solutions"
          />
        </div>
        <div className="relative w-72 text-white left-6 top-36 h-48 md:top-32 md:left-10 lg:top-40 xl:left-28 lg:left-24">
          <h1 className="text-3xl font-bold w-[290px] md:text-4xl md:w-96 lg:w-[580px] xl:text-6xl xl:font-bold xl:w-[800px]">
            PROVIDING ENERGY SOLUTIONS
          </h1>
          <p className="text-sm w-auto mt-4 mb-8 md:text-md md:mt-7 md:mb-10 md:w-[408px] xl:text-lg xl:w-[430px] xl:mt-8">
            <span className="lg:block">At OLSORTZ,</span> we're in the business
            of enhancing life's possibilities.
          </p>
          <div className="flex justify-around items-center w-max border mt-9 p-2 text-sm md:text-lg xl:text-xl">
            <p className="uppercase">see how we do it</p>
            <FaArrowRight className="ml-3 backdrop-filter-none" />
          </div>
        </div>
      </div>


        <div id="sec-2" className="py-5 px-8 lg:px-20 xl:px-24">
          <div className="flex  flex-wrap">
            <div className="order-1 lg:order-2 h-auto w-full lg:w-1/2 text-start justify-start p-4">
              <p className="text-[#AD2E24] text-md my-5 mb-6 xl:text-xl xl:mt-16">
                <span className=""> - </span> ABOUT US <span> - </span>
              </p>
              <h1 className="text-3xl font-bold mt-1 xl:text-4xl">
                OIL & GAS INNOVATORS: DRIVING PROGRESSN IN THE INDUSTRY
              </h1>
              <p className="text-md my-6 text-start xl:text-xl">
                From exploration and production to transportation and refining,
                we offer a wide range of products and services that meet the
                unique needs of the oil & gas industry. Our commitment to
                excellence and customer satisfaction is reflected in our
                rigorous quality control processes.
              </p>
              {/* <a href={'/'} className="text-xl xl:text-3xl ">
              Learn More +
            </a> */}
              <div className="border-2 border-[#AD2E24] p-2 rounded-lg text-white bg-[#AD2E24] w-max divine">
                <a href={"/"} className="text-lg">
                  Learn More
                </a>
              </div>
            </div>
            <div className="py-8 px-3.5 order-2 lg:order-1 h-auto w-full lg:w-1/2 flex xl:flex-grow">
              <img
                src={aboutimg1}
                className="rounded-3xl object-cover"
                alt="power & future"
              />
            </div>
          </div>
        </div>


      <div id="sec-3" className="py-5 px-8 lg:px-20 xl:px-24 bg-[#FF715B] text-black">
        <div className="flex  flex-wrap">
          <div className="p-5 order-2 h-auto w-full lg:w-1/2 flex xl:flex-grow">
            <img
              src={futureimg}
              className="md:rounded-3xl object-cover "
              alt="banner-3"
            />
          </div>
          <div className="h-auto order-1 w-full lg:w-1/2 text-start justify-start p-4">
            <p className="text-[#AD2E24] text-md my-5 mb-6 xl:text-xl xl:mt-7">
              <span className=""> - </span> OUR ACHIEVEMENTS <span> - </span>
            </p>
            <h1 className="text-3xl font-bold mt-1 xl:text-4xl">
              POWERING YOUR FUTURE
            </h1>
            <p className="text-md my-6 text-start xl:text-xl">
              With cutting-edge technology and unparalleled expertise, we've
              propelled your future forward by delivering reliable, sustainable
              power solutions tailored to your needs. Our commitment to
              innovation and efficiency ensures that we remain at the forefront
              of powering your journey towards success. Trust us to illuminate
              your path, energizing every step of the way.{" "}
            </p>
            {/* <a href={'/'} className="text-xl xl:text-3xl "> Learn More + </a> */}
            <div className="border-2  p-2 rounded-lg border-[#AD2E24] text-black bg-white w-max hover:bg-[#AD2E24] hover:text-white">
              <a href={"/"} className="text-xl">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="sec-4" className="py-5 px-8 lg:px-20 xl:px-24">
        <div>
          <div className="text-center">
            <p className="text-[#AD2E24] text-md my-5 mb-6 xl:text-xl xl:mt-7 uppercase">
              <span className=""> - </span> OUR teams <span> - </span>
            </p>
          </div>
          <div className="my-4">
            <p className="uppercase text-center text-3xl font-bold xl:text-4xl mt-4 mb-10">
              this is why industry our team is so famous
            </p>
            <div className="flex flex-wrap justify-evenly">
              <div className="w-96 m-1">
                <img
                  src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
                  className="rounded-t-xl"
                  alt="member-1"
                />
                <div className="flex flex-col drop-shadow-xl w-max py-3 px-4 rounded-b-lg bg-slate-50">
                  <p className="text-xl font-bold capitalize">
                    name of the member
                  </p>
                  <p className="text-lg">working position</p>
                </div>
              </div>
              <div className="w-96 m-1">
                <img
                  src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
                  className="rounded-t-xl"
                  alt="member-2"
                />
                <div className="flex flex-col drop-shadow-xl w-max py-3 px-4 rounded-b-lg bg-slate-50">
                  <p className="text-xl font-bold capitalize">
                    name of the member
                  </p>
                  <p className="text-lg">working position</p>
                </div>
              </div>
              <div className="w-96 m-1">
                <img
                  src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
                  className="rounded-t-xl"
                  alt="member-3"
                />
                <div className="flex flex-col drop-shadow-xl w-max py-3 px-4 rounded-b-lg bg-slate-50">
                  <p className="text-xl font-bold capitalize">
                    name of the member
                  </p>
                  <p className="text-lg">working position</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <div className="uppercase text-center text-3xl font-bold xl:text-4xl">
            <p>our accomplishments</p>
          </div>
          <div className="my-2 p-5 flex flex-wrap justify-around">
            <div className="md:w-60 flex justify-around items-center m-2 py-3 pr-2 rounded-xl bg-slate-50 shadow-xl">
              <p>
                <GiMedal className="text-[60px] text-[#AD2E24]" />
              </p>
              <div className="flex flex-col items-start">
                <p className="text-5xl font-medium">
                  <CounterUpClient />+
                </p>
                <p className="text-lg capitalize ml-1">satisfied clients</p>
              </div>
            </div>
            <div className="md:w-60 flex justify-around items-center m-2 py-3 pl-1 pr-2 rounded-xl bg-slate-50 shadow-xl">
              <p>
                <GiTrophyCup className="text-[55px] text-[#AD2E24] " />
              </p>
              <div className="flex flex-col items-start">
                <p className="text-5xl font-medium"><CounterAwards/>+</p>
                <p className="text-lg capitalize ml-1">Winning awards</p>
              </div>
            </div>
            <div className="w-52 md:w-60 flex justify-around items-center m-2 px-3 py-3 pr-2 rounded-xl bg-slate-50 shadow-xl">
              <p>
                <MdGroups className="text-[50px] text-[#AD2E24] " />
              </p>
              <div className="flex flex-col items-start">
                <p className="text-5xl font-medium"><CounterTeams/>+</p>
                <p className="text-lg capitalize ml-1">expert teams</p>
              </div>
            </div>
            <div className="w-52 md:w-60 flex justify-around items-center m-2 pl-2 py-3 pr-2  rounded-xl bg-slate-50 shadow-xl">
              <p>
                <FaProjectDiagram className="text-[50px] text-[#AD2E24] " />
              </p>
              <div className="flex flex-col  ml-2 items-start">
                <p className="text-5xl font-medium"><CounterProjects/>+</p>
                <p className="text-lg capitalize ">active projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="sec-5" className="py-5 px-8 lg:px-20 xl:px-24 bg-blue-100 text-black">
        <div className="flex  flex-wrap">
          <div className="p-5 order-2 h-auto w-full lg:w-1/2 flex xl:flex-grow">
            <img
              src="https://www.itilite.com/wp-content/uploads/2024/01/Maximizing-Business-Travel-Benefits-with-ITILITEs-Travel-Technology-Integration-1024x538-1.png"
              className="md:rounded-3xl object-cover "
              alt="banner-3"
            />
          </div>
          <div className="h-auto order-1 w-full lg:w-1/2 text-start justify-start p-4">
            <p className="text-[#AD2E24] uppercase text-md my-5 mb-6 xl:text-xl xl:mt-7">
              <span className=""> - </span> technologies <span> - </span>
            </p>
            <h1 className="text-3xl uppercase font-bold mt-1 xl:text-4xl">
              {" "}
              specializes your technologies{" "}
            </h1>
            <div className="text-md my-6 text-start xl:text-xl">
              <div className="my-4 flex flex-wrap md:max-2xl:flex-nowrap">
                <div className="flex">
                  <div className="flex">
                    <GiTrophyCup className="text-[50px] mt-2" />
                  </div>
                  <div className="ml-2">
                    <p className="capitalize text-xl font-medium">heading</p>
                    <p className="text-lg text-slate-700">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Rem, esse explicabo voluptatem saepe reiciendis ipsam
                      eveniet aspernatur nostrum.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex">
                    <GiTrophyCup className="text-[50px] mt-2" />
                  </div>
                  <div className="ml-2">
                    <p className="capitalize text-xl font-medium">heading</p>
                    <p className="text-lg text-slate-700">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Rem, esse explicabo voluptatem saepe reiciendis ipsam
                      eveniet aspernatur nostrum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-2  p-2 rounded-lg border-[#AD2E24] text-black bg-white w-max hover:bg-[#AD2E24] hover:text-white">
              <a href={"/"} className="text-xl">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="sec-6" className="bg-black text-white py-8">
        <div className="text-center pt-5">
          <p className="text-[#AD2E24] md:text-lg lg:text-xl mb-6">
            {" "}
            <span> - </span> SERVICES WE PROVIDE <span> - </span>{" "}
          </p>
          <h1 className="text-white md:text-xl lg:text-2xl xl:text-4xl font-bold">
            INNOVATING FOR A SUSTAINABLE TOMORROW IN SERVICES WE PROVIDE{" "}
          </h1>
        </div>
        <div className="flex flex-wrap gap-x-16 gap-y-10 w-full justify-center pl-10 pt-10 pr-10 pb-4">
          <div class="w-60 h-fit group">
            <div class="relative overflow-hidden rounded-2xl">
              <img
                class="h-96 w-full object-cover"
                src={impimg}
                alt="import & export"
              />
              <div class="absolute h-full w-full bg-black/50 flex flex-col pl-3 justify-end -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p class=" text-white text-sm pb-2">Olsortz</p>
                <h1 class=" text-white text-xl font-semibold pb-7">
                  IMPORT AND EXPORT
                </h1>
                <a href={"/"} class=" text-white text-lg font-light mb-5">
                  Learn More{" "}
                </a>
              </div>
            </div>
          </div>

          <div class="w-60 h-fit group">
            <div class="relative overflow-hidden rounded-2xl">
              <img
                class="h-96 w-full object-cover"
                src={goldimg}
                alt="gold & precious metals"
              />
              <div class="absolute h-full w-full bg-black/50 flex flex-col pl-3 justify-end -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p class=" text-white text-sm pb-2">Olsortz</p>
                <h1 class=" text-white text-xl font-semibold pb-7">
                  {" "}
                  GOLD & PRECIOUS METALS{" "}
                </h1>
                <a href={"/"} class=" text-white text-lg font-light mb-5">
                  Learn More{" "}
                </a>
              </div>
            </div>
          </div>

          <div class="w-60 h-fit group">
            <div class="relative overflow-hidden rounded-2xl">
              <img
                class="h-96 w-full object-cover"
                src={foodimg}
                alt="food & beverages"
              />
              <div class="absolute h-full w-full bg-black/50 flex flex-col pl-3 justify-end -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p class=" text-white text-sm pb-2">Olsortz</p>
                <h1 class=" text-white text-xl font-semibold pb-7">
                  FOOD & BEVERAGES
                </h1>
                <a href={"/"} class=" text-white text-lg font-light mb-5">
                  Learn More{" "}
                </a>
              </div>
            </div>
          </div>

          <div class="w-60 h-fit group">
            <div class="relative overflow-hidden rounded-2xl">
              <img
                class="h-96 w-full object-cover"
                src={itimg}
                alt="information technology"
              />
              <div class="absolute h-full w-full bg-black/50 flex flex-col p-6 justify-end -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p class=" text-white text-sm pb-2">Olsortz</p>
                <h1 class=" text-white text-xl font-semibold pb-7">
                  INFORMATION TECHNOLOGY
                </h1>
                <a href={"/"} class=" text-white text-lg font-light mb-5">
                  Learn More{" "}
                </a>
              </div>
            </div>
          </div>

          <div class="w-60 h-fit group">
            <div class="relative overflow-hidden rounded-2xl">
              <img
                class="h-96 w-full object-cover"
                src={fcimg}
                alt="financial consultancy"
              />
              <div class="absolute h-full w-full bg-black/50 flex flex-col pl-3 justify-end -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p class=" text-white text-sm pb-2">Olsortz</p>
                <h1 class=" text-white text-xl font-semibold pb-7">
                  FINANCIAL CONSULTANCY
                </h1>
                <a href={"/"} class=" text-white text-lg font-light mb-5">
                  Learn More{" "}
                </a>
              </div>
            </div>
          </div>

          <div class="w-60 h-fit group">
            <div class="relative overflow-hidden rounded-2xl">
              <img
                class="h-96 w-full object-cover"
                src={realestateimg}
                alt="olsortz"
              />
              <div class="absolute h-full w-full bg-black/50 flex flex-col pl-3 justify-end -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p class=" text-white text-sm pb-2">Olsortz</p>
                <h1 class=" text-white text-xl font-semibold pb-7">
                  REAL ESTATE CONSULTANCY{" "}
                </h1>
                <a href={"/"} class=" text-white text-lg font-light mb-5">
                  Learn More{" "}
                </a>
              </div>
            </div>
          </div>

          <div class="w-60 h-fit group">
            <div class="relative overflow-hidden rounded-2xl">
              <img
                class="h-96 w-full object-cover"
                src={solarimg}
                alt="solar technologies"
              />
              <div class="absolute h-full w-full bg-black/50 flex flex-col pl-3 justify-end -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p class=" text-white text-sm pb-2">Olsortz</p>
                <h1 class=" text-white text-xl font-semibold pb-7">
                  SOLAR TECHNOLOGIES
                </h1>
                <a href={"/"} class=" text-white text-lg font-light mb-5">
                  Learn More{" "}
                </a>
              </div>
            </div>
          </div>

          <div class="w-60 h-fit group">
            <div class="relative overflow-hidden rounded-2xl">
              <img
                class="h-96 w-full object-cover"
                src={lubeimg}
                alt="petrochemicals & lubricants"
              />
              <div class="absolute h-full w-full bg-black/50 flex flex-col pl-3 justify-end -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p class=" text-white text-sm pb-2">Olsortz</p>
                <h1 class=" text-white text-xl font-semibold pb-7">
                  PETROCHEMICALS & LUBRICANTS
                </h1>
                <a href={"/"} class=" text-white text-lg font-light mb-5">
                  Learn More{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="text-center text-white text-sm font-bold p-7 pb-10">
          <a href="" className="border rounded-full bg-blue-400  border-white p-3 border-800 hover:bg-white hover:text-black transition-all duration-300"> DISCOVER OUR SERVICES </a>
        </div> */}
      </div>

      <div id="sec-7" className="py-5 px-8 lg:px-20 xl:px-24">
        <div className="flex  flex-wrap">
          <div className="p-5 order-2 lg:order-2 h-auto w-full lg:w-1/2 flex xl:flex-grow">
            <img
              src={benefitsimg}
              className="rounded-3xl object-cover"
              alt="benefits"
            />
          </div>
          <div className="order-1 lg:order-1 h-auto w-full lg:w-1/2 text-start justify-start p-4 ">
            <p className="text-[#AD2E24] text-md my-5 mb-6 xl:text-xl xl:mt-12 ">
              <span className=""> - </span> OUR BENEFITS <span> - </span>
            </p>
            <h1 className="text-3xl font-bold mt-1 xl:text-4xl">
              THE FUTURE OF OIL & GAS IS HERE
            </h1>
            <p className="text-md my-6 text-start xl:text-xl">
              The future of oil and gas brings with it unparalleled advancements
              in efficiency and sustainability. With cutting-edge technologies,
              we harness cleaner extraction methods, minimizing environmental
              impact. Enhanced data analytics optimize operations, ensuring
              safer and more cost-effective production. Embracing innovation,
              the future of oil and gas propels us towards a more sustainable
              energy landscape.
            </p>
            <div className="border-2 border-[#AD2E24] p-2 rounded-lg text-white bg-[#AD2E24] w-max hover:bg-white hover:text-black">
              <a href={"/"} className="text-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
