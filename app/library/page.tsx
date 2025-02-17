import PagePadding from "@/components/page-padding";
import React from "react";
import Category from "./components/category";
import PlayListCard from "@/components/playlist-card";
import { getRandomElementFromArray } from "@/lib/utils";
import { dummyPlaylistArray } from "@/lib/dummy-data";

const page = () => {
  return (
    <PagePadding>
      <div className="mt-9" />
      <Category />
      <div className="mt-12" />
      <section className="grid gap-6 grid-cols-3 md:grid-cols-3 xl:grid-cols-4">
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
      </section>
      <div className="mt-12" />
    </PagePadding>
  );
};

export default page;
