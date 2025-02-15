"use client";

import React from "react";
import { useRouter } from "next/navigation";
import IconButton from "./iconbutton";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";

const Logo = () => {
  const { push } = useRouter();

  const onClickLogo = () => {
    push("/"); // home 이동 하는 로직
  };

  const onClickMenu = () => {
    console.log("clicked");
  };

  return (
    <section className="flex flex-row items-center gap-3">
      <IconButton icon={<RxHamburgerMenu size={24} />} onClick={onClickMenu} />
      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image width={100} height={30} src={"/main-logo.svg"} alt="logo" />
      </div>
    </section>
  );
};

export default Logo;
