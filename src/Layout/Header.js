import React from "react";
import Logo from "../Constants/logo.svg";
import "./Header.css";
import { CgMenuGridO } from "react-icons/cg";

const Header = () => {
  return (
    <>
      <div className="navbar mt-6 px-3 md:px-20 bg-pattern">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            <figure>
              <img src={Logo} alt="logo" className="h-[3rem]" />
              <figcaption className="font-2 font-light text-xs mt-6 text-left">Live Green <br /> Embrace Sustainability</figcaption>
            </figure>
          </a>
        </div>
        <div className="flex-none">
          <button
            className="btn menu-btn rounded-full px-2"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            <div className="flex flex-row justify-between items-center gap-2">
              <div className="font-1">MENU</div>
              <div className="bg-color-2 h-[100%] px-6 py-3 rounded-full">
                <CgMenuGridO className="text-xs" />
              </div>
            </div>
          </button>
          <dialog id="my_modal_2" className="modal backdrop-blur-sm">
            <div className="modal-box">
              <h3 className="font-1 text-lg">ECO ERA</h3>
              <ul className="flex flex-col px-1 gap-4 mt-6">
                <li className="px-3 pb-2">
                  <a className="text-hover font-4 text-lg ">
                    <p className="f-color-6 font-3">Feeds</p>
                  </a>
                </li>
                <li className="px-3 pb-2">
                  <a className="text-hover font-4 text-lg">
                    <p className="f-color-6 font-3">Discussions</p>
                  </a>
                </li>
                <li className="px-3 pb-2">
                  <a className="text-hover font-4 text-lg">
                    <p className="f-color-6 font-3">Shop</p>
                  </a>
                </li>
                <li className="px-3 pb-2">
                  <a className="text-hover font-4 text-lg">
                    <p className="f-color-6 font-3">Insights</p>
                  </a>
                </li>
                <li className="px-3 pb-2">
                  <a className="text-hover font-4 text-lg">
                    <p className="f-color-6 font-3">Help</p>
                  </a>
                </li>
              </ul>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </>
  );
};

export default Header;
