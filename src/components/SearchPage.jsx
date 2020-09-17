import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TuneIcon from "@material-ui/icons/Tune";

import "./css/searchPage.css";
import Separator from "./common/Seperator";
import VideoSearchCard from "./common/VideoSearchCard";
import VideoChannelCard from "./common/VideoChannelCard";
import Tooltip from "./common/Tooltip";
import { getItems } from "./services/videoService";

const SearchPage = ({ className = "" }) => {
  const params = useParams();

  const [videos, setVideos] = useState([]);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    getItems("channels", setChannels, "subscribers");
    getItems("videos", setVideos, "views");
  }, []);

  const allVideos = [...channels, ...videos];

  const filtered = allVideos.filter((video) => {
    if (
      video.title
        ? video.title
            .toLowerCase()
            .split(" ")
            .join("")
            .includes(params.searchTerm.toLowerCase().split(" ").join(""))
        : null
    )
      return video;
    if (
      video.channel
        ? video.channel
            .toLowerCase()
            .split(" ")
            .join("")
            .includes(params.searchTerm.toLowerCase().split(" ").join(""))
        : null
    )
      return video;
    if (
      video.description
        ? video.description
            .toLowerCase()
            .split(" ")
            .join("")
            .includes(params.searchTerm.toLowerCase().split(" ").join(""))
        : null
    )
      return video;

    return null;
  });

  return (
    <div className={"searchPage " + className}>
      <Tooltip tooltip="Open search filters">
        <div className="searchPage_filter">
          <TuneIcon /> <p className="searchPage_filterText">FILTER</p>
        </div>
      </Tooltip>
      <div className="searchPage_content">
        <Separator marginTop={5} marginBottom={15} />

        {filtered.length ? (
          filtered.map((video) =>
            video.thumbnail ? (
              <VideoSearchCard
                key={video.thumbnail}
                thumbnail={video.thumbnail}
                title={video.title}
                description={video.description}
                avatar={video.avatar}
                channel={video.channel}
                views={video.views}
                timeStand={video.timeStand}
                duration={video.duration}
              />
            ) : (
              <VideoChannelCard
                key={video.avatar}
                channel={video.channel}
                description={video.description}
                subscribers={video.subscribers}
                videos={video.videos}
                avatar={video.avatar}
              />
            )
          )
        ) : (
          <div className="SearchPage__notfound">
            <img
              src={require("../components/images/notfound.png")}
              alt="No result found"
            />
            <p className="SearchPage__notfoundText">No results found</p>
            <p className="SearchPage__notfoundsubTitle">
              Try different keywords or remove search filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
