import about1 from "../assests/about1.jpg";
import about2 from "../assests/about2.jpg";
import { FaArrowRight, FaFolder } from "react-icons/fa6";
function About() {
  return (
    <>
      <section>
        <div id="sec1" className="container h-[450px] md:h-[600px] lg:w-full">
          <div className="absolute ">
            <img
              src=
                "https://assets.weforum.org/article/image/YJN9W_hAEAYhpCu2qY1ZYh-oWePHtQEmX1Du8Uvvx7w.jpg"
              
              className="h-[450px] md:h-[520px] md:w-[1024px]  lg:w-[1600px] xl:h-[600px] object-cover duration-500"
              alt=""
            />
          </div>
          <div className="relative w-72 text-white left-6 top-36 h-48 md:top-32 md:left-10 lg:top-40 xl:left-28 lg:left-24">
            <h1 className="text-3xl font-bold w-[290px] md:text-4xl md:w-96 lg:w-[580px] xl:text-6xl xl:font-bold xl:w-[800px] uppercase">
              About Our Petrochemical Company
            </h1>
            <p className="text-sm w-auto mt-4 mb-8 md:text-md md:mt-7 md:mb-10 md:w-[408px] xl:text-lg xl:w-[430px] xl:mt-8">
              <span className="lg:block">Welcome to OLSORTZ,</span> where
              innovation meets excellence in the realm of petrochemicals.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-around items-center p-3 md:px-14 md:my-5">
          <div className="w-96 my-2 mx-3 border border-black rounded-xl">
            <div className="flex justify-center items-center">
              <img
                className="w-full rounded-xl"
                src="https://www.inceptum-oss.com/app/uploads/2021/07/UMBOSS-Service-Quality-Management-4096x2566.jpg"
                alt="quality"
              />
            </div>
            <div className="text-center">
              <div className="m-3">
                <p className="uppercase text-2xl font-medium">quality</p>
              </div>
              <div className="m-3">
                <p className="">
                  At OLSORTZ, we are committed to revolutionizing the
                  petrochemical industry through cutting-edge technologies,
                  sustainable practices, and a relentless pursuit of excellence.
                  With decades of experience and expertise, we have established
                  ourselves as a global leader in the production and
                  distribution of high-quality petrochemical products. so that
                  we acheive a good relationship on our customers to maintain
                  the trust.
                </p>
              </div>
            </div>
          </div>
          <div className="w-96 my-2 mx-3 border border-black rounded-xl">
            <div className="flex justify-center items-center">
              <img
                className="w-full rounded-xl"
                src="https://www.jsm.gov.my/images/2-standards/about-standard/photo/What_is_Standard.png"
                alt="saftey and standards"
              />
            </div>
            <div className="text-center">
              <div className="m-3">
                <p className="uppercase text-2xl font-medium">
                  safety & standards
                </p>
              </div>
              <div className="m-3">
                <p className="">
                  Our state-of-the-art facilities are equipped with the latest
                  advancements in petrochemical processing, ensuring efficiency,
                  safety, and environmental responsibility in all our
                  operations. From refining crude oil to manufacturing a diverse
                  range of petrochemical derivatives, we maintain quality
                  control standards at every step of the production process.
                </p>
              </div>
            </div>
          </div>
          <div className="w-96 my-2 mx-3 border border-black rounded-xl">
            <div className="flex justify-center items-center">
              <img
                className="w-full rounded-xl"
                src="https://media.licdn.com/dms/image/D4D12AQFTZMbRCufZgQ/article-cover_image-shrink_720_1280/0/1707267632184?e=2147483647&v=beta&t=aXJ85QSMe7b6LVSybM8JEwfFO7gsfThjCMDNG2b2cpY"
                alt=""
              />
            </div>
            <div className="text-center">
              <div className="m-3">
                <p className="uppercase text-2xl font-medium">
                  research & development
                </p>
              </div>
              <div className="m-3">
                <p className="">
                  Driven by a passion for innovation, we continuously invest in
                  research and development to create novel solutions that
                  address the evolving needs of our customers and the industry
                  as a whole. Whether it's developing eco-friendly alternatives,
                  optimizing production processes, or enhancing product
                  performance, we strive to stay at the forefront of
                  technological advancement.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center p-3 md:mx-14 md:my-5">
          <div className="w-96 my-2 mx-3 border border-black rounded-xl ">
            <div className="flex justify-center items-center">
              <img
                className="w-full rounded-xl"
                src="https://info.nhanow.com/hubfs/images/Learning+Leading/Goal-Setting-Feature-01.jpg"
                alt="quality"
              />
            </div>
            <div className="text-center">
              <div className="m-3">
                <p className="uppercase text-2xl font-medium">goals</p>
              </div>
              <div className="m-3">
                <p className="">
                  At OLSORTZ, sustainability is not just a goal; it's a guiding
                  principle that shapes everything we do. We are dedicated to
                  minimizing our environmental footprint, reducing waste,
                  conserving resources, and promoting responsible practices
                  throughout our supply chain. By prioritizing sustainability,
                  we aim to create a bright future for generations to come.
                </p>
              </div>
            </div>
          </div>
          <div className="w-96 my-2 mx-3 border border-black rounded-xl">
            <div className="flex justify-center items-center">
              <img
                className="w-full rounded-xl"
                src="https://mybusinessexcellence.com/wp-content/uploads/2018/10/Screen-Shot-2020-01-29-at-10.43.23-pm.png"
                alt="quality"
              />
            </div>
            <div className="text-center">
              <div className="m-3">
                <p className="uppercase text-2xl font-medium">EXCELLENCE</p>
              </div>
              <div className="m-3">
                <p className="">
                  Our commitment to excellence extends beyond our products and
                  operations to encompass our relationships with customers,
                  employees, and communities. We pride ourselves on delivering
                  unparalleled customer service, fostering a culture of
                  diversity and inclusion, and actively supporting the
                  communities in which we operate.
                </p>
              </div>
            </div>
          </div>
          <div className="w-96 my-2 mx-3 border border-black rounded-xl ">
            <div className="flex justify-center items-center">
              <img
                className="w-full rounded-xl"
                src="https://assets.keap.com/image/upload/c_scale,w_600/v1539263284/How%20and%20Why%20to%20Encourage%20Personal%20Growth%20Within%20Your%20Business/GettyImages-687209536.jpg"
                alt="quality"
              />
            </div>
            <div className="text-center">
              <div className="m-3">
                <p className="uppercase text-2xl font-medium">growth</p>
              </div>
              <div className="m-3">
                <p className="">
                  As we continue to grow and innovate, we remain steadfast in
                  our mission to drive positive change in the petrochemical
                  industry while delivering value to our stakeholders. Thank you
                  for choosing OLSORTZ as your trusted partner in
                  petrochemical solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* newly Edited */}
        <div className="new w-full md:p-12 ">
          <div className="aa md:flex md:justify-around">
            <div className="about-part-1 md:p-10 md:flex md:flex-col md:items-center">
              <div className="img-about">
                <img
                  src={about1}
                  alt="aoye"
                  className="rounded-3xl w-4/4 h-[90%]"
                />
              </div>
              <div className="content-about md:p- md:my- md:flex md:flex-col md:justify-evenly md:items-center">
                <h1 className="text-4xl md:text-6xl mx-2 md:mx-2 md:my-3"> This is How we move</h1>
                <p className="text-lg my-3 md:my-0 p-3 md:p-0 text-justify">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Perspiciatis, necessitatibus excepturi nobis sint adipisci,
                  quaerat assumenda inventore accusantium autem illum accusamus
                  maiores magnam, ipsa nemo corrupti laborum quo odit eius.
                </p>
                <div className="mx-5 md:mx-5 my-3 md:my-3 flex items-center w-max bg-blue-600 md:p-2 rounded-full">
                  <button className="text-lg mx-2 text-white p-1">Explore</button>
                  <FaArrowRight className="text-white" />
                </div>
              </div>
            </div>
            <div className="about-part-2">
              <img
                src={about2}
                alt="about-size"
                className="rounded-3xl h-4/5 hidden lg:block"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
