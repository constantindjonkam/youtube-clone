import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";

import "./css/videoCard.css";
import formatNumber from "../utils/formatNumber";

const VideoCard = ({
  thumbnail,
  avatar,
  title,
  channel,
  views,
  timeStand,
  duration,
  style,
}) => {
  if (!title) return null;

  return (
    <div className="videoCard" style={style}>
      <div
        className="videoCard__thumbnail"
        style={{ backgroundImage: `url(${thumbnail})` }}
      >
        <p className="duration">{duration}</p>
        <div className="videoCard__iconContainer">
          <QueryBuilderIcon className="videoCard__queryIcon" />
        </div>
      </div>
      <div className="infoContainer">
        <Avatar className="videoCard__avatar" src={avatar} alt={channel} />
        <div className="videoCard__context">
          <h5 style={{ maxLines: 2 }}>{title}</h5>
          <div id="videoCard__textContainer">
            <div className="videoCard__channelBox grey textSize">
              <p>{channel}</p>
              <CheckCircleIcon className="videoCard__circleIcon m5" />
            </div>
            <div className="videoCard__viewTime grey textSize">
              <p>
                {formatNumber(views)} views • {timeStand}
              </p>
            </div>
          </div>
        </div>
        <MoreVertIcon className="grey2" />
      </div>
    </div>
  );
};

export default VideoCard;
