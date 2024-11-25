"use client";
import React, { useEffect, useState } from "react";
// import { Bell, Heart, Home, MessageCircle, Search, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [active, setActive] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <header className="bg-white p-4 flex justify-between items-center w-full ">
          <div className="flex items-center gap-4 w-full justify-between max-w-7xl m-auto">
            <Link
              href="/sign-up"
              className="bg-primary text-white  px-6 py-2 rounded-full"
            >
              التسجيل
            </Link>
            <nav className="hidden md:flex gap-6 flex-row-reverse">
              <Link
                href="/"
                className={`text-gray-600 text-sm hover:text-primary ${
                  active ? "border-b-2 border-primary" : ""
                }`}
              >
                الرئيسية
              </Link>
              <Link
                href="#"
                className="text-gray-600 text-sm hover:text-primary"
              >
                الرحلات
              </Link>
              <Link
                href="#"
                className="text-gray-600 text-sm hover:text-primary"
              >
                عن الشركة
              </Link>
              <Link
                href="#"
                className="text-gray-600 text-sm hover:text-primary"
              >
                اتصل بنا
              </Link>
            </nav>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="w-20 h-20"
              />
            </Link>
          </div>
        </header>
      )}
    </>
  );
}
