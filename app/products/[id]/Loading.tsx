import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <div className="">
      <Skeleton height={500} width={600} />
      <div className="">
        <Skeleton height={30} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
      <div className="">
        <Skeleton height={50} />
        <Skeleton height={50} />
      </div>
      </div>
    </div>
  );
}
