import React from "react";
import Nav from "./Nav";

const CardPortfolio = () => {
  return (
    <>
      <div className="container hidden w-[90%] mx-auto mt-[115px] md:flex justify-between gap-20">
        <div className="w-[400px] bg-light-gray rounded-2xl relative pb-6">
          <div className="card-photo absolute top-[-100px] right-[100px] left-[100px]">
            <img
              className="w-[200px]"
              src="../src/assets/img/card-photo.png"
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

          <div className="contact mt-4 p-5 w-[90%] mx-auto rounded-xl bg-gray">
            <div className="email flex gap-5 items-center">
              <div className="bg-white py-2 px-4 rounded-lg">
                <a href="mailto:samsulanamofc@gmail.com">
                  <img src="../src/assets/img/email-icon.png" alt="" />
                </a>
              </div>

              <div>
                <h4 className="text-lg font-medium text-light-gray">Email</h4>

                <p className="text-base font-medium text-white">
                  samsulanamofc@gmail.com
                </p>
              </div>
            </div>
            <div className="instagram flex gap-5 items-center pt-4">
              <div className="bg-white py-2 px-4 rounded-lg">
                <a href="https://www.instagram.com/samsulanmm/" target="_blank">
                  <img src="../src/assets/img/instagram-icon.png" alt="" />
                </a>
              </div>

              <div>
                <h4 className="text-lg font-medium text-light-gray">
                  Instagram
                </h4>

                <p className="text-base font-medium text-white">samsulanmm</p>
              </div>
            </div>
            <div className="web flex gap-5 items-center pt-4">
              <div className="bg-white py-2 px-4 rounded-lg">
                <img src="../src/assets/img/web-icon.png" alt="" />
              </div>

              <div>
                <h4 className="text-lg font-medium text-light-gray">Web</h4>

                <p className="text-base font-medium text-white">
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

        <div className="about-me p-6 bg-light-gray rounded-2xl w-[700px] relative">
          <h3 className="text-2xl font-semibold text-black">Portfolio Saya</h3>

          <div className="portfolio-cards flex justify-between items-center mt-6">
            <img
              className="w-[200px]"
              src="../src/assets/img/portfolio-1.png"
              alt=""
            />
            <img
              className="w-[200px]"
              src="../src/assets/img/portfolio-2.png"
              alt=""
            />
            <img
              className="w-[200px]"
              src="../src/assets/img/portfolio-3.png"
              alt=""
            />
          </div>

          <Nav />
        </div>
      </div>
    </>
  );
};

export default CardPortfolio;
