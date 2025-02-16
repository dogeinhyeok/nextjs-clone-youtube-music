"use client";

import { Playlist } from "@/types";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getRandomElementFromArray } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { MdMoreVert } from "react-icons/md";
import { FiPlay } from "react-icons/fi";
import IconButton from "./elements/iconbutton";

const PlayListCard = ({ playlist }: { playlist: Playlist }) => {
  const { push } = useRouter();
  const { id, owner = "", playlistName = "", songList = [] } = playlist;

  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    // 클라이언트에서만 랜덤 이미지 소스를 설정
    const randomImage = getRandomElementFromArray(songList)?.imageSrc;
    setImageSrc(randomImage);
  }, [songList]);

  const onClickCard = () => {
    push(`/playlist?list=${id}`);
  };

  const onClickPlay = () => {};

  const onClickMore = () => {};

  return (
    <article className="h-[240px] cursor-pointer group">
      <section onClick={onClickCard} className="relative h-[136px]">
        {imageSrc && (
          <Image
            src={
              imageSrc ||
              "https://images.unsplash.com/photo-1707833558984-3293e794031c"
            }
            alt="thumbnail"
            fill
            className="object-cover"
            sizes="fill"
          />
        )}
        <div className="hidden relative group-hover:block bg-gradient-to-b from-[rgba(0,0,0,0.7)] top-0 w-full h-[136px]">
          <div className="absolute top-2 right-4">
            <IconButton onClick={onClickMore} icon={<MdMoreVert size={20} />} />
          </div>
          <div
            onClick={onClickPlay}
            className="absolute bottom-4 right-4 flex items-center justify-center translate-gpu transition-transform hover:scale-110 bg-[rgba(0,0,0,0.7)] w-[45px] h-[45px] rounded-full hover:bg-[rgba(0,0,0,0.9) pl-1"
          >
            <FiPlay size={22} color="red" />
          </div>
        </div>
      </section>
      <section className="mt-2">
        <div>{playlistName}</div>
        <div className="text-neutral-500">{`${owner} - 트랙 ${songList.length}개`}</div>
      </section>
    </article>
  );
};

export default PlayListCard;
