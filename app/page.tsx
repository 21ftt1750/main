"use client";
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/titleScreen";
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <main style={{ background: "black", height: "100vh" }}></main>;
};

export default Home;
