import HeaderBackgroundChanger from "@/components/header-background-changer";
import PagePadding from "@/components/page-padding";
import { getChannelById } from "@/lib/dummy-data";
import { getRandomElementFromArray } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";
import React from "react";
import SongListCardRow from "@/components/songlist-card-row";
import PlayListCarousel from "@/components/playlist-carousel";
import ChannelHead from "../components/channel-head";

interface ChannelPageProps {
  params: Promise<{ id: string }>;
}

const Page = async (props: ChannelPageProps) => {
  const { id } = await props.params;
  const channel = await getChannelById(Number(id));

  if (!channel) permanentRedirect("/");

  const imageSrc = getRandomElementFromArray(channel.songList)?.imageSrc;

  return (
    <PagePadding>
      <HeaderBackgroundChanger imageSrc={imageSrc} />
      <div className="mt-[150px]"></div>
      <ChannelHead channel={channel} />
      <section className="mt-[80px]">
        <div className="text-[28px] font-bold">노래</div>
        <div className="mt-[20px]">
          <ul className="flex flex-col gap-2">
            {channel.songList.map((song, key) => {
              return <SongListCardRow song={song} key={key} />;
            })}
          </ul>
        </div>
      </section>
      <section className="mt-[80px]">
        <div className="text-[28px] font-bold">앨범</div>
        <PlayListCarousel playlistArray={channel.playlistArray} />
      </section>
    </PagePadding>
  );
};

export default Page;
