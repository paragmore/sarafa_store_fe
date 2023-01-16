import React, { useState, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import { StoryCard } from "../../core/components/StoryCard";

interface StoryProps {
  categories: Array<{ name: string; image: string }>;
}

export const Stories = (props: StoryProps) => {
  const [stories, setStories] = useState(props.categories);
  const [currentStory, setCurrentStory] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    console.log("stories", stories);
  }, [stories]);

  useEffect(() => {
    fetch("https://my-backend-api.com/stories")
      .then((response) => response.json())
      .then((data) => setStories(data));
  }, []);

  return (
    <>
      {props.categories.map((category, index) => (
        <div >
          <StoryCard key={index} {...category} />
        </div>
      ))}
    </>
  );
};
