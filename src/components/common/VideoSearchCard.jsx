import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Avatar from "@material-ui/core/Avatar";

import "./css/videoSearchCard.css";
import Tooltip from "./Tooltip";
import formatNumber from "../utils/formatNumber";

const VideoSearchCard = ({
  thumbnail,
  title,
  description,
  avatar,
  channel,
  views,
  timeStand,
  duration,
  style,
}) => {
  if (!title) return null;

  return (
    <div className="videoSearchCard" style={style}>
      <div
        className="videoSearchCard__thumbnail"
        style={{ backgroundImage: `url(${thumbnail})` }}
      >
        <p className="videoSearchCard__duration">{duration}</p>
        <div className="videoSearchCard__iconContainer">
          <QueryBuilderIcon className="videoSearchCard__queryIcon" />
        </div>
        <div className="videoSearchCard__iconContainer2">
          <PlaylistPlayIcon className="videoSearchCard__playIcon" />
        </div>
        <PlayArrowIcon className="videoSearchCard__playArrowIcon" />
      </div>

      <div className="infoContainer">
        <div className="videoSearchCard__context">
          <h3
            className="videoSearchCard__title"
            data-toggle="tooltip"
            title={title}
          >
            {title}
          </h3>
          <div id="videoSearchCard__textContainer">
            <div className="videoSearchCard__viewTime grey textSize__info">
              <p>
                {formatNumber(views)} views • {timeStand}
              </p>
              <div className="videoSearchCard__channelBox grey textSize">
                <Avatar
                  src={avatar}
                  alt={channel}
                  className="videoSearchCard__avatar"
                />
                <Tooltip tooltip={channel}>
                  <p>{channel}</p>
                </Tooltip>
                <Tooltip tooltip="Verified">
                  <CheckCircleIcon className="videoSearchCard__circleIcon m5" />
                </Tooltip>
              </div>
            </div>
          </div>
          <p className="grey textSize__description">{description}</p>
        </div>

        <MoreVertIcon className="grey2" />
      </div>
    </div>
  );
};

export default VideoSearchCard;
