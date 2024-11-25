"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
}

export default function ServiceCard({
  title,
  description,
  Icon,
  color,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 transition-transform duration-300 hover:scale-105">
      <div className="flex items-center gap-4">
        <div className={cn("p-3 rounded-full", color)}>
          <Icon className="w-6 h-6 rounded-full text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
