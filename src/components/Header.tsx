import { navlinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="py-3 shadow">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            className="h-auto w-[150px]"
            src="/logo.png"
            alt="Bridge The Gap Logo"
            height={65}
            width={150}
          />
        </Link>

        <ul className="hidden items-center gap-5 lg:flex">
          {navlinks.map((navlink, i) => (
            <li key={i}>
              <Link
                className="border-b-primary-bridge font-semibold hover:border-b-2 hover:text-primary-bridge"
                href={navlink.href}
              >
                {navlink.label}
              </Link>
            </li>
          ))}
        </ul>

        <FaBars className="cursor-pointer text-3xl lg:hidden" />
      </div>
    </header>
  );
};

export default Header;
