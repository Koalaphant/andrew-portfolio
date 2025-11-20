"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./DarkModeIcon";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { BiMessageSquareEdit } from "react-icons/bi";
import ContactForm from "./ContactForm";

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
  const [isFormOpen, setIsFormOpen] = useState(false);

  function showContactForm() {
    setIsFormOpen(true);
  }

  function hideContactForm() {
    setIsFormOpen(false);
  }

  return (
    <div className="mt-5 mb-10 flex justify-between items-center mx-6">
      {isFormOpen && <ContactForm onClose={hideContactForm} />}
      <Link href={"/"}>
        <div className="bg-foreground text-white dark:text-background px-2 py-1 rounded-md">
          <h2 className="font-bold">Andrew Ward-Jones</h2>
        </div>
      </Link>
      <ul className="flex gap-2 items-center">
        <li
          className="transition-all duration-200 hover:-translate-y-1 cursor-pointer"
          onClick={showContactForm}
        >
          <BiMessageSquareEdit className="text-lg" />
        </li>
        {socialIcons.map((icon, index) => (
          <li
            key={index}
            className="transition-all duration-200 hover:-translate-y-1"
          >
            <Link href={icon.url}>{icon.icon}</Link>
          </li>
        ))}
        <li>
          <ModeToggle />
        </li>
      </ul>
    </div>
  );
}
