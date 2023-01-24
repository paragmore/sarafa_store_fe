import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StoryCard } from "../../core/components/StoryCard";
import { Category } from "../Body";
import { StoriesPage } from "./StoriesPage";

interface StoryProps {
  categories: Array<Category>;
}

export const Stories = (props: StoryProps) => {
  const [stories, setStories] = useState(props.categories);
  const navigate = useNavigate();
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

  const onClickStory = (storyId: string) => {
    navigate("/story", { state: { storyId } });
  };

  return (
    <>
      {props.categories.map((category, index) => (
        <div onClick={() => onClickStory(category?.id)}>
          <StoryCard key={index} {...category} />
        </div>
      ))}
    </>
  );
};
