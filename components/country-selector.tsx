"use client";
import React, { useState } from "react";
import { EG, SA } from "country-flag-icons/react/3x2";

import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface Country {
  name: string;
  code: string;
  flag: string;
  dialCode: string;
}

const countries: Country[] = [
  { name: "Egypt", code: "EG", flag: "/egypt.png", dialCode: "+20" },
  {
    name: "Saudi Arabia",
    code: "SA",
    flag: "/egypt.png",
    dialCode: "+966",
  },
  { name: "UAE", code: "AE", flag: "/images/egypt.png", dialCode: "+971" },
  { name: "Kuwait", code: "KW", flag: "/images/flag1.png", dialCode: "+965" },
  { name: "Qatar", code: "QA", flag: "/images/flag1.png", dialCode: "+974" },
  { name: "Bahrain", code: "BH", flag: "/images/flag1.png", dialCode: "+973" },
  { name: "Oman", code: "OM", flag: "/images/egypt.png", dialCode: "+968" },
];

interface CountrySelectProps {
  selectedCountry: Country;
  onSelect: (country: Country) => void;
  className: string;
}

export function CountrySelect({
  selectedCountry,
  onSelect,
  className,
}: CountrySelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`  ${className}`}>
      <button
        type="button"
        className="flex items-center gap-2 px-3 py-4 bg-lighter rounded-l-full hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src={selectedCountry.flag} alt="Egypt" width={24} height={24} />
        <span className="text-sm text-gray-600">
          {selectedCountry.dialCode}
        </span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg">
          <div className="py-1 max-h-60 overflow-auto">
            {countries.map((country) => (
              <button
                key={country.code}
                type="button"
                className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-3"
                onClick={() => {
                  onSelect(country);
                  setIsOpen(false);
                }}
              >
                <span className="text-sm">{country.name}</span>
                <Image
                  src={country.flag}
                  alt={country.name}
                  width={20}
                  height={20}
                />
                <span className="text-sm text-gray-500 mr-auto">
                  {country.dialCode}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export type { Country };
