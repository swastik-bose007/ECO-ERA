import React from "react";
import Item from "@mui/material/Grid";
import Cover from "../../Constants/cover.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { green } from "@mui/material/colors";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const HeroRight = () => {
  return (
    <Item className="w-full bg-color-1 mt-36 md:mt-12">
      <div className="flex flex-col justify-center  items-center gap-4">
        <div className="flex flex-col justify-center">
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: green[200] }}>
              <FaFacebookF className="text-lg" />
            </Avatar>
            <Avatar sx={{ bgcolor: green[200] }}>
              <RiInstagramFill className="text-lg" />
            </Avatar>
            <Avatar sx={{ bgcolor: green[200] }}>
              <FaXTwitter className="text-lg" />
            </Avatar>
          </Stack>
        </div>
        <figure className="mb-10 md:mb-0">
          <img
            src={Cover}
            alt="cover"
            className="h-[100%] md:h-[85%] w-[100%] md:w-[90%] px-6 object-cover bg-cover"
          />
        </figure>
      </div>
    </Item>
  );
};

export default HeroRight;
