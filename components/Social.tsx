import { ReactNode } from "react";

import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";

export default function Social() {
  type SocialIcon = {
    icon: ReactNode;
    iconText: string;
    url: string;
  };

  const socialIcons: SocialIcon[] = [
    {
      icon: <AiFillGithub className="text-2xl" />,
      iconText: "Github",
      url: "/",
    },
    {
      icon: <FaInstagram className="text-2xl" />,
      iconText: "Instagram",
      url: "/",
    },
  ];

  return (
    <div className="flex gap-4 items-center justify-center p-4">
      {socialIcons.map((icon) => (
        <Link
          className="flex gap-1 bg-foreground text-background px-2 py-1.5 rounded-md"
          href={icon.url}
          key={icon.iconText}
        >
          {icon.icon}
          {icon.iconText}
        </Link>
      ))}
    </div>
  );
}
