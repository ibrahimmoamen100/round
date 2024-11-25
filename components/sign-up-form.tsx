"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CountrySelect, type Country } from "./country-selector";
import Link from "next/link";
import { EyeClosed, EyeIcon, EyeOff } from "lucide-react";

type Props = {
  className?: string;
};

function SignUpForm({ className }: Props) {
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    name: "Egypt",
    code: "EG",
    flag: "/images/egypt.png",
    dialCode: "+20",
  });
  return (
    <div
      className={` ${className} bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4 flex flex-col items-center max-w-lg`}
    >
      <div className="logo_title flex flex-col items-center  gap-4">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="mt-8"
        />
        <h1 className="text-2xl font-bold text-center pt-4">إنشاء حساب</h1>
        <p className="text-center text-gray-500">
          {" "}
          يحب ادخال البيانات لأنشاء حساب جديد
        </p>
      </div>
      <form action="" dir="rtl" className="w-full">
        <input
          type="text"
          className=" rounded-full p-4 w-full mt-4 bg-light outline-none border border-gray-100"
          placeholder="الاسم كاملاً"
        />
        <input
          type="email"
          className=" rounded-full p-4 w-full mt-4 bg-light outline-none border border-gray-100"
          placeholder=" البريد الالكترونيا"
        />
        <div className="relative ">
          <input
            type="text"
            className=" rounded-full p-4  w-full mt-4 bg-light outline-none border border-gray-100"
            placeholder=" رقم الواتساب"
          />
          <CountrySelect
            selectedCountry={selectedCountry}
            onSelect={setSelectedCountry}
            className="absolute top-4 left-0"
          />
        </div>
        <div className="relative ">
          <input
            type="password"
            className=" rounded-full p-4 w-full mt-4 bg-light outline-none border border-gray-100"
            placeholder=" كلمة المرور"
          />
          <EyeOff className="absolute top-8 left-4 cursor-pointer" />
        </div>
        <input
          type="submit"
          className="bg-primary hover:bg-[#006e98] transition-all text-white rounded-full p-4 w-full mt-4 cursor-pointer"
          value="إنشاء حساب"
        />
        <div className="flex justify-center gap-8 mt-4">
          <Link href="/sign-in" className=" text-gray-500">
            {" "}
            امتلك حساب بالفعل{" "}
          </Link>
          <Link href="/sign-in" className="text-primary font-bold">
            {" "}
            تسجيل الدخول{" "}
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
