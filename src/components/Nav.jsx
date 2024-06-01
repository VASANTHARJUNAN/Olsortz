import { FaInstagram, FaServicestack } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoCloseCircle, IoCloseOutline, IoHomeOutline } from "react-icons/io5";
import { MdContactPage, MdGroups2 } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import logo from "../assests/logo.jpeg"

function Nav() {
  const [sidemenu, setSideMenu] = useState(false);
  return (
    <>
      <div className="flex items-center justify-around p-1  text-black">
        <div className="max-w-max">
          {/* <h1 className=" p-3 text-3xl capitalize">main logo</h1> */}
          <img src={logo} alt="logo" className=" h-16" />
        </div>
        <div className="md:hidden text-2xl">
          <HiOutlineBars3BottomRight onClick={() => setSideMenu(true)} />
        </div>
        <div
          className={clsx(
            "navlink fixed h-full w-screen md:hidden backdrop-blur-sm top-0 right-0 -translate-x-full duration-1000",
            sidemenu && "translate-x-0"
          )}
        >
          <div className="text-black bg-white flex flex-col absolute w-56 h-screen left-0 top-0 p-8 z-50">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="capitalize text-2xl">mainlogo</h1>
              </div>
              <div>
                <IoCloseOutline
                  onClick={() => setSideMenu(false)}
                  className="text-4xl items-center mt-0.5 cursor-pointer"
                />
              </div>
            </div>
            <div className="flex items-center my-2 p-1 w-max hover:text-[#AD2E24]">
              <IoHomeOutline />
              <h1 className="ml-1 capitalize"><Link to="/">Home</Link></h1>
            </div>
            <div className="dropdown w-max">
              <div className="flex items-center my-2 p-1  hover:text-[#AD2E24]">
                <div className="flex items-center">
                  <FaServicestack />
                  <h1 className="ml-1 capitalize">services</h1>
                </div>
                <div className="mt-1">
                  <RiArrowDropDownLine className="text-xl" />
                </div>
              </div>
              <div className="dropdown-content text-sm">
                <h1 className="dropdown-list p-1">
                  <Link to="/services/trade">General Trade</Link>
                </h1>
                <h1 className="dropdown-list p-1"><Link to="/services/metals">Precious&nbsp;Metals</Link></h1>
                <h1 className="dropdown-list p-1"><Link to="/services/food">Food&nbsp;&&nbsp;Beverages</Link></h1>
                <h1 className="dropdown-list p-1"><Link to="/services/petrochem">Petrochemical&nbsp;&&nbsp;Lubricants</Link></h1>
                <h1 className="dropdown-list p-1"><Link to="/services/solar">Solar&nbsp;Techs&nbsp;& &nbsp;Services</Link></h1>
                <h1 className="dropdown-list p-1"><Link to="/services/itdiv">IT&nbsp;Division</Link></h1>
                <h1 className="dropdown-list p-1"><Link to="/services/realestate">Real&nbsp;Estate</Link></h1>
                <div className="dropdown-submenu ">
                  <div className="flex items-center">
                    <h1 className=" p-1">Financial&nbsp;Consultancy</h1>
                    <RiArrowDropDownLine className="text-xl mt-0.5 -rotate-90" />
                  </div>
                  <div className="dropdown-menu">
                    <h1 className="dropdown-list p-1"><Link to="/services/bank">Bank&nbsp;Insrtuments&nbsp;LC</Link></h1>
                    <h1 className="dropdown-list p-1"><Link to="/services/loan">Loan&nbsp;&&nbsp;Project&nbsp;Finance</Link></h1>
                    <h1 className="dropdown-list p-1"><Link to="/services/highyield">High&nbsp;Yield&nbsp;Investments</Link></h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center my-2 p-1 w-max hover:text-[#AD2E24]">
              <MdGroups2 className="text-xl" />
              <h1 className="ml-1 capitalize"><Link to="">who&nbsp;are&nbsp;we</Link></h1>
            </div>
            <div className="flex items-center my-2 p-1 w-max hover:text-[#AD2E24]">
              <IoInformationCircleOutline className="text-xl" />
              <h1 className="ml-1 capitalize"> <Link to="/about">about</Link>
                </h1>
            </div>
            <div className="flex items-center my-2 p-1 w-max hover:text-[#AD2E24]">
              <MdContactPage className="text-lg" />
              <h1 className="ml-1 capitalize"><Link to="/contact">Contact</Link></h1>
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-evenly w-3/4 text-black lg:w-2/4 ">
          <div className="flex justify-center items-center hover:text-[#AD2E24]">
            <IoHomeOutline />
            <h1 className="ml-1 capitalize">
              <Link to="/">Home</Link></h1>
          </div>
          <div className="dropdown">
            <div className="flex justify-center items-center hover:text-[#AD2E24]">
              <div className="flex items-center">
                <FaServicestack />
                <h1 className="ml-1 capitalize">services</h1>
              </div>
              <div className="mt-1">
                <RiArrowDropDownLine className="text-xl" />
              </div>
            </div>
            <div className="dropdown-content lg:text-lg">
              <h1 className="dropdown-list m-1 p-2"><Link to="/services/trade">General Trading&nbsp;</Link></h1>
              <h1 className="dropdown-list m-1 p-2"><Link to="/services/metals">Precious&nbsp;Metals</Link></h1>
              <h1 className="dropdown-list m-1 p-2"><Link to="/services/food">Food&nbsp;&&nbsp;Beverages</Link></h1>
              <h1 className="dropdown-list m-1 p-2"><Link to="/services/petrochem">Petrochemicals&nbsp;&&nbsp;lubricants</Link></h1>
              <h1 className="dropdown-list m-1 p-2"><Link to="/services/solar">Solar&nbsp;technology&nbsp;&&nbsp;services</Link></h1>
              <h1 className="dropdown-list m-1 p-2"><Link to="/services/itdiv">IT&nbsp;Division</Link></h1>
              <h1 className="dropdown-list m-1 p-2"><Link to="/services/realestate">Real&nbsp;Estate</Link></h1>
              <div className="dropdown-submenu ">
                <div className="flex items-center">
                  <h1 className="mx-1 p-2">Financial&nbsp;Consultancy</h1>
                  <RiArrowDropDownLine className="text-xl mt-0.5 -rotate-90" />
                </div>
                <div className="dropdown-menu">
                  <h1 className="dropdown-list m-1 p-2"><Link to="/services/bank">Bank instruments&nbsp;Lc&nbsp;SBLC</Link></h1>
                  <h1 className="dropdown-list m-1 p-2"><Link to="/services/loan">Loan&nbsp;&&nbsp;project&nbsp;finance</Link></h1>
                  <h1 className="dropdown-list m-1 p-2"><Link to="/services/highyield">High&nbsp;Yield&nbsp;Investment&nbsp;Programs</Link></h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center hover:text-[#AD2E24]">
            <MdGroups2 className="text-xl" />
            <h1 className="ml-1 capitalize"><Link to="/whoweare"> who&nbsp;are&nbsp;we</Link></h1>
          </div>
          <div className="flex justify-center items-center hover:text-[#AD2E24]">
            <IoInformationCircleOutline className="text-xl" />
            <h1 className="ml-1 capitalize"><Link to="/about">About</Link></h1>
          </div>
          <div className="flex justify-center items-center hover:text-[#AD2E24]">
            <MdContactPage className="text-lg" />
            <h1 className="ml-1 capitalize"><Link to="/contact">Contact</Link> </h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default Nav;
