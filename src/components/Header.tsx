import { navlinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white py-3 shadow">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            className="h-auto w-[100px]"
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

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <FaBars className="cursor-pointer text-3xl" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
