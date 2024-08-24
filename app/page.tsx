import SortableListDemo from "@/components/clutui/sortable-list-component";
import BoxRevealDemo from "@/components/magicui/box-reveal-component";

export default function Home() {
  return (
    <main className="px-10 pt-3 md:pt-10 flex flex-col justify-center bg-red-400">
      <div className="h-full md:min-h-[70vh] flex w-full flex-col md:flex-row items-center justify-between gap-18 bg-blue-600">
        <div className="w-full md:w-[65%] h-full md:h-[75vh] md:pl-8 px-2 pt-6">
          <BoxRevealDemo />
        </div>
        <div className="w-full md:w-[60%] h-full md:h-[60vh] items-center justify-center pt-6 hidden md:flex">
          <SortableListDemo />
        </div>
      </div>
    </main>
  );
}
