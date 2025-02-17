import { Playlist } from "@/types";
import React from "react";
import IconButton from "./elements/icon-button";
import { FiFolderPlus, FiMoreVertical, FiPlay } from "react-icons/fi";
import Image from "next/image";
import { getRandomElementFromArray } from "@/lib/utils";
import WhiteButton from "@/components/elements/white-button";
import DarkButton from "@/components/elements/dark-button";

const PlayListHeader = ({ playlist }: { playlist: Playlist }) => {
  const { playlistName, owner, songList } = playlist;

  const randomSong = getRandomElementFromArray(songList);

  return (
    <section>
      <div className="flex gap-[50px] flex-row">
        <div className="relative h-[160px] w-[160px] lg:h-[240px] lg:w-[240px]">
          <Image alt="songImg" fill src={randomSong?.imageSrc} />
        </div>
        <article className="flex flex-col justify-center">
          <div className="font-bold text-[28px]">{playlistName}</div>
          <div className="text-neutral-400 mt-4 text-[14px]">
            <div>{`앨범 • ${owner} • 2019`}</div>
            <div>{`${songList.length}곡 • 15분`}</div>
          </div>
          <ul className="hidden lg:flex flex-row gap-4 mt-4">
            <WhiteButton
              className={"w-[85px] text-[14px]"}
              icon={<FiPlay />}
              label="재생"
            />
            <DarkButton
              className={"w-[145px] text-[14px]"}
              icon={<FiFolderPlus />}
              label="보관함에 저장"
            />
            <IconButton icon={<FiMoreVertical size={24} />} />
          </ul>
        </article>
      </div>
      <ul className="flex flex-row gap-4 mt-4 lg:hidden">
        <WhiteButton
          className={"w-[85px] text-[14px]"}
          icon={<FiPlay />}
          label="재생"
        />
        <DarkButton
          className={"w-[145px] text-[14px]"}
          icon={<FiFolderPlus />}
          label="보관함에 저장"
        />
      </ul>
    </section>
  );
};

export default PlayListHeader;
