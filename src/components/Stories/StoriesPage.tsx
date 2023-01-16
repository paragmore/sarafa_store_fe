import React from "react";
import Stories from "react-insta-stories";

export const StoriesPage = () => {
  return (
    <div style={{ position: "fixed", width: "100%", height: "100%" }}>
      <Stories
        stories={[
          {
            url: "https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA=w240-h480-rw",
          },
          {
            url: "https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA=w240-h480-rw",
          },
          {
            url: "https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA=w240-h480-rw",
          },
          {
            url: "https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA=w240-h480-rw",
          },
        ]}
        defaultInterval={1500}
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};
