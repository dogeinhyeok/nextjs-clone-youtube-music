"use client";

import useUIState from "@/hooks/useUIState";
import { useEffect } from "react";

const HeaderBackgroundChanger = ({ imageSrc }: { imageSrc: string }) => {
  const { setHeaderImageSrc } = useUIState();

  useEffect(() => {
    setHeaderImageSrc(imageSrc);
  }, [imageSrc, setHeaderImageSrc]);

  return null;
};

export default HeaderBackgroundChanger;
