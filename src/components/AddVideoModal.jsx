import React from "react";
import Modal from "react-bootstrap/Modal";
import FeedbackIcon from "@material-ui/icons/Feedback";
import CloseIcon from "@material-ui/icons/Close";
import { Formik } from "formik";
import * as yup from "yup";

import "./css/modal.css";
import Tooltip from "./common/Tooltip";
import { addVideo } from "./services/videoService";

const schema = yup.object().shape({
  title: yup.string().max(256).required(),
  thumbnail: yup.string().url().required(),
  avatar: yup.string().url().required(),
  channel: yup.string().required(),
  views: yup.number().required(),
  timeStand: yup.string().required(),
  duration: yup.string().required(),
  description: yup.string().required(),
});

function AddVideoModal({ show, onHide }) {
  let showModal;
  const handleSubmit = (video) => {
    addVideo(video);
    showModal = false;
  };

  return (
    <>
      <Modal show={show || showModal} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>
            <div className="videoModal__header">
              <h4 className="videoModal__title">Upload videos</h4>
              <div className="videoModal__icons grey">
                <Tooltip tooltip="Send Feedback">
                  <FeedbackIcon />
                </Tooltip>
                <Tooltip tooltip="Close">
                  <CloseIcon onClick={onHide} />
                </Tooltip>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* This is suppose to be a component on itself but I decided to do it this way */}
          <Formik
            onSubmit={handleSubmit}
            initialValues={{
              title: "",
              thumbnail: "",
              avatar: "",
              channel: "",
              views: "",
              timeStand: "",
              duration: "",
              description: "",
            }}
            validationSchema={schema}
          >
            {({
              handleChange,
              handleSubmit,
              errors,
              setFieldTouched,
              touched,
            }) => (
              <div className="videoModal__body">
                <input
                  autoFocus
                  className="videoModal__input"
                  type="text"
                  placeholder="Title"
                  onChange={handleChange("title")}
                  onBlur={() => setFieldTouched("title")}
                />
                {touched.title && (
                  <p style={{ color: "red" }}>{errors.title}</p>
                )}
                <input
                  className="videoModal__input"
                  type="text"
                  placeholder="Avatar Link"
                  onChange={handleChange("avatar")}
                  onBlur={() => setFieldTouched("avatar")}
                />
                {touched.avatar && (
                  <p style={{ color: "red" }}>{errors.avatar}</p>
                )}
                <input
                  className="videoModal__input"
                  type="text"
                  placeholder="Thumbnail Link"
                  onChange={handleChange("thumbnail")}
                  onBlur={() => setFieldTouched("thumbnail")}
                />
                {touched.thumbnail && (
                  <p style={{ color: "red" }}>{errors.thumbnail}</p>
                )}
                <input
                  className="videoModal__input"
                  type="text"
                  placeholder="Description"
                  onChange={handleChange("description")}
                  onBlur={() => setFieldTouched("description")}
                />
                {touched.description && (
                  <p style={{ color: "red" }}>{errors.description}</p>
                )}
                <input
                  className="videoModal__input"
                  type="text"
                  placeholder="Channel Name"
                  onChange={handleChange("channel")}
                  onBlur={() => setFieldTouched("channel")}
                />
                {touched.channel && (
                  <p style={{ color: "red" }}>{errors.channel}</p>
                )}
                <br />
                <input
                  className="videoModal__smInput"
                  type="text"
                  placeholder="Views"
                  onChange={handleChange("views")}
                  onBlur={() => setFieldTouched("views")}
                />
                {touched.views && (
                  <p style={{ color: "red" }}>{errors.views}</p>
                )}
                <br />
                <input
                  className="videoModal__smInput"
                  type="text"
                  placeholder="Time Stand"
                  onChange={handleChange("timeStand")}
                  onBlur={() => setFieldTouched("timeStand")}
                />
                {touched.timeStand && (
                  <p style={{ color: "red" }}>{errors.timeStand}</p>
                )}
                <br />
                <input
                  className="videoModal__smInput"
                  type="text"
                  placeholder="Duration"
                  onChange={handleChange("duration")}
                  onBlur={() => setFieldTouched("duration")}
                />
                {touched.duration && (
                  <p style={{ color: "red" }}>{errors.duration}</p>
                )}
                <br />
                <button
                  onClick={handleSubmit}
                  className="videoModal__submitButton"
                  type="submit"
                >
                  Upload Video
                </button>

                <p className="videoModal__text grey">
                  By submitting your videos to YouTube, you acknowledge that you
                  agree to YouTube's{" "}
                  <span className="blue">Terms of Service</span> and{" "}
                  <span className="blue">Community Guidelines.</span>
                  Please make sure that you do not violate others' copyright or
                  privacy rights. <span className="blue">Learn more</span>
                </p>
              </div>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddVideoModal;
