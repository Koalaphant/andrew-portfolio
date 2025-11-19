"use client";

import Link from "next/link";
import { ModeToggle } from "./DarkModeIcon";

export default function Header() {
  return (
    <div className="mt-5 mb-10 flex justify-between items-center mx-6">
      <Link href={"/"}>
        <div className="bg-foreground text-white dark:text-background px-2 py-1 rounded-md">
          <h2 className="font-bold">Andrew Ward-Jones</h2>
        </div>
      </Link>
      <ul className="flex gap-4 items-center">
        <li>
          <ModeToggle />
        </li>
      </ul>
    </div>
  );
}
