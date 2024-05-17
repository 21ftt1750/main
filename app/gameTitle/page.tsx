"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import title from "/images/gameTitle.png";

const Page = () => {
  useEffect(() => {
    const image = document.querySelector(".image");
    if (image) {
      // Fade in after component mounts
      image.classList.add("show");

      // Fade out and redirect after 5 seconds
      setTimeout(() => {
        image.classList.remove("show"); // Remove show class for fade out
        setTimeout(() => {
          window.location.href = "/mainMenu"; // Redirect to /mainMenu
        }, 1000); // Wait for fade out animation (1 second)
      }, 3000); // Wait for 5 seconds before starting fade out
    }
  }, []);

  return (
    <div className="container bg-black">
      <Image
        src={title}
        alt="Game Title"
        width={1100}
        height={1100}
        className="image"
      />
    </div>
  );
};

export default Page;
