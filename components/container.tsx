import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function Container({ children, className }: Props) {
  return (
    <div className="flex flex-col  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <main className={`flex-grow ${className}`}>{children}</main>
    </div>
  );
}
