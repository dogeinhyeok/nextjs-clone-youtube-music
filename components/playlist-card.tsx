"use client";

import { Playlist } from "@/types";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getRandomElementFromArray } from "@/lib/utils";
import { useRouter } from "next/navigation";

const PlayListCard = ({ playlist }: { playlist: Playlist }) => {
  const { push } = useRouter();
  const { id, owner, playlistName, songList } = playlist;

  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    // 클라이언트에서만 랜덤 이미지 소스를 설정
    const randomImage = getRandomElementFromArray(songList).imageSrc;
    setImageSrc(randomImage);
  }, [songList]);

  const onClick = () => {
    push(`/playlist?list=${id}`);
  };

  return (
    <article className="h-[240px] cursor-pointer group">
      <section onClick={onClick} className="relative h-[136px]">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt="thumbnail"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </section>
      <section className="mt-2">
        <div>{playlistName}</div>
        <div className="text-neutral-500">{`${owner} - 트랙 ${songList.length}개`}</div>
      </section>
    </article>
  );
};

export default PlayListCard;
