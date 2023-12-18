import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="p-4 rounded-xl inline-block absolute top-[-90px] left-0">
        <ul className="flex gap-4">
          <Link to="/">
            <li className="bg-light-gray py-2 px-5 rounded-md text-center">
              <img
                className="w-6 inline"
                src="./person.png"
                alt=""
              />

              <p className="text-sm font-medium text-gray">About</p>
            </li>
          </Link>
          <Link to="/portfolio">
            <li className="bg-light-gray py-2 px-5 rounded-md text-center">
              <img
                className="w-6 inline"
                src="./portfolios.png"
                alt=""
              />

              <p className="text-sm font-medium text-gray">Portfolio</p>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
