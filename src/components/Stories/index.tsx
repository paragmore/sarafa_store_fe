import React, { useState, useEffect } from "react";
import { StoryCard } from "../../core/components/StoryCard";
import { StoriesPage } from "./StoriesPage";

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

  // useEffect(() => {
  //   fetch("https://my-backend-api.com/stories")
  //     .then((response) => response.json())
  //     .then((data) => setStories(data));
  // }, []);

  return (
    <>
      {props.categories.map((category, index) => (
        <div >
          <StoryCard key={index} {...category} />
        </div>
      ))}
      {/* <div style={{position:'fixed', top:0, left:0, zIndex:100}}> 

      <StoriesPage/>
      </div> */}
    </>
  );
};
