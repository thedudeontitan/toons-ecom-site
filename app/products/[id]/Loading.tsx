import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <div className="bg-[#efe7f7] flex flex-row min-h-screen px-20 pt-20">
      <Skeleton height={500} width={600} baseColor="#d3aeff"/>
      <div className="w-full mx-10 gap-y-10 flex flex-col">
        <Skeleton height={30} baseColor="#d3aeff" />
        <Skeleton height={40} baseColor="#d3aeff" />
        <Skeleton height={40} baseColor="#d3aeff" />
        <Skeleton height={40} baseColor="#d3aeff" />
      <div className="">
        <Skeleton height={50} baseColor="#d3aeff" />
        <Skeleton height={50} baseColor="#d3aeff" />
      </div>
      </div>
    </div>
  );
}
