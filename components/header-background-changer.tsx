"use client";

import useUIState from "@/hooks/use-user-interface-state";
import { useEffect } from "react";

const HeaderBackgroundChanger = ({ imageSrc }: { imageSrc: string }) => {
  const { setHeaderImageSrc } = useUIState();

  useEffect(() => {
    setHeaderImageSrc(imageSrc);
  }, [imageSrc, setHeaderImageSrc]);

  return null;
};

export default HeaderBackgroundChanger;
