import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="">
      <div className="flex justify-end gap-5 items-center py-4">
        <Link href="/" className="hover:underline underline-offset-4 text-sm">
          {" "}
          # Home
        </Link>

        <Link href="#projects" className="hover:underline underline-offset-4 text-sm">
          {" "}
          # Projects
        </Link>
        <Link href="#contact" className="hover:underline underline-offset-4 text-sm">
          {" "}
          # Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
