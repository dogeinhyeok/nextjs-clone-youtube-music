"use client";

import React from "react";
import { dummyPlaylistArray } from "@/lib/dummy-data";
import { IoMdPlayCircle } from "react-icons/io";

const PlayListNavigation = ({
  playlist,
}: {
  playlist: (typeof dummyPlaylistArray)[number];
}) => {
  const { owner, playlistName } = playlist;

  const onClickPlay = () => {
    console.log("play");
  };

  return (
    <div className="mx-3 px-4 h-[56px] flex flex-row justify-between items-center hover:bg-neutral-700 rounded-lg group relative cursor-pointer">
      <div className="flex-1 overflow-hidden">
        <div className="text-[14px] select-none">{playlistName}</div>
        <div className="text-[12px] text-neutral-500 select-none">{owner}</div>
      </div>
      <div className="absolute right-4 hidden group-hover:block cursor-pointer">
        <IoMdPlayCircle size={30} onClick={onClickPlay} />
      </div>
    </div>
  );
};

export default PlayListNavigation;
