import DarkButton from "@/components/elements/dark-button";
import WhiteButton from "@/components/elements/white-button";
import HeaderBackgroundChanger from "@/components/header-background-changer";
import PagePadding from "@/components/page-padding";
import { getChannelById } from "@/lib/dummy-data";
import { getRandomElementFromArray } from "@/lib/utils";
import { ShuffleIcon } from "lucide-react";
import { permanentRedirect } from "next/navigation";
import React from "react";
import { FiMusic } from "react-icons/fi";
import SongListCardRow from "@/components/songlist-card-row";
import PlayListCarousel from "@/components/playlist-carousel";

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
          <WhiteButton label={"셔플"} icon={<ShuffleIcon size={16} />} />
          <WhiteButton label={"뮤직 스테이션"} icon={<FiMusic size={16} />} />
          <DarkButton
            className="w-[230px] flex justify-center"
            label={"구독중 4.18만"}
          />
        </div>
      </section>
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
