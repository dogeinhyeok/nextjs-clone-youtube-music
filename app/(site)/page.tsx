import React from "react";
import Category from "./components/category";
import PagePadding from "@/components/page-padding";
import PlayListCarousel from "@/components/playlist-carousel";
import { dummyPlaylistArray, getPlaylistById } from "@/lib/dummy-data";
import UserAvatar from "@/components/user-avatar";

const page = async () => {
  const dummyPlaylistArray1 = [...dummyPlaylistArray];
  const dummyPlaylistArray2 = [await getPlaylistById(1)];
  const dummyPlaylistArray3 = [await getPlaylistById(2)];
  const dummyPlaylistArray4 = [await getPlaylistById(3)];

  return (
    <PagePadding>
      <div>
        <div className="min-h-[500px]">
          <div className="mt-9"></div>
          <Category />
          <div className="mt-20"></div>
          <PlayListCarousel
            playlistArray={[...dummyPlaylistArray1]}
            Thumbnail={
              <div className="w-[56px] h-[56px]">
                <UserAvatar size="lg" />
              </div>
            }
            title="다시 듣기"
            subTitle="dogeinhyeok"
          />
          <div className="mt-20"></div>
          <PlayListCarousel
            playlistArray={[...dummyPlaylistArray2]}
            title="케이시 - Full Bloom"
            subTitle="새로운 앨범"
          />
          <div className="mt-20"></div>
          <PlayListCarousel
            playlistArray={[...dummyPlaylistArray3]}
            title="커뮤니티 제공"
          />
          <div className="mt-20"></div>
          <PlayListCarousel
            playlistArray={[...dummyPlaylistArray4]}
            title="커버 및 리믹스"
          />
        </div>
      </div>
    </PagePadding>
  );
};

export default page;
