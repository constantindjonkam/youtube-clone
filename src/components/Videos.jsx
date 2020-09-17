import React, { useState, useEffect } from "react";

import "./css/videos.css";
import CategoryBar from "./common/CategoryBar";
import VideoCard from "./common/VideoCard";
import { getItems } from "./services/videoService";
import AddVideoModal from "./AddVideoModal";

const Videos = ({ className = "" }) => {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getItems("videos", setVideos, "views");
    getItems("categories", setCategories, "active");
  }, []);

  return (
    <div className={"videos " + className}>
      <CategoryBar categories={categories} />
      <div id="videoContainer">
        <h3 id="containerTitle">Recommended</h3>
        <AddVideoModal />
        <div id="videoCards">
          {videos.map((video) => (
            <VideoCard
              key={video.thumbnail}
              thumbnail={video.thumbnail}
              title={video.title}
              avatar={video.avatar}
              channel={video.channel}
              views={video.views}
              timeStand={video.timeStand}
              duration={video.duration}
              style={{ marginBottom: 40 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
