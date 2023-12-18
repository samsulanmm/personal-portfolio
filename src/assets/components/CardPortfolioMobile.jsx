import React from "react";
import Nav from "./Nav";

const CardPortfolioMobile = () => {
  return (
    <>
      <div className="container md:hidden">
        <div className="w-[90%] mx-auto pt-36 flex justify-center">
          <div className="w-full bg-light-gray rounded-2xl relative pb-6">
            <div className="card-photo absolute top-[-100px] left-[75px]">
              <img
                className="w-[200px]"
                src="./card-photo.png"
                alt=""
              />
            </div>

            <div className="info pt-16 text-center">
              <h3 className="nama text-2xl font-semibold text-black">
                Samsul Anam
              </h3>

              <p className="profesi text-sm font-medium text-gray">
                Front End Developer
              </p>
            </div>

            <div className="contact mt-4 p-4 w-[90%] mx-auto rounded-xl bg-gray">
              <div className="email flex gap-4 items-center">
                <div className="bg-white py-2 px-4 rounded-lg">
                  <a href="mailto:samsulanamofc@gmail.com">
                    <img src="./email-icon.png" alt="" />
                  </a>
                </div>

                <div>
                  <h4 className="text-base font-medium text-light-gray">
                    Email
                  </h4>

                  <p className="text-sm font-medium text-white">
                    samsulanamofc@gmail.com
                  </p>
                </div>
              </div>
              <div className="instagram flex gap-4 items-center pt-4">
                <div className="bg-white py-2 px-4 rounded-lg">
                  <a
                    href="https://www.instagram.com/samsulanmm/"
                    target="_blank"
                  >
                    <img src="./instagram-icon.png" alt="" />
                  </a>
                </div>

                <div>
                  <h4 className="text-base font-medium text-light-gray">
                    Instagram
                  </h4>

                  <p className="text-sm font-medium text-white">samsulanmm</p>
                </div>
              </div>
              <div className="web flex gap-4 items-center pt-4">
                <div className="bg-white py-2 px-4 rounded-lg">
                  <img src="./web-icon.png" alt="" />
                </div>

                <div>
                  <h4 className="text-base font-medium text-light-gray">Web</h4>

                  <p className="text-sm font-medium text-white">
                    samsulanamofc.com
                  </p>
                </div>
              </div>
            </div>

            <div className="download-cv flex justify-center mt-6">
              <a
                className="text-sm font-semibold py-4 px-6 rounded-lg bg-gray text-white"
                href=""
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="about-me p-6 bg-light-gray rounded-2xl w-[90%] mx-auto mt-32 relative mb-20">
          <h3 className="text-2xl font-semibold text-black text-center">
            Portfolio Saya
          </h3>

          <div className="portfolio-cards flex flex-col items-center gap-6 mt-6">
            <img
              className="w-[200px]"
              src="./portfolio-1.png"
              alt=""
            />
            <img
              className="w-[200px]"
              src="./portfolio-2.png"
              alt=""
            />
            <img
              className="w-[200px]"
              src="./portfolio-3.png"
              alt=""
            />
          </div>

          <Nav />
        </div>
      </div>
    </>
  );
};

export default CardPortfolioMobile;
