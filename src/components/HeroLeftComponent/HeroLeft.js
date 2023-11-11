// ------------------------------------------------------
// Prerequisites
// ------------------------------------------------------
import React from "react";
import Item from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Button from "@mui/material/Button";
import { BsArrowUpRight } from "react-icons/bs";
// ------------------------------------------------------
// Styles
// ------------------------------------------------------
import "./HeroLeft.css";
import "../../styles/Global.css";
// ------------------------------------------------------
// Constants
// ------------------------------------------------------
import Badge from "../../Constants/badge.svg";
import User1 from "../../Constants/user1.jpg";
import User2 from "../../Constants/user2.jpg";

const HeroLeft = () => {
  return (
    <Item className="w-[100%] h-[100%] bg-color-1 mt-20 md:mt-0">
      <div className="flex flex-col justify-center items-center h-[100%]">
        <h1 className="text-xl md:text-2xl font-bold text-black font-1">
          HARMONY
        </h1>
        <figure className="badge-dimension">
          <img src={Badge} alt="badge" />
        </figure>
        <h1 className="text-xl md:text-2xl font-bold text-black font-1">
          STYLE FOR THE ECO-ERA
        </h1>
        <p className="text-md font-2 text-black text-center px-10 md:px-20 mt-5 mb-10">
          Discover a world where every choice contributes to a greener, brighter
          future.
        </p>
        <Link
          href="#"
          color="inherit"
          className="font-1 f-color-2 flex justify-center align-middle"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          EXPLORE <HiOutlineArrowNarrowRight className="text-xs mt-1" />
        </Link>
        <dialog id="my_modal_1" className="modal backdrop-blur-sm">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Welcome to ECO ERA</h3>
            <p className="py-4">
              Lead a green life🌱
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        <div className="flex flex-row justify-between items-center bg-color-6 py-5 px-2 mt-32 md:mt-16  w-[90%] md:w-[60%] h-[4rem] md:h-[5rem] rounded-full">
          <a
            href="/"
            className="bg-color-7 h-[3rem] md:h-[4rem] w-[3rem] md:w-[4rem] rounded-full flex justify-center items-center"
          >
            <Link color="#b3efb2" className=" cursor-pointer">
              <BsArrowUpRight className="text-xl" />
            </Link>
          </a>
          <div className="">
            <span className="font-1 text-xl f-color-2">400+</span>
            <p className="font-2 f-color-1 badge-subtext">
              successfully leading a eco-friendly lifestyle
            </p>
          </div>
          <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src={User2} />
            <Avatar alt="Travis Howard" src={User1} />
          </AvatarGroup>
        </div>
      </div>
    </Item>
  );
};

export default HeroLeft;
