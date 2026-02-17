"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const getLinkClass = (href: string) => {
    return `font-medium text-sm lg:text-base ${
      pathname === href ? "text-blue-700" : "hover:text-neutral-400"
    }`;
  };

  return (
    <nav className="sticky top-0 z-50 max-w-screen-xl bg-white mx-auto px-4 py-4 md:px-8 md:py-6 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <Link href="/" className={getLinkClass("/")}>
          <p className="font-bold text-base lg:text-lg text-orange-500 hover:text-black">
            GAINZ
          </p>
        </Link>
        <div className="flex gap-6">
          <Link href="/indicators" className={getLinkClass("/indicators")}>
            Indicators
          </Link>
          <Link href="/contact" className={getLinkClass("/contact")}>
            Contact Us
          </Link>
        </div>
      </div>

      <hr className="border-t border-neutral-200 w-full shadow-xs" />
    </nav>
  );
};

export default Navbar;
