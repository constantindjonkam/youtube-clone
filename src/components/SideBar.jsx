import React from "react";
import { useHistory } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./css/sidebar.css";
import MenuButton from "./common/MenuButton";
import Separator from "./common/Seperator";

const SideBar = ({ hide, style }) => {
  const history = useHistory();

  const linker = () => {
    history.replace("");
    console.log("replaced");
  };

  if (hide) return null;

  return (
    <div className="sidebar" style={style}>
      <MenuButton onClick={linker} Icon={HomeIcon} title="Home" active />
      <MenuButton Icon={WhatshotIcon} title="Trending" />
      <MenuButton Icon={SubscriptionsIcon} title="Subscriptions" />
      <Separator marginVertical={10} />
      <MenuButton Icon={VideoLibraryIcon} title="Libary" />
      <MenuButton Icon={HistoryIcon} title="History" />
      <MenuButton Icon={OndemandVideoIcon} title="Your videos" />
      <MenuButton Icon={WatchLaterIcon} title="Watch later" />
      <MenuButton Icon={MenuOpenIcon} title="Popular videos" />
      <MenuButton Icon={ExpandMoreIcon} title="Show more" />
      <Separator marginVertical={10} />
    </div>
  );
};

export default SideBar;
