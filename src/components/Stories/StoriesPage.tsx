import React from "react";
import Stories, { WithSeeMore } from "react-insta-stories";
import { Action, Story } from "react-insta-stories/dist/interfaces";

export const StoriesPage = () => {
  return (
    <div style={{ width: "100%", height: "100%", position:'fixed', zIndex:3 }}>
      <Stories
        loop
        keyboardNavigation
        defaultInterval={3000}
        stories={stories2}
        onStoryEnd={(s: any, st: any) => console.log("story ended", s, st)}
        onAllStoriesEnd={(s: any, st: any) => console.log("all stories ended", s, st)}
        onStoryStart={(s: any, st: any) => console.log("story started", s, st)}
      />
    </div>
  );
};

const stories2 = [
  {
    content: ({}) => {
      return (
        <div style={contentStyle}>
          <h1>Hey All 👋</h1>
          <h1>Check shivam's journey story.</h1>

          {/* <pre>
            <code style={code}>here they are 😄 -></code>
          </pre> */}
          <img
            style={image}
            src="https://i.ibb.co/fY1DmQW/8aacdef9ba37db60c7a96271877cfbb5.jpg"
          ></img>
          <h4>stories creted by Cubestop travel app</h4>
        </div>
      );
    },
  },
  {
    content: ({}) => {
      return (
        <div style={contentStyle}>
          <h1>Hey All 👋</h1>
          <h1>Check shivam's journey story.</h1>

          {/* <pre>
            <code style={code}>here they are 😄 -></code>
          </pre> */}
          <img
            style={image}
            src="https://i.ibb.co/fY1DmQW/8aacdef9ba37db60c7a96271877cfbb5.jpg"
          ></img>
          <h4>stories creted by Cubestop travel app</h4>
        </div>
      );
    },
  },
  {
    content: ({ action, story }: {action: Action, story: Story}) => {
      return (
        // <WithSeeMore story={story} action={action}>
          <div style={{ background: "pink", padding: 20 }}>
            <h1 style={{ marginTop: "100%", marginBottom: 0 }}>🌝</h1>
            <h1 style={{ marginTop: 5 }}>
              Here is the location journey story created for the shivam's
              journey.
            </h1>
          </div>
        // </WithSeeMore>
      );
    },
    seeMoreCollapsed: ({ toggleMore, action }: any) => (
      <p onClick={() => toggleMore(true)}>
        A custom See More message →
      </p>
    ),
    seeMore: ({ close }: any) => (
      <div
        style={{
          maxWidth: "100%",
          height: "100%",
          padding: 40,
          background: "white",
        }}
      >
        <h2>Just checking the see more feature.</h2>
        <p style={{ textDecoration: "underline" }} onClick={close}>
          Go on, close this popup.
        </p>
      </div>
    ),
    duration: 1000,
  },
  {
    content: ({ action, isPaused }: any) => {
      return (
        <div style={contentStylestoryback}>
          <img style={image} src="https://i.ibb.co/MGbfDTH/Group-13.png"></img>
        </div>
      );
    },
  },
  {
    content: ({ action, isPaused }: any) => {
      return (
        <div style={contentStylestoryback}>
          <img
            style={image}
            src="https://downloadwap.com/thumbs2/wallpapers/p2/2019/nature/48/c62b256713551358.jpg"
          ></img>
        </div>
      );
    }
  },

  // {
  //   url: "https://picsum.photos/1080/1920"
  //   seeMore: ({ close }) => (
  //     <div
  //       style={{
  //         maxWidth: "100%",
  //         height: "100%",
  //         padding: 40,
  //         background: "white"
  //       }}
  //     >
  //       <h2>Just checking the see more feature.</h2>
  //       <p style={{ textDecoration: "underline" }} onClick={close}>
  //         Go on, close this popup.
  //       </p>
  //     </div>
  //   )
  // },
  // {
  //   url:
  //     "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  //   type: "video"
  // },
  // {
  //   content: Story2
  // }
];

const image = {
  display: "block",
  maxWidth: "100%",
  borderRadius: 4,
};

const contentStylestoryback = {
  background: "black",
  width: "100%",
  padding: 20,
  color: "white",
};

const code = {
  background: "#eee",
  padding: "5px 10px",
  borderRadius: "4px",
  color: "#333",
};

const contentStyle = {
  background: "salmon",
  width: "100%",
  padding: 20,
  color: "white",
};

const customSeeMore = {
  textAlign: "center",
  fontSize: 14,
  bottom: 20,
  position: "relative",
};
