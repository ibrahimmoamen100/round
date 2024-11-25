import Link from "next/link";

export default function Hero() {
  return (
    <section className="   bg-slate-600 text-white min-h-screen relative ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-5"
        autoPlay
        loop
        muted
      >
        <source src="/images/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="h-screen w-screen z-60 relative bg-[rgba(0,0,0,0.38)] block ">
        <div className="flex flex-col items-end w-full h-full justify-center max-w-7xl mx-auto  ">
          <h1 className="text-5xl font-bold mb-4">اجعل رحلتك أكثر تحدياً</h1>
          <p className="text-xl mb-12">
            اكتشف العديد من الرحلات و الخدمات الرائعة
          </p>
          <Link
            href={"/sign-up"}
            className="bg-primary text-white px-8 py-3 rounded-full flex items-center justify-center gap-2"
          >
            <span className="transform ">←</span>
            احجز الآن
          </Link>
        </div>
      </div>
    </section>
  );
}
