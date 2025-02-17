"use client";

import UsePlayerState from "@/hooks/use-player-state";
import React from "react";
import PlayerContent from "./player-content";

const PlayerWrapper: React.FC = () => {
  const { isVisiblePlayer } = UsePlayerState();

  if (!isVisiblePlayer) return null;

  return (
    <div className="fixed bottom-0 h-[72px] w-full bg-neutral-900">
      <PlayerContent />
    </div>
  );
};

export default PlayerWrapper;
