"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import UserAvatar from "@/components/user-avatar";
import PagePadding from "@/components/page-padding";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Logo from "@/components/elements/logo";
import Navigator from "@/components/elements/navigator";
import { cn } from "@/lib/utils";

import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import useUIState from "@/hooks/useUIState";

const HeaderDrawer = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerTitle></DrawerTitle>
      <DrawerContent className="w-[240px] h-full">
        {/* 로고 */}
        {/* 네비게이션 + 재생목록 */}
        <div className="py-3">
          <div className="px-3">
            <Logo
              isInDrawer
              onClickClose={() => {
                setIsOpen(false);
              }}
            />
          </div>
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

const Header = ({ children }: { children: React.ReactNode }) => {
  const { homeCategory, headerImageSrc } = useUIState();

  const [isScrolled, setIsScrolled] = useState(false);
  const headRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = headRef.current;
    const handleScroll = () => {
      const scrollValue = currentRef?.scrollTop;
      setIsScrolled(scrollValue !== 0);
    };

    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <header ref={headRef} className="relative overflow-y-auto w-full h-full">
      {/* 배경 이미지 */}
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image
            src={
              headerImageSrc ||
              "https://images.unsplash.com/photo-1707833558984-3293e794031c"
            }
            className="object-cover"
            alt="mediaItem"
            fill
          />
          <div className="absolute h-[400px] top-0 bg-background opacity-40 w-full" />
          <div className="absolute h-[400px] top-0 bg-gradient-to-t from-background w-full" />
        </div>
      </section>
      {/* 검색 + 메뉴 + 유저 아바타 */}
      <section
        className={cn("sticky top-0 left-0 z-10", isScrolled && "bg-black")}
      >
        <PagePadding>
          <div className="h-[64px] flex flex-row justify-between items-center">
            <article className="h-[42px] min-w-[480px] hidden lg:flex flex-row items-center bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px] border border-neutral-500">
              <div>
                <FiSearch size={24} />
              </div>
              <input
                className="h-full w-full bg-transparent"
                placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
                type="text"
              />
            </article>
            <HeaderDrawer>
              <article className="lg:hidden">
                <Logo />
              </article>
            </HeaderDrawer>
            <article className="flex flex-row gap-4 items-center">
              <FaChromecast size={26} />
              <UserAvatar />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="relative">{children}</section>
    </header>
  );
};

export default Header;
