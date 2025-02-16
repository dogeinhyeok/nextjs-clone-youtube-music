import React from "react";
import Category from "./components/category";
import PagePadding from "@/components/page-padding";
import PlayListCarousel from "@/components/playlist-carousel";
import { dummyPlaylistArray } from "@/lib/dummyData";
import UserAvatar from "@/components/user-avatar";

const page = async () => {
  const dummyPlaylistArray1 = await [...dummyPlaylistArray];

  return (
    <PagePadding>
      <div>
        <div className="min-h-[500px]">
          <div className="mt-9"></div>
          <Category />
          <div className="mt-12"></div>
          <PlayListCarousel
            playlistArray={[...dummyPlaylistArray1]}
            Thumbnail={
              <div className="w-[56px] h-[56px]">
                <UserAvatar size="lg" />
              </div>
            }
            title="다시 듣기"
            subTitle="도도"
          />
        </div>
      </div>
    </PagePadding>
  );
};

export default page;
