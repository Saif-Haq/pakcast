import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const podcastStore = (set) => ({
  podcasts: [
    {
      id: 1,
      title: "ONE",
      host: ["steve", "selena"],
      slug: "one",
      emojji: "-",
      imageUrl: "example.com/x.png",
      summary: "kfnkernfkjernfr",
      episodeCount: 100,
      top_episodes: [
        {
          id: "8320984",
          title: "Episode 2",
          url: "youtube.com/tatemcrae",
        },
      ],
    },
    {
      id: 2,
      title: "ONE",
      host: ["steve", "selena"],
      slug: "one",
      emojji: "-",
      imageUrl: "example.com/x.png",
      summary: "kfnkernfkjernfr",
      episodeCount: 100,
      top_episodes: [
        {
          id: "8320984",
          title: "Episode 2",
          url: "youtube.com/tatemcrae",
        },
      ],
    },
    {
      id: 21,
      title: "ONE",
      host: ["steve", "selena"],
      slug: "one",
      emojji: "-",
      imageUrl: "example.com/x.png",
      summary: "kfnkernfkjernfr",
      episodeCount: 100,
      top_episodes: [
        {
          id: "8320984",
          title: "Episode 2",
          url: "youtube.com/tatemcrae",
        },
      ],
    },
    {
      id: 281,
      title: "ONE",
      host: ["steve", "selena"],
      slug: "one",
      emojji: "-",
      imageUrl: "example.com/x.png",
      summary: "kfnkernfkjernfr",
      episodeCount: 100,
      top_episodes: [
        {
          id: "8320984",
          title: "Episode 2",
          url: "youtube.com/tatemcrae",
        },
      ],
    },
  ],
  addPodcast: (podcast) => {
    set((state) => ({
      podcasts: [podcast, ...state.podcasts],
    }));
  },

  removePodcast: (podcastId) => {
    set((state) => ({
      podcasts: state.podcasts.filter((p) => p.id !== podcastId),
    }));
  },

  //   toggleCourseStatus: (podcastId) => {
  //     set((state) => ({
  //       courses: state.courses.map((course) =>
  //         course.id === podcastId
  //           ? { ...course, completed: !course.completed }
  //           : course
  //       ),
  //     }));
  //   },
});

const usePodcastStore = create(
  devtools(
    persist(podcastStore, {
      name: "podcasts",
    })
  )
);

export default usePodcastStore;
