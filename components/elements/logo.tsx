"use client";

import React from "react";
import { useRouter } from "next/navigation";
import IconButton from "./icon-button";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";

const Logo = ({
  isInDrawer = false,
  onClickClose = () => {},
}: {
  isInDrawer?: boolean;
  onClickClose?: () => void;
}) => {
  const { push } = useRouter();

  const onClickLogo = () => {
    push("/"); // home 이동 하는 로직
  };

  return (
    <section className="flex flex-row items-center gap-3">
      {isInDrawer ? (
        <IconButton
          onClick={onClickClose}
          icon={<IoCloseOutline size={30} />}
        />
      ) : (
        <IconButton icon={<RxHamburgerMenu size={24} />} />
      )}

      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image width={100} height={30} src={"/main-logo.svg"} alt="logo" />
      </div>
    </section>
  );
};

export default Logo;
