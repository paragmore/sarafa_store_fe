import React, { useState, useEffect } from "react";
import { StoryCard } from "../../core/components/StoryCard";
import { Category } from "../Body";
import { StoriesPage } from "./StoriesPage";

interface StoryProps {
  categories: Array<Category>;
}

export const Stories = (props: StoryProps) => {
  const [stories, setStories] = useState(props.categories);
  const [currentStory, setCurrentStory] = useState<string | undefined>(
    undefined
  );
  const [autoPlay, setAutoPlay] = useState(true);
  useEffect(() => {
    console.log("stories", stories);
  }, [stories]);

  // useEffect(() => {
  //   fetch("https://my-backend-api.com/stories")
  //     .then((response) => response.json())
  //     .then((data) => setStories(data));
  // }, []);

  return (
    <>
      {props.categories.map((category, index) => (
        <div onClick={() => setCurrentStory(category?.id)}>
          <StoryCard key={index} {...category} />
        </div>
      ))}
    </>
  );
};
