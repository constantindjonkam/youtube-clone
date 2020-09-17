import db from "../../firebase";
import * as yup from "yup";

const videoSchema = yup.object().shape({
  title: yup.string().max(256).required(),
  thumbnail: yup.string().url().required(),
  avatar: yup.string().url().required(),
  channel: yup.string().required(),
  views: yup.number().required(),
  timeStand: yup.string().required(),
  duration: yup.string().required(),
  description: yup.string().required(),
});

const channelSchema = yup.object().shape({
  channel: yup.string().required(),
  description: yup.string().required(),
  videos: yup.number().required(),
  subscribers: yup.number().required(),
  avatar: yup.string().url().required(),
});

export const addVideo = async (video) => {
  const isValid = await videoSchema.isValid(video);
  if (!isValid) return;

  const result = await db.collection("videos").add({
    title: video.title,
    thumbnail: video.thumbnail,
    avatar: video.avatar,
    channel: video.channel,
    views: video.views,
    timeStand: video.timeStand,
    duration: video.duration,
    description: video.description,
  });
  if (result) console.log("Document successfully written!");
};

export const addChannel = async (channel) => {
  const isValid = await channelSchema.isValid(channel);
  if (!isValid) return;

  const result = await db.collection("channels").add({
    avatar: channel.avatar,
    channel: channel.channel,
    videos: channel.videos,
    subscribers: channel.subscribers,
    description: channel.description,
  });
  if (result) console.log("Document successfully written!");
};

export const getItems = (collection, myFunction, orderBy, order = "desc") => {
  db.collection(collection)
    .orderBy(orderBy, order)
    .onSnapshot((snapshot) =>
      myFunction(snapshot.docs.map((doc) => doc.data()))
    );
};
