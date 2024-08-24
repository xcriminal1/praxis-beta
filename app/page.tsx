import SortableListDemo from "@/components/clutui/sortable-list-component";
import BoxRevealDemo from "@/components/magicui/box-reveal-component";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-10 pt-3 md:pt-10 flex flex-col justify-center">
      <div className="h-full md:min-h-[70vh] flex  flex-col md:flex-row items-center justify-between gap-18">
        <div className="w-full md:w-[65%] h-full md:h-[75vh]  pl-8 pt-2 md:pt-6">
          <BoxRevealDemo />
        </div>
        <div className="w-full md:w-[60%] h-full md:h-[60vh] items-center justify-center pt-6 hidden md:flex">
          <SortableListDemo />
        </div>
      </div>
    </main>
  );
}
