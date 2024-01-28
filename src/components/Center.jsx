import _ from "lodash";
import {
  BellAlertIcon,
  FaceSmileIcon,
  GifIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  PhotoIcon,
  PlusCircleIcon,
  QuestionMarkCircleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useState } from "react";
import ReactPlayer from "react-player";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import db from "../firebase";
import DummyPhoto from ".././placeholder.jpg";
import { FaHashtag } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "../features/chatSlice";
import { useEffect } from "react";
import Message from "./Message";
import { selectUser } from "../features/userSlice";
import Modal from "./Modal";
import { storage } from "../firebase";
import TotalMembers from "./TotalMembers";
const Center = () => {
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [image, setImage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [video, setVideo] = useState("");
  const [isToggle, setIsToggle] = useState(false);
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState([]);
  const [temp, setTemp] = useState([]);
  var dedupThings = [];
  var unique = [];
  var uni = {};
  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
    messages && (uni = _.uniqBy(messages, "data.email"));

    messages && setTemp(uni);
  }, [channelId, messages]);

  function ImageUpload() {
    let fileName;
    let imageRef;
    fileName = new Date().getTime() + image.name;
    imageRef = ref(storage, fileName);
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);

            db.collection("channels")
              .doc(channelId)
              .collection("messages")
              .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                messageImage: url || "",
                video: video || "",
                uid: user.uid,
                photo: user.photo,
                email: user.email,
                displayName: user.displayName,
              });
          })

          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        // setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  const sendMessage = (e) => {
    e.preventDefault();
    {
      image
        ? ImageUpload()
        : db
            .collection("channels")
            .doc(channelId)
            .collection("messages")
            .add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              message: input,
              messageImage: url || "",
              video: video || "",
              uid: user.uid,
              photo: user.photo,
              email: user.email,
              displayName: user.displayName,
            });
    }
    setInput("");
  };
  return (
    <div className="flex flex-unit-2 h-screen relative bg-slate-400">
      <div className="absolute top-0 bg-gray-800 px-4 py-6 w-[100%] flex justify-between items-center text-white text-gray-400">
        <div className="flex items-center">
          <FaHashtag size="25" />
          <h5 className="text-[25px]">{channelName}</h5>
        </div>

        <div className="flex bg-gray-600 px-2 py-1 rounded-md">
          <input
            type="text"
            className="border-0 focus:outline-none bg-gray-600"
          />
          <MagnifyingGlassIcon className="w-[1.5rem] h-[1.5rem]" />
        </div>

        <div className="text-white flex space-x-6">
          <BellAlertIcon className="w-[1.5rem] h-[1.5rem] cursor-pointer hover:text-gray-400 " />
          <MapPinIcon className="w-[1.5rem] h-[1.5rem] cursor-pointer hover:text-gray-400" />
          <UserPlusIcon className="w-[1.5rem] h-[1.5rem] cursor-pointer hover:text-gray-400" />
          <QuestionMarkCircleIcon className="w-[1.5rem] h-[1.5rem] cursor-pointer hover:text-gray-400" />
          <PhotoIcon className="w-[1.5rem] h-[1.5rem] cursor-pointer hover:text-gray-400" />
        </div>
      </div>
      <div className="text-white w-[75%] bg-[#242629] overflow-y-scroll scrollbar-hide max-h-[100%] mt-[5rem] py-8 px-4 ">
        {messages.map(({ id, data }) => (
          // <div className="" key={id}> {data.message}</div>
          <Message key={id} content={data} />
        ))}

        {/* <TotalMembers unique={dedupThings} /> */}
      </div>
      <div className="absolute w-[75%] mb-4 bottom-0   h-12 shadow-lg flex bg-gray-800 items-center space-x-2 px-4 text-[20px] border border-gray-900 shadow-lg">
        <PlusCircleIcon
          className="w-[1.5rem] h-[1.5rem] cursor-pointer hover:text-gray-400 text-green-700"
          onClick={(e) => setIsOpen(true)}
        ></PlusCircleIcon>
        <form action="" className="flex-grow">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-full px-1 focus:outline-none bg-inherit text-white py-4"
          />
          <button onClick={sendMessage} className="hidden">
            Send MEssage
          </button>
        </form>

        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          onSave={() => {
            setIsOpen(false);
          }}
          isToogleFalse={() => setIsToggle(false)}
          isToogleTrue={() => setIsToggle(true)}
        >
          {!isToggle ? (
            <>
              <label for="file">Select an Image to Share</label>
              <input
                type="file"
                id="file"
                className="hidden"
                onChange={(e) => setImage(e.target.files[0])}
              />
              {image && (
                <img
                  className="h-[100%] w-[90%] object-contain mt-2 mb-2"
                  src={URL.createObjectURL(image)}
                  alt=""
                  srcSet=""
                />
              )}
            </>
          ) : (
            <>
              <input
                className="border-b border-gray-500 mb-4 mt-1 focus:outline-none"
                type="text"
                placeholder="Enter a Video Link"
                value={video}
                onChange={(e) => setVideo(e.target.value)}
              />

              {video && <ReactPlayer width="90%" url={video} />}
            </>
          )}
        </Modal>
        <div className="flex items-center text-white space-x-4">
          <GifIcon className="w-[1.5rem] h-[1.5rem] cursor-pointer hover:text-gray-400 text-green-700" />
          <FaceSmileIcon className="w-[1.5rem] h-[1.5rem] cursor-pointer hover:text-gray-400 text-green-700" />
        </div>
      </div>
      <div className="w-[25%] px-4 py-4 max-h-[full] overflow-y-scroll  scrollbar-hide bg-gray-700 text-white mt-20">
        {channelName && (
          <h2 className="mb-2 mt-2 text-lg font-semibold">
            Total Channel Members
            {/* Members of {channelName.substring(0, 10) + ".."} */}
          </h2>
        )}
        <Divider />
        {temp &&
          temp.map((item) => (
            <div className="flex space-x-2 mb-4 items-center" key={item.id}>
              <img
                src={item?.data?.photo ? item.data.photo : DummyPhoto}
                className="h-10 w-10 rounded-full"
                alt=""
                srcset=""
              />
              <h2>
                {item?.data?.displayName ?
                item?.data?.displayName?.substring(0, 20) + ".."
                : 
                'User'}
                </h2>
            </div>
          ))}
      </div>
    </div>
  );
};

const Divider = () => <hr className="sidebar-hr mb-8" />;
export default Center;
