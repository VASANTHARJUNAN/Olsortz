import it1 from "../assests/it1.jpg";
import it2 from "../assests/it2.jpg";
import it3 from "../assests/it3.jpg";
import itimg1 from "../assert/it-img1.png";
export default function Servit() {
  return (
    <>
      <section className="">
        <div className="context-kk-it-banner md:flex justify-start items-center w-full">
          <div className="context md:m-10 h-80 w-full">
            <div className="text w-96  md:my-10 md:mx-10">
              <h1 className="text-5xl text-white font-bold">
                Gold & Precious Metals Trading
              </h1>
              {/* <p className="text-lg text-white font-bold my-5">
                OLSORTZ is deals with customers who were seeking a destination
                for purchasing gold & precious metals in an environment focused
                on security and service.
              </p> */}
            </div>
          </div>
        </div>
        <div className="intro-bang p-3 md:p-4 lg:px-20">
          <div className="flex flex-wrap justify-evenly md:px-5">
            <div className="part-1 w-full md:mx-5">
              <h1 className="text-2xl my-2 font-semibold">
                Inherent Value and Global Demand
              </h1>
              <p className="text-lg">
                Precious metals like gold, silver, platinum, and palladium hold
                inherent value due to their rarity, beauty, and utility across
                various industries. They are globally accepted as a store of
                value and are sought after by investors worldwide.
              </p>
            </div>
            <div className="part-2 md:mx-5">
              <h1 className="text-2xl my-2 font-semibold">
                Diverse Investment Options and Safe-Haven Status
              </h1>
              <p className="text-lg">
                Investors have access to a variety of investment vehicles for
                precious metals, including physical bullion, ETFs, mining
                stocks, and futures contracts. Precious metals are often seen as
                safe-haven assets, providing stability and wealth preservation
                during times of economic uncertainty or geopolitical
                instability.
              </p>
            </div>
            <div className="part-3 md:mx-5">
              <h1 className="text-2xl my-2 font-semibold">
                Industrial Applications, Limited Supply
              </h1>
              <p className="text-lg">
                Precious metals play crucial roles in industries such as
                electronics, automotive, and healthcare due to their unique
                properties. Despite their industrial demand, precious metals
                have limited natural supplies, which contributes to their
                enduring value and attractiveness as investments.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-10 md:px-6">
          <div className="my-5 py-4 px-2 md:px-4 xl:px-10">
            <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-center">
              WHAT ENABLES
              <span className="font-bold"> INTELLIGENT INDUSTRY?</span>
            </h1>
          </div>
          <div className="flex justify-center gap-14 flex-wrap md:flex-nowrap">
            {/* part-1 */}
            <div className="xl:w-80 lg:w-[300px] md:w-52 w-full p-2 shadow-2xl">
              <div>
                <img
                  src={itimg1}
                  className="xl:w-80 lg:w-[300px] md:w-52 w-full p-2 h-64 md:h-48 lg:h-72 object-cover"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold p-2">
                  Hyper-convergence
                </h1>
              </div>
              <div>
                <h2 className="text-lg lg:text-xl p-2">
                  Hardware and software are being brought closer together,
                  traditional industries are blurring their boundaries (e.g.,
                  automotive and energy) and future innovations will fuse
                  together the digital, physical, and biological.
                </h2>
              </div>
            </div>

            <div className="xl:w-80 lg:w-[300px] md:w-52 w-full p-2 shadow-2xl">
              <div>
                <img
                  src={itimg1}
                  className="xl:w-80 lg:w-[300px] md:w-52 w-full p-2 h-72 md:h-48 lg:h-72 object-cover"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold p-2">
                  Hyper-convergence
                </h1>
              </div>
              <div>
                <h2 className="text-lg lg:text-xl p-2">
                  Hardware and software are being brought closer together,
                  traditional industries are blurring their boundaries (e.g.,
                  automotive and energy) and future innovations will fuse
                  together the digital, physical, and biological.
                </h2>
              </div>
            </div>

            <div className="xl:w-80 lg:w-[300px] md:w-52 w-full p-2 shadow-2xl">
              <div>
                <img
                  src={itimg1}
                  className="xl:w-80 lg:w-[300px] md:w-52 w-full p-2 h-72 md:h-48 lg:h-72 object-cover"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold p-2">
                  Hyper-convergence
                </h1>
              </div>
              <div>
                <h2 className="text-lg lg:text-xl p-2">
                  Hardware and software are being brought closer together,
                  traditional industries are blurring their boundaries (e.g.,
                  automotive and energy) and future innovations will fuse
                  together the digital, physical, and biological.
                </h2>
              </div>
            </div>
          </div>
        </section>

        <div className="main-wrapper md:p-5 lg:px-20">
          <div className="main-part-1 md:max-lg:flex md:max-lg:flex-col md:max-lg:items-center lg:flex lg:justify-around lg:items-center  w-full md:my-10">
            <div className="pm-1 p-5 w-full md:w-2/4 flex flex-col items-center">
              <h1 className="text-3xl font-bold">
                Core Values and Commitments
              </h1>
              <p className="my-5 text-xl">
                In addition to innovation, integrity, and excellence, emphasize
                the company's dedication to safety as a top priority in all
                operations.
              </p>
              <p className="my-5 text-xl">
                Discuss the company's long-term vision for sustainability,
                aiming to become a leader in environmentally friendly practices
                within the precious metals industry.
              </p>
              <p className="my-5 text-xl">
                Highlight the company's role as a responsible corporate citizen,
                actively contributing to the communities in which it operates
                through philanthropic initiatives and partnerships.
              </p>
            </div>
            <div className="pm-img">
              <img
                src={it1}
                alt="image1"
                className="w- h-96 rounded-none md:rounded-3xl"
              />
            </div>
          </div>
          <div className="main-part-2 my-3 md:max-lg:flex md:max-lg:flex-col md:max-lg:items-center lg:flex lg:justify-around lg:items-center w-full md:my-5">
            <div className="pm-img">
              <img
                src={it2}
                alt="image2"
                className="w- h-96 rounded-none md:rounded-3xl"
              />
            </div>
            <div className="pm-2 p-5 w-full md:w-2/4 flex flex-col items-center">
              <h1 className="text-3xl font-bold">
                Operational Excellence and Sustainability
              </h1>
              <p className="md:max-lg:my-2 lg:my-5 my-5 text-xl">
                Detail specific initiatives undertaken by the company to reduce
                its carbon footprint, such as energy-efficient processes, waste
                reduction programs, and recycling efforts.
              </p>
              <p className="md:max-lg:my-2 lg:my-5 my-5 text-xl">
                Showcase partnerships with sustainability-focused organizations
                or certifications obtained, demonstrating the company's
                commitment to environmental stewardship.
              </p>
              <p className="md:max-lg:my-2 lg:my-5 my-5 text-xl">
                Provide examples of innovative technologies or methodologies
                implemented in refining processes, showcasing the company's
                leadership in sustainable practices.
              </p>
            </div>
          </div>

          <div className="main-part-3 md:max-lg:flex md:max-lg:flex-col md:max-lg:items-center md:flex md:justify-around md:items-center w-full md:my-5">
            <div className="pm-3 p-5 w-full lg:p-5 md:w-2/4 flex flex-col items-center">
              <h1 className="text-3xl font-bold">Customer-Centric Approach</h1>
              <p className="md:max-lg:my-2 lg:my-5 my-5 text-xl">
                Highlight testimonials or case studies from satisfied customers,
                illustrating how the company's personalized solutions have
                positively impacted their businesses.
              </p>
              <p className="md:max-lg:my-2 lg:my-5 my-5 text-xl">
                Discuss ongoing efforts to enhance the customer experience, such
                as streamlined ordering processes, responsive customer support,
                or value-added services.
              </p>
              <p className="md:max-lg:my-2 lg:my-5 my-5 text-xl">
                Offer insights into the company's dedication to continuous
                improvement based on customer feedback, showcasing a commitment
                to evolving alongside the needs of its clientele
              </p>
            </div>
            <div className="pm-img ">
              <img
                src={it3}
                alt="image3"
                className="h-96 rounded-none md:rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
