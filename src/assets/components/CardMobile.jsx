import React from "react";
import Nav from "./Nav";

const CardMobile = () => {
  return (
    <>
      <div className="container md:hidden">
        <div className="w-[90%] mx-auto pt-36 flex justify-center">
          <div className="w-full bg-light-gray rounded-2xl relative pb-6">
            <div className="card-photo absolute top-[-100px] left-[75px]">
              <img className="w-[200px]" src="./card-photo.png" alt="" />
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
              <a href="https://samsulanmm.vercel.app/">
                <div className="web flex gap-4 items-center pt-4">
                  <div className="bg-white py-2 px-4 rounded-lg">
                    <img src="./web-icon.png" alt="" />
                  </div>

                  <div>
                    <h4 className="text-base font-medium text-light-gray">
                      Web
                    </h4>

                    <p className="text-sm font-medium text-white">
                      samsulanmm.vercel.app
                    </p>
                  </div>
                </div>
              </a>
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

        <div className="about-me p-6 bg-light-gray rounded-2xl relative w-[90%] mx-auto mt-32 mb-20">
          <h3 className="text-2xl font-semibold text-black">Tentang Saya</h3>

          <p className="text-base font-medium text-gray pt-4">
            Saya adalah seorang mahasiswa teknik informatika di universitas
            muhammadiyah purwokerto, saya sangat antusias terhadap dunia it
            terutama pada bidang software development, oleh karena itu saya
            sangat semangat untuk belajar coding.
          </p>

          <p className="text-base font-medium text-gray pt-2">
            Semoga suatu saat nanti saya bisa membuat teknologi baru yang
            berguna untuk kehidupan manusia 😁
          </p>

          <Nav />
        </div>
      </div>
    </>
  );
};

export default CardMobile;
