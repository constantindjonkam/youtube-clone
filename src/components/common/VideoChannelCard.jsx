import React from "react";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Avatar from "@material-ui/core/Avatar";

import "./css/videoChannelCard.css";
import Tooltip from "./Tooltip";
import Separator from "./Seperator";
import formatNumber from "../utils/formatNumber";

const VideoChannelCard = ({
  avatar,
  channel,
  description,
  subscribers,
  videos,
  style,
}) => {
  if (!channel) return null;

  return (
    <>
      <div className="videoChannelCard" style={{ style }}>
        <div className="videoChannelCard__avatarContainer">
          <Avatar
            src={avatar}
            alt={channel}
            className="videoChannelCard__avatar"
          />
        </div>
        <div className="videoChannelCard__main">
          <Tooltip tooltip={channel}>
            <h3 className="videoChannelCard__title">{channel}</h3>
          </Tooltip>
          <Tooltip tooltip="Verified">
            <CheckCircleIcon className="videoChannelCard__circleIcon" />
          </Tooltip>
          <div className="videoChannelCard__context">
            <div className="videoChannelCard__text">
              <p className="videoChannelCard__subscribers">
                {formatNumber(subscribers)} subscribers • {formatNumber(videos)}{" "}
                videos
              </p>
              <p>{description}</p>
            </div>

            <div className="videoChannelCard__buttons">
              <div className="videoChannelCard__button">SUBSCRIBED</div>
              <NotificationsActiveIcon className="videoChannelCard__notifIcon" />
            </div>
          </div>
        </div>
      </div>
      <Separator marginVertical={20} />
    </>
  );
};

export default VideoChannelCard;
