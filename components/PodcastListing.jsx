"use client";
import { FiCloudLightning } from "react-icons/fi";
import { motion } from "framer-motion";
import usePodcastStore from "@/store/podastStore";

const PodcastListing = () => {
  const { podcasts, removePodcast } = usePodcastStore((state) => ({
    podcasts: state.podcasts,
    removePodcast: state.removePodcast,
    //   toggleCourseStatus: state.,
  }));

  return (
    // <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-slate-800 p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-slate-800/50">
    //   <div className="relative z-2 flex flex-row items-center justify-center overflow-hidden rounded-[7px] bg-slate-900 p-8 transition-colors duration-500 group-hover:bg-slate-800">
    //     <FiCloudLightning className="relative z-10 mb-10 mt-2 rounded-full border-2 border-indigo-500 bg-slate-900 p-4 text-7xl text-indigo-500" />

    //     <h4 className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50">
    //       The Test Podcast
    //     </h4>
    //     {/* <h4 className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50">
    //         Go faster
    //     </h4>
    //     <p className="relative z-10 text-slate-400">
    //        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ipsum
    //       sed blanditiis iste molestias nemo nobis repellendus nisi dolorum
    //       itaque optio impedit cum voluptatem facilis minima, quasi laborum.
    //       Nihil, quaerat.
    //     </p> */}
    //   </div>

    //   <motion.div
    //     initial={{ rotate: "0deg" }}
    //     animate={{ rotate: "360deg" }}
    //     style={{ scale: 1.75 }}
    //     transition={{
    //       repeat: Infinity,
    //       duration: 3.5,
    //       ease: "linear",
    //     }}
    //     className="absolute inset-0 z-10 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    //   />
    // </div>
    <div className="p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-4">
        {podcasts?.map((podcast) => (
          <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-slate-800 p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-slate-800/50">
            <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-slate-900 p-8 transition-colors duration-500 group-hover:bg-slate-800">
              {/* <FiCloudLightning className="relative z-10 mb-10 mt-2 rounded-full border-2 border-indigo-500 bg-slate-900 p-4 text-7xl text-indigo-500" /> */}

              <h4 className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50">
                {podcast.title}
              </h4>
              <p className="relative z-10 text-slate-400">{podcast.summary}</p>
            </div>

            <motion.div
              initial={{ rotate: "0deg" }}
              animate={{ rotate: "360deg" }}
              style={{ scale: 1.75 }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: "linear",
              }}
              className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PodcastListing;
