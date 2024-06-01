import Section1 from "./Home";
import { FaEye } from "react-icons/fa";
import { FaHeadSideVirus } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
function Whoweare() {
  return (
    <>
      <section>
        <div id="sec1" className="container h-[450px] md:h-[600px] lg:w-full">
          <div className="absolute">
            <img
              src=
                "https://jungleworks.com/wp-content/uploads/2020/07/Untitled-design-52.jpg"
              
              className="mainblur h-[450px] md:h-[520px] md:w-[1024px]  lg:w-[1600px] xl:h-[600px] object-cover duration-500"
              alt=""
            />
          </div>
          <div className="relative w-72 text-white left-6 top-36 h-48 md:top-32 md:left-10 lg:top-40 xl:left-28 lg:left-24">
            <h1 className="text-3xl font-bold w-[290px] md:text-4xl md:w-96 lg:w-[580px] xl:text-6xl xl:font-bold xl:w-[800px] uppercase">
              who we are
            </h1>
            <p className="text-sm w-auto mt-4 mb-8 md:text-xl md:mt-7 md:mb-10 md:w-[408px] xl:text-xl xl:w-[430px] xl:mt-8">
              <span className="text-2xl font-medium lg:block">At OLSORTZ,</span>{" "}
              we're in the business of enhancing life's possibilities.
            </p>
            <div className="flex">
              <div className="border border-black w-max m-3 ml-0 p-3 rounded-l-2xl hover:backdrop-blur-2xl hover:bg-white/30">
                <p className="text-xl font-medium capitalize">carousal</p>
              </div>
              <div className="border border-black w-max m-3 ml-0 p-3 rounded-r-2xl  hover:backdrop-blur-2xl hover:bg-white/30">
                <p className="text-xl font-medium capitalize">contact</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="p-5 text-center">
            <h1 className="text-4xl font-medium ml-5 text-blue-600 capitalize">
              heading
            </h1>
          </div>
          <div className="overview-approach md:flex md:items-center md:p-5 lg:p-10 bg-blue-300 lg:px-20">
            <div className="overview-content px-2 lg:px-5  text-justify">
              <div className="idcon flex items-center justify-center">
                <h1 className="mx-2 text-3xl my-3">OverView</h1>
                <FaEye className="text-3xl" />
              </div>
              <p className="text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae dolorum magni magnam? Recusandae, eum eveniet ipsa
                repellendus consequatur incidunt enim ipsam dolorem maiores a
                cupiditate molestiae dignissimos perspiciatis. Voluptate, vitae?
              </p>
            </div>
            <div className="approach-centent px-2 lg:px-5 text-justify">
              <div className="idcon flex items-center justify-center">
                <h1 className="mx-2 text-3xl my-3">Approach</h1>
                <FaHeadSideVirus className="text-3xl" />
              </div>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
                saepe delectus? Odio provident illum at, sequi expedita repellat
                alias nesciunt rem doloremque dolor similique vitae porro,
                molestiae nostrum autem deleniti.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="text-center">
            <p className="text-4xl font-medium capitalize">results</p>
          </div>
          <div className="flex flex-wrap justify-evenly gap-x-5 md:p-2 my-5">
            <div className="text-justify md:w-5/12 lg:w-3/12 bg-slate-100 text-black rounded-2xl my-4 p-5 shadow-2xl">
              <div className="flex justify-center mb-5">
                <div className="bg-blue-500 p-4 rounded-full">
                  <FaTag className="text-5xl w-max" />
                </div>
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, ut? Velit sunt ex voluptatibus, nam, asperiores error sequi iusto id dolor vero libero dicta, laborum eligendi magnam doloremque nemo dolorum.</p>
            </div>
            <div className="text-justify md:w-5/12 lg:w-3/12 bg-slate-100 text-black rounded-2xl my-4 p-5 shadow-2xl">
              <div className="flex justify-center mb-5">
                <div className="bg-blue-500 p-4 rounded-full">
                  <FaTag className="text-5xl w-max" />
                </div>
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, ut? Velit sunt ex voluptatibus, nam, asperiores error sequi iusto id dolor vero libero dicta, laborum eligendi magnam doloremque nemo dolorum.</p>
            </div>
            <div className="text-justify md:w-5/12 lg:w-3/12 bg-slate-100 text-black rounded-2xl my-4 p-5 shadow-2xl">
              <div className="flex justify-center mb-5">
                <div className="bg-blue-500 p-4 rounded-full">
                  <FaTag className="text-5xl w-max" />
                </div>
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, ut? Velit sunt ex voluptatibus, nam, asperiores error sequi iusto id dolor vero libero dicta, laborum eligendi magnam doloremque nemo dolorum.</p>
            </div>
            <div className="text-justify md:w-5/12 lg:w-3/12 bg-slate-100 text-black rounded-2xl my-4 p-5 shadow-2xl">
              <div className="flex justify-center mb-5">
                <div className="bg-blue-500 p-4 rounded-full">
                  <FaTag className="text-5xl w-max" />
                </div>
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, ut? Velit sunt ex voluptatibus, nam, asperiores error sequi iusto id dolor vero libero dicta, laborum eligendi magnam doloremque nemo dolorum.</p>
            </div>
            <div className="text-justify md:w-5/12 lg:w-3/12 bg-slate-100 text-black rounded-2xl my-4 p-5 shadow-2xl">
              <div className="flex justify-center mb-5">
                <div className="bg-blue-500 p-4 rounded-full">
                  <FaTag className="text-5xl w-max" />
                </div>
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, ut? Velit sunt ex voluptatibus, nam, asperiores error sequi iusto id dolor vero libero dicta, laborum eligendi magnam doloremque nemo dolorum.</p>
            </div>
            <div className="text-justify md:w-5/12 lg:w-3/12 bg-slate-100 text-black rounded-2xl my-4 p-5 shadow-2xl">
              <div className="flex justify-center mb-5">
                <div className="bg-blue-500 p-4 rounded-full">
                  <FaTag className="text-5xl w-max" />
                </div>
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, ut? Velit sunt ex voluptatibus, nam, asperiores error sequi iusto id dolor vero libero dicta, laborum eligendi magnam doloremque nemo dolorum.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Whoweare;
