"use client";
import { DarkGridHero } from "@/components/DarkGridHero";
import AddPodcastModal from "@/components/Model";
import ShimmerCard from "@/components/ShimmerCard";

export default function Home() {
  return (
    <>
      <DarkGridHero />;
      <div className="bg-slate-950 px-4 py-12">
        <ShimmerCard />
      </div>
      <AddPodcastModal />
    </>
  );
}
