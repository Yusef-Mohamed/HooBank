import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
  const [toggle, setToggel] = useState(false);
  console.log(navLinks);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hookbank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((e, index) => (
          <li
            key={e.id}
            className={`font-poppins font-normal ${
              index !== navLinks.length - 1 && `mr-10`
            } cursor-pointer text-[16px] text-white`}
          >
            <a href={`#${e.id}`}>{e.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggel((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((e, index) => (
              <li
                key={e.id}
                className={`font-poppins font-normal ${
                  index !== navLinks.length - 1 && `mb-4`
                } cursor-pointer text-[16px] text-white`}
              >
                <a href={`#${e.id}`}>{e.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
