import Hero from "@/components/hero";
import { z } from "zod";
import SearchSection from "@/components/search";
import Image from "next/image";
import Discover from "@/components/discover";
import ServicesGrid from "@/components/service-grid";
const discover = [
  {
    img: "/images/img1.png",
    title: "ولايه بوشر",
  },
  {
    img: "/images/img1.png",
    title: "ولايه بوشر",
  },
  {
    img: "/images/img1.png",
    title: "ولايه بوشر",
  },
  {
    img: "/images/img1.png",
    title: "ولايه بوشر",
  },
  {
    img: "/images/img1.png",
    title: "ولايه بوشر",
  },
];

export default function Home() {
  const discoverData = discover.map((item) => ({
    title: item.title,
    image: item.img,
  }));

  return (
    <div className="overflow-hidden">
      <Hero />
      <SearchSection />
      <Discover data={discoverData} />

      <main className="min-h-screen relative  mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <Image
          src="/images/bg-opacity.png"
          alt=""
          fill
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-900 text-end">
                الخدمات
              </h1>
              <p className="text-lg text-gray-600 " dir="rtl">
                توفر شركة Round In Oman العديد من الخدمات المتنوعة و المميزة
                لاستمتاعك و استمتاع معنا
              </p>
              <ServicesGrid />
            </div>
            <div className="relative  ">
              <Image
                src="/images/img4.png"
                alt="Oman Landscape"
                width={400}
                height={400}
                className="w-full md:max-w-[400px] max-w-[280px] h-auto object-cover "
              />
              <Image
                src="/images/img3.png"
                alt="Oman Landscape"
                width={360}
                height={360}
                className="w-full md:max-w-[300px] max-w-[180px] h-auto object-cover absolute top-24 right-10"
              />
            </div>
          </div>
        </div>
      </main>

      <div></div>
    </div>
  );
}
