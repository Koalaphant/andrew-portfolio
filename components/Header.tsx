"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { ModeToggle } from "./DarkModeIcon";
import { AiFillGithub } from "react-icons/ai";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

type SocialIcon = {
  icon: ReactNode;
  url: string;
  name: string;
};

const socialIcons: SocialIcon[] = [
  {
    icon: <AiFillGithub className="text-lg" />,
    url: "https://github.com/Koalaphant",
    name: "Github",
  },
  {
    icon: <FaLinkedin className="text-lg" />,
    url: "https://www.linkedin.com/in/andrewwardjones",
    name: "LinkedIn",
  },
];

export default function Header() {
  return (
    <div className="mt-5 mb-10 flex justify-between items-center mx-6">
      <Link href={"/"}>
        <div className="bg-foreground text-white dark:text-background px-2 py-1 rounded-md">
          <h2 className="font-bold">Andrew Ward-Jones</h2>
        </div>
      </Link>
      <ul className="flex gap-2 items-center">
        {socialIcons.map((icon, index) => (
          <Link href={icon.url} key={index} target="blank">
            <li className="transition-all duration-200 hover:-translate-y-1">
              {icon.icon}
            </li>
          </Link>
        ))}
        <li>
          <ModeToggle />
        </li>
      </ul>
    </div>
  );
}
