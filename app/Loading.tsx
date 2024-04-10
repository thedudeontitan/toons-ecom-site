import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface LoadingProps {
  count: number;
}

const Loading: React.FC<LoadingProps> = ({ count }) => {
  return (
    <div className="flex flex-row flex-wrap gap-10 mt-10 mx-20 border-4 border-black p-10 rounded-[25px]">
      {Array(count)
        .fill(0)
        .map((_,index) => (
          <div key={index} className="" >
            <div className="">
              <Skeleton height={250} width={250} baseColor="#d3aeff" />
            </div>
            <div>
              <Skeleton count={2} baseColor="#d3aeff" />
            </div>
            <div>
              <Skeleton baseColor="#d3aeff" />
            </div>
          </div>
        ))}
    </div>
  );
}
export default Loading;
