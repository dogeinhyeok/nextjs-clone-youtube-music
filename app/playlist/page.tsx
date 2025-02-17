import { getPlaylistById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";
import React from "react";
import HeaderBackgroundChanger from "@/components/header-background-changer";
import PagePadding from "@/components/pagepadding";
import PlayListHeader from "@/components/playlist-header";
import SongListCardRow from "@/components/songlist-card-row";

interface PlaylistPageProps {
  searchParams: Promise<{
    list: string;
  }>;
}

const page = async (props: PlaylistPageProps) => {
  const searchParams = await props.searchParams;
  const playlist = await getPlaylistById(Number(searchParams.list));

  if (!playlist) permanentRedirect("/");

  const imageSrc = getRandomElementFromArray(playlist.songList)?.imageSrc;

  return (
    <PagePadding>
      <HeaderBackgroundChanger imageSrc={imageSrc} />
      <div className="mt-12" />
      <PlayListHeader playlist={playlist} />
      <div className="mt-12" />
      {playlist.songList.map((song, idx) => {
        return <SongListCardRow song={song} key={idx} />;
      })}
    </PagePadding>
  );
};

export default page;
