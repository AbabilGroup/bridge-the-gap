import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-[#EEEEEE] pt-20">
      <div className="container grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
        {/* column */}
        <div>
          <Link href="/">
            <Image
              className="h-auto w-[150px]"
              src="/logo.png"
              alt="Bridge The Gap Logo"
              height={65}
              width={150}
            />
          </Link>
        </div>
        {/* column */}
        <div>
          <h5 className="mb-5 text-xl font-semibold">Site Navigation</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:underline" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/sectors">
                Sectors
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* column */}
        <div>
          <h5 className="mb-5 text-xl font-semibold">Contact Us</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                className="flex items-center gap-2 hover:underline"
                href="tel:+8801234567890"
              >
                <div>
                  <FaPhoneAlt />
                </div>
                +880 1234 567890
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-2 hover:underline"
                href="mailto:info@bridgethegap.com"
              >
                <div>
                  <FaEnvelope />
                </div>{" "}
                info@bridgethegap.com
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-2 hover:underline"
                href="mailto:info@bridgethegap.com"
              >
                <div>
                  <FaMapMarkerAlt />
                </div>
                Kempinski, The Pearl, Doha, Qatar. P.O. Box 12345, Doha, Qatar.
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-10">
        <div className="flex items-center justify-center gap-5 border-b border-t py-5 text-4xl">
          <Link className="" href="#">
            <FaFacebookF className="cursor-pointer" />
          </Link>
          <Link className="" href="#">
            <FaXTwitter className="cursor-pointer" />
          </Link>
          <Link className="" href="#">
            <FaWhatsapp className="cursor-pointer" />
          </Link>
          <Link className="" href="#">
            <FaLinkedinIn className="cursor-pointer" />
          </Link>
          <Link className="" href="#">
            <FaInstagram className="cursor-pointer" />
          </Link>
        </div>
      </div>

      <div className="my-10 text-center">
        © {currentYear} Bridge The Gap. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
