import React from "react";
import Image from "next/image";

// Expects a columns object with 3 column objects inside.
// Each column should have:
// text: string
// image: string
// id: int
const ThreeColumnBlock = ({ columns }) => {
  return (
    <section className="threeColumnBlock">
      <div className="threeColumnBlock__container flex flex-col md:flex-row overflow-hidden">
        {columns.map((column) => {
          return (
            <div className="threeColumnBlock__column group w-full md:w-[33.33%] h-[300px] md:h-[500px] relative" key={column.id}>
              <div className="threeColumnBlock__image z-1">
                <Image fill src={column.image} alt={column.text} size={"100vw"} className="z-1 object-cover group-hover:scale-110 transform-duration-300 transition-transform"></Image>
              </div>
              <div className="threeColumnBlock__overlay z-2 bg-gray-500 opacity-30 transition-opacity duration-300 absolute w-full h-full top-0 left-0 right-0 bottom-0"></div>

              <div className="relative threeColumnBlock__content px-8 h-full flex items-center justify-center z-3">
                <h2>{column.text}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ThreeColumnBlock;
