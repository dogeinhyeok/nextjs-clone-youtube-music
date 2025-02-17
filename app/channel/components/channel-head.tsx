"use client";

import DarkButton from "@/components/elements/dark-button";
import WhiteButton from "@/components/elements/white-button";
import { Channel, Song } from "@/types";
import { ShuffleIcon } from "lucide-react";
import React from "react";
import { FiMusic } from "react-icons/fi";
import usePlayerState from "@/hooks/use-player-state";

function shuffle(array: Song[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

interface ChannelHeadProps {
  channel: Channel;
}

const ChannelHead = ({ channel }: ChannelHeadProps) => {
  const { addSongList } = usePlayerState();

  const onClickShuffle = () => {
    addSongList(shuffle(channel.songList));
  };

  return (
    <section>
      <div className="text-[28px] font-bold">{channel.name}</div>
      <article className="mt-4 lg:hidden">
        <div>
          <DarkButton
            className="w-[260px] flex justify-center"
            label={"구독중 4.18만"}
          />
        </div>
        <div className="flex flex-row gap-4 mt-4">
          <WhiteButton label={"셔플"} icon={<ShuffleIcon size={16} />} />
          <WhiteButton label={"뮤직 스테이션"} icon={<FiMusic size={16} />} />
        </div>
      </article>
      <div className="hidden lg:flex flex-row items-center gap-4 text-[14px] mt-4">
        <WhiteButton
          onClick={onClickShuffle}
          label={"셔플"}
          icon={<ShuffleIcon size={16} />}
        />
        <WhiteButton
          onClick={onClickShuffle}
          label={"뮤직 스테이션"}
          icon={<FiMusic size={16} />}
        />
        <DarkButton
          className="w-[230px] flex justify-center"
          label={"구독중 4.18만"}
        />
      </div>
    </section>
  );
};

export default ChannelHead;
