import { Search, MapPin, Calendar } from "lucide-react";
import { SelectDemo } from "./select-demo";

const travelTypes = ["سفاري", "بري", "بحري"];
const destinations = ["القاهرة", "الاسكندرية", "الغردقة"];
const prices = ["1000", "2000", "3000"];

export default function SearchSection() {
  return (
    <section className="md:max-w-3xl max-w-fit m-auto  px-8 -mt-12 bg-white shadow-sm shadow-primary rounded-3xl py-8 z-50 relative">
      <div className="flex lg:flex-row-reverse flex-col justify-between md:items-end items-center gap-4">
        <div className="flex flex-col gap-2 justify-center items-end">
          <span className="text-sm font-bold text-gray-500">نوع الرحله</span>
          <SelectDemo
            className="bg-gray-100 rounded-full py-3 px-4 h-auto flex-row-reverse"
            options={travelTypes}
            name="اختر نوع الرحله"
          />
        </div>
        <div className="flex flex-col gap-2 justify-center items-end">
          <span className="text-sm font-bold text-gray-500"> الوجهات</span>
          <SelectDemo
            className="bg-gray-100  rounded-full py-3 px-4 h-auto flex-row-reverse"
            options={destinations}
            name="اختر الوجهه"
          />
        </div>
        <div className="flex flex-col gap-2 justify-center items-end">
          <span className="text-sm font-bold text-gray-500">السعر </span>
          <SelectDemo
            options={prices}
            className="bg-gray-100 rounded-full py-3 px-4 h-auto flex-row-reverse "
            name="50 ج.م "
          />
        </div>
        <button className="bg-primary text-white px-8 py-3 rounded-full flex items-center justify-center gap-2">
          <span className="transform ">←</span>
          البحث
        </button>
      </div>
    </section>
  );
}
