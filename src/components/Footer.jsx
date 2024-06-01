import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className=" bg-white text-black p-3">
        <div className="text-center my-4">
          {/* <h1 className="text-2xl font-medium capitalize">our key contacts</h1> */}
        </div>
        <div className="w-full flex flex-wrap justify-around items-center">
          {/* <div className="w-60 md:w-auto my-1">
            <h1 className="uppercase text-xl text-blue-400">
              Habeeb Al Hafidh
            </h1>
            <p className="text-sm">
              CEO & Managing Director <br />
              +966 505924712,
              <br />
              habeeb@olsortz.com <br />
              investmentaxis@hotmail.com
            </p>
          </div> */}
          {/* <div className="w-60 md:w-auto my-1">
            <h1 className="uppercase text-xl text-blue-400">Biju Rajan</h1>
            <p className="text-sm">
              Executive Director <br />
              +966 500064365 <br />
              biju@olsortz.com
            </p>
          </div> */}
        </div>
        <div className="my-3">
          <div className="text-2xl flex justify-center items-center mx-2">
            <h1 className="capitalize text-center font-medium">
              find out our Extensions
            </h1>
            <hr />
          </div>
          <div className="flex flex-wrap justify-around items-center w-full gap-6 p-2">
            <div className="w-60 ">
              <h1 className="text-xl text-[#AD2E24] uppercase ">
                Saudi Arabia{" "}
              </h1>
              <p className="text-sm">
                {" "}
                P.O.Box: 4535 <br />
                Postal Code: 6689-36344 Eastern Province Kingdom of Saudi
                Arabia. <br />
                Telefax: +966 013 5974170
              </p>
            </div>
            <div className="w-60">
              <h1 className="text-xl text-[#AD2E24] uppercase ">U.A.E</h1>
              <p className="text-sm">
                P.O.Box 242808 <br />
                Al Abbas Building Office No.504/ Room 10 Bank Street , Burdubai
                Dubai, UAE <br />
                Tel: +971 55 159 1288
              </p>
            </div>
            <div className="w-60">
              <h1 className="text-xl text-[#AD2E24] uppercase ">Bahrain</h1>
              <p className="text-sm">
                {" "}
                P.0.Box 5017 <br />
                Exhibition Road, Manama, Kingdom of Bahrain. <br />
                Telefax: +973 17292877
              </p>
            </div>
            <div className="w-60">
              <h1 className="text-xl text-[#AD2E24] uppercase ">India </h1>
              <p className="text-sm">
                60/478 2nd Floor, Kolathara Arcade,
                <br />
                South Panampilli Nagar, Kochi,India 682036 <br />
                Ph: +91 9447041889
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <div className="w-full my-2 md:flex md:justify-evenly text-center">
            <p className="">
              <span className="text-[#AD2E24]">Email</span>: helpdesk@olsortz.com
            </p>
            <p className="">
              <span className="text-[#AD2E24]">Telefax</span>: +966 013 5974170
            </p>
          </div>
        </div>
        <div className="m-2 my-7 ">
          <h1 className="capitalize text-center text-2xl font-medium">
            stay tuned with us
          </h1>
          <div className="flex justify-center items-center gap-10 text-3xl my-2 mt-5">
            <FaInstagram className="text-[#AD2E24]" />
            <FaTwitter className="text-[#AD2E24]" />
            <FaFacebook className="text-[#AD2E24]" />
            <FaYoutube className="text-[#AD2E24]" />
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <h1 className="capitalize">copyrights are received for this page</h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
