"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import mainMenu from "/images/mainMenu.png";

const Page = () => {
  useEffect(() => {
    const image = document.querySelector(".image");
    if (image) {
      // Fade in after component mounts
      image.classList.add("show");
    }
  }, []);

  return (
    <div className="container bg-black overflow-y-hidden">
      <Image
        src={mainMenu}
        alt="Main Menu"
        width={1100}
        height={1100}
        className="image"
      />
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.95) 100%)", // Adjust opacity here
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default Page;