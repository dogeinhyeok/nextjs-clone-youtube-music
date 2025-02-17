import React from "react";
import PagePadding from "@/components/pagepadding";
import Category from "./components/category";
import {
  dummyGenreList,
  getAllPlaylist,
  getSongListTop10,
} from "@/lib/dummyData";
import PlayListCarousel from "@/components/playlist-carousel";
import SongListCarousel from "@/components/songlist-carousel";
import GenreListCarousel from "@/components/genrelist-carousel";

const page = async () => {
  const [playlistArray, songListTop10, genreList] = await Promise.all([
    getAllPlaylist(),
    getSongListTop10(),
    dummyGenreList,
  ]);

  return (
    <PagePadding>
      <div className="mt-4" />
      <Category />
      <div className="mt-20" />
      <PlayListCarousel playlistArray={playlistArray} title="새 앨범 및 싱글" />
      <div className="mt-20" />
      <SongListCarousel songListTop10={songListTop10} title="인기곡" />
      <div className="mt-20" />
      <GenreListCarousel genreList={genreList} title="분위기 및 장르" />
      <div className="mt-20" />
      <div className="mt-20" />
    </PagePadding>
  );
};

export default page;
