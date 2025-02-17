import React from "react";
import { Slider as PlayerSlider } from "@/components/player/player-slider";
import { useAudio } from "react-use";
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from "react-icons/io5";
import { AiOutlinePause } from "react-icons/ai";
import usePlayerState from "@/hooks/use-player-state";
import { ClipLoader } from "react-spinners";
import { RiPlayFill } from "react-icons/ri";

const PlayerContent: React.FC = () => {
  const { activeSong } = usePlayerState();
  const [audio, state, controls] = useAudio({
    src: activeSong?.src || "",
    autoPlay: false,
  });

  const isLoading = activeSong?.src && state.buffered?.length === 0;

  // console.log(`src: ${activeSong?.src}, buffered: ${state.buffered?.length}`);

  const onClickPrevButton = () => {
    console.log("onClickPreButton");
  };

  const onClickPlayButton = () => {
    controls.play();
  };

  const onClickPauseButton = () => {
    controls.pause();
  };

  const onClickNextButton = () => {
    console.log("onClickNextButton");
  };

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
        />
      </div>
      {audio}
      <section className="flex flex-row justify-between items-center w-full h-full px-2 lg:px-6">
        <div className="h-full flex flex-row items-center gap-1 lg:gap-8">
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
        <article></article>
        <div></div>
      </section>
      <br />
    </div>
  );
};

export default PlayerContent;
