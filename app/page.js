"use client";
import { DarkGridHero } from "@/components/DarkGridHero";
import AddPodcastModal from "@/components/Model";
import PodcastListing from "@/components/PodcastListing";

export default function Home() {
  return (
    <>
      <DarkGridHero />;
      <div className="bg-slate-950 px-4 py-12">{<PodcastListing />}</div>
      {/* <PodcastListing /> */}
      {/* <AddPodcastModal /> */}
    </>
  );
}
