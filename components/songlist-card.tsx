"use client";

import { TopSong } from "@/types";
import React from "react";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import {
  FiPlayCircle,
  FiThumbsDown,
  FiThumbsUp,
  FiMoreVertical,
} from "react-icons/fi";
import IconButton from "./elements/iconbutton";

const onClickThumbsUp = () => {
  console.log("thumbs up");
};

const onClickThumbsDown = () => {
  console.log("thumbs down");
};

const onClickMore = () => {
  console.log("more");
};

interface SongCardProps {
  song: TopSong;
}

const SongListCard: React.FC<SongCardProps> = ({ song }) => {
  return (
    <article className="flex flex-row items-center gap-4 h-[48px] w-full relative group">
      <div className="w-[48px] h-[48px] relative">
        <Image src={song.imageSrc} alt="img" fill className="object-cover" />
        <section className="hidden group-hover:flex absolute top-0 w-[48px] h-[48px] items-center justify-center bg-black cursor-pointer">
          <FiPlayCircle size={20} />
        </section>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div>
          {song.rank === song.prevRank ? (
            <FaCircle size={10} />
          ) : song.rank > song.prevRank ? (
            <AiOutlineCaretUp size={10} color="#3CA63F" />
          ) : (
            <AiOutlineCaretDown size={10} color="#FF0000" />
          )}
        </div>
        <div>{song.rank + 1}</div>
      </div>
      <div>
        <div>{song.name}</div>
      </div>
      <section className="hidden group-hover:flex absolute top-0 right-0 flex-row justify-end items-center h-[48px] w-full bg-rgba(0,0,0,0.7)">
        <IconButton icon={<FiThumbsUp size={20} />} onClick={onClickThumbsUp} />
        <IconButton
          icon={<FiThumbsDown size={20} />}
          onClick={onClickThumbsDown}
        />
        <IconButton icon={<FiMoreVertical size={20} />} onClick={onClickMore} />
      </section>
    </article>
  );
};

export default SongListCard;
