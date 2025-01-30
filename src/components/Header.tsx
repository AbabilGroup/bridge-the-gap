import { navlinks } from "@/contants";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="shadow py-3">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            className="w-[150px] h-auto"
            src="/logo.png"
            alt="Bridge The Gap Logo"
            height={65}
            width={150}
          />
        </Link>

        <ul className=" items-center gap-5 hidden lg:flex">
          {navlinks.map((navlink, i) => (
            <li key={i}>
              <Link
                className="font-semibold hover:border-b-2 border-b-primary-bridge hover:text-primary-bridge"
                href={navlink.href}
              >
                {navlink.label}
              </Link>
            </li>
          ))}
        </ul>

        <FaBars className="lg:hidden text-3xl" />
      </div>
    </header>
  );
};

export default Header;
