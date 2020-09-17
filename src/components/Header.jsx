import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./css/header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

import Tooltip from "./common/Tooltip";
import AddVideoModal from "./AddVideoModal";

const Header = ({ style, onMenuClick, onSearchClick }) => {
  const [inputSearch, setInputSearch] = useState("");
  const [show, setShow] = useState(false);

  const history = useHistory();

  function handleInput({ target }) {
    setInputSearch(target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputSearch) return;

    history.push(`/search/${inputSearch}`);
  }

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  return (
    <div className="header" style={style}>
      <div className="header__menu">
        <MenuIcon onClick={onMenuClick} className="iconColor menuIcon" />
        <Link to="/">
          <img
            className="header__logo"
            data-toggle="tooltip"
            title="YouTube Home"
            src="https://1000logos.net/wp-content/uploads/2017/05/logo-youtube.png"
            alt="Youtube"
          />
        </Link>
      </div>

      <AddVideoModal show={show} onHide={handleHide} />

      <form onSubmit={handleSubmit} className="header__search">
        <input
          value={inputSearch}
          type="search"
          placeholder="Search"
          onChange={handleInput}
        />
        <div onClick={handleSubmit}>
          <Tooltip tooltip="Search">
            <div id="search_button_container">
              <SearchIcon
                onClick={onSearchClick}
                className="header__search__button"
              />
            </div>
          </Tooltip>
        </div>
      </form>

      <div className="header__icons">
        <Tooltip tooltip="Create">
          <VideoCallIcon onClick={handleShow} className="header__icon" />
        </Tooltip>
        <Tooltip tooltip="Youtube apps">
          <AppsIcon className="header__icon" />
        </Tooltip>
        <Tooltip tooltip="Notifications">
          <NotificationsIcon className="header__icon" />
        </Tooltip>
        <Avatar
          className="header__icon avatar"
          alt="Profile"
          src="https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095205-stock-illustration-businessman-profile-icon.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
