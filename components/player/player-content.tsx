"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { Slider as PlayerSlider } from "@/components/player/player-slider";
import { useAudio } from "react-use";
import {
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoShuffle,
  IoVolumeHighOutline,
} from "react-icons/io5";
import { AiFillCaretUp, AiOutlinePause } from "react-icons/ai";
import usePlayerState from "@/hooks/use-player-state";
import { ClipLoader } from "react-spinners";
import { RiPlayFill } from "react-icons/ri";
import Image from "next/image";
import { RxLoop } from "react-icons/rx";

const PlayerContent: React.FC = () => {
  const { activeSong, prevPlayerQueue, nextPlayerQueue, playBack, playNext } =
    usePlayerState();

  const [audio, state, controls, ref] = useAudio({
    src: activeSong?.src || "",
    autoPlay: true,
  });

  const volumeSet = useRef(false);

  useEffect(() => {
    // 초기 볼륨 설정
    if (
      controls &&
      typeof controls.volume === "function" &&
      !volumeSet.current
    ) {
      controls.volume(0.2); // 볼륨을 20%로 설정
      volumeSet.current = true; // 볼륨이 설정되었음을 기록
    }
  }, [controls]);

  const isLoading = activeSong?.src && state.buffered?.length === 0;

  // console.log(`src: ${activeSong?.src}, buffered: ${state.buffered?.length}`);

  const onClickPrevButton = () => {
    if (state.playing && state.time > 10) {
      controls.seek(0);
      return;
    }
    if (prevPlayerQueue.length === 0) return;
    playBack();
  };

  const onClickPlayButton = () => {
    if (activeSong) {
      controls.play();
    } else {
      playNext();
    }
  };

  const onClickPauseButton = () => {
    controls.pause();
  };

  const onClickNextButton = useCallback(() => {
    if (nextPlayerQueue.length === 0) {
      controls.pause();
    } else {
      playNext();
    }
  }, [controls, nextPlayerQueue, playNext]);

  useEffect(() => {
    const refAudio = ref?.current;
    refAudio?.addEventListener("ended", onClickNextButton);
    return () => {
      refAudio?.removeEventListener("ended", onClickNextButton);
    };
  }, [ref, onClickNextButton]);

  return (
    <div className="h-full w-full relative">
      <div className="absolute top-[-16px] w-full">
        <PlayerSlider
          className="w-full"
          defaultValue={[0]}
          value={[state.time]}
          onValueChange={(value) => {
            controls.seek(value[0]);
          }}
          max={state.duration}
        />
      </div>
      {audio}
      <section className="flex flex-row justify-between items-center w-full h-full px-2 lg:px-6">
        <div className="h-full flex flex-row items-center gap-4 lg:gap-8">
          <IoPlaySkipBackSharp
            size={24}
            className="cursor-pointer"
            onClick={onClickPrevButton}
          />
          {isLoading ? (
            <ClipLoader color="#FFF" />
          ) : state.playing ? (
            <AiOutlinePause
              size={40}
              className="cursor-pointer"
              onClick={onClickPauseButton}
            />
          ) : (
            <RiPlayFill
              size={40}
              className="cursor-pointer"
              onClick={onClickPlayButton}
            />
          )}
          <IoPlaySkipForwardSharp
            size={24}
            className="cursor-pointer"
            onClick={onClickNextButton}
          />
        </div>
        <article>
          <div className="flex flex-row gap-4 items-center">
            <div className="relative w-[40px] h-[40px]">
              <Image
                fill
                className="object-cover"
                src={activeSong?.imageSrc || ""}
                alt="img"
              />
            </div>
            <div className="flex flex-col">
              <div>{activeSong?.name}</div>
              <div className="text-neutral-500 text-[14px]">
                {activeSong?.channel} • 조회수 7.8만회 • 좋아요 1.7천개
              </div>
            </div>
          </div>
        </article>
        <div className="flex flex-row gap-2">
          <div className="hidden lg:flex flex-row gap-4 items-center">
            <IoVolumeHighOutline size={24} className="cursor-pointer" />
            <IoShuffle size={24} className="cursor-pointer" />
            <RxLoop size={24} className="cursor-pointer" />
          </div>
          <div className="flex lg:hidden">
            <AiFillCaretUp size={24} className="cursor-pointer" />
          </div>
        </div>
      </section>
      <br />
    </div>
  );
};

export default PlayerContent;
