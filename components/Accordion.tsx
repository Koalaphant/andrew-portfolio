"use client";

import { useState } from "react";
import { ArrowIcon } from "./Icons";

export default function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <div
        onClick={() => setToggle(!toggle)}
        className="cursor-pointer flex justify-between items-center bg-purple-900 p-2 mb-4"
      >
        <p className="text-xl">{title}</p>
        <ArrowIcon
          className={`transform transition-transform duration-300 ${
            toggle ? "rotate-0" : "rotate-180"
          }`}
          colour="white"
          width="20"
        />
      </div>
      {toggle && <div>{children}</div>}
    </div>
  );
}
