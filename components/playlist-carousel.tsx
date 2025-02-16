import { Playlist } from "@/types";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import PlayListCard from "@/components/playlist-card";

interface PlaylistCarouselProps {
  title: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode;
  playlistArray?: Playlist[];
}

const PlayListCarousel: React.FC<PlaylistCarouselProps> = ({
  title,
  subTitle,
  Thumbnail,
  playlistArray,
}) => {
  return (
    <div className="w-full">
      <Carousel>
        <div className="flex flex-row justify-between items-end my-2">
          <article className="flex flex-row gap-3">
            {Thumbnail}
            <div className="flex flex-col justify-center">
              <div>
                {subTitle && (
                  <div className="text-neutral-500 select-none">{subTitle}</div>
                )}
              </div>
              <div className="text-[34px] font-bold leading-[34px] select-none">
                {title}
              </div>
            </div>
          </article>
          <div className="relative right-[-45px]">
            <div className="absolute bottom-[20px]">
              <CarouselPrevious className="right-2" />
              <CarouselNext className="left-2" />
            </div>
          </div>
        </div>
        <CarouselContent>
          {playlistArray?.map((playlist, index) => {
            return (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <PlayListCard playlist={playlist} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PlayListCarousel;
