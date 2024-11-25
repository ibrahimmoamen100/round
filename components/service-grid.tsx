"use client";

import { Building2, Car, Ticket } from "lucide-react";
import ServiceCard from "../components/service-card";

const services = [
  {
    title: "خدمات الرحلات",
    description: "فرصة رائعة لاكتشاف اماكن جديدة وتجربة مغامرات مميزة",
    Icon: Ticket,
    color: "bg-cyan-500",
  },
  {
    title: "خدمات التنقل",
    description: "يمكنك حجز التكسي او الباص حسب طلبك بإتصال رقمك معنا",
    Icon: Car,
    color: "bg-purple-500",
  },
  {
    title: "الخدمات الترفيهية",
    description:
      "وسيلة رائعة لممارسة المتعة والتنوع إلى ذلك، اختيار الأنشطة الترفيهية التي تناسب اهتماماتهم",
    Icon: Ticket,
    color: "bg-emerald-400",
  },
  {
    title: "خدمة حجز الفنادق",
    description:
      "خدمة حجز الفندق هي طريقة مريحة وسهلة لضمان مكان إقامة مناسب أثناء الرحلات",
    Icon: Building2,
    color: "bg-blue-500",
  },
];

export default function ServicesGrid() {
  return (
    <div className="space-y-6" dir="rtl">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
}
