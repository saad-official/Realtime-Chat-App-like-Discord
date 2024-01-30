import React from "react";
import ReactPlayer from "react-player";
import DummyPhoto from ".././placeholder.jpg";
const Message = ({
  id,
  content: {
    timestamp,
    displayName,
    email,
    message,
    photo,
    uid,
    messageImage,
    video,
  },
}) => {
  return (
    <div className="">
      <div className="bg-[#3c331cd0] border-l-2 border-orange-500 pb-4 mb-6 relative">
      <div className="flex items-start px-4 py-2">
        <img src={photo ? photo : DummyPhoto} className="h-10 w-10 rounded-full" alt="" />
        <div className="flex flex-col ml-2">
          <h5 className="text-white">{displayName ? displayName : 'User'}</h5>
          <p className="text-white">{message}</p>
        </div>
        <small className="ml-auto text-white">
          {new Date(timestamp?.toDate()).toLocaleString()}
        </small>
      </div>
      {messageImage && (
        <div className="pl-8">
          <img
            src={messageImage}
            className="border-l-4 border-[#79ff0c] rounded-sm h-[300px] w-[560px] object-cover"
            alt=""
          />
        </div>
      )}


        {video && (
          <div className="px-8">
            <iframe
              className=" mt-4 border-l-4 border-l-[#fc1a1a] rounded-sm"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${
                video.split("/")[3]
              }?start=0`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        )}
        <div className="px-8 mt-4 flex space-x-2">
          <div className="border cursor-pointer hover:opacity-80 border-gray-800 w-fit h-fit px-[5px] py-[5px]  flex space-x-[5px] items-center rounded-md bg-gray-700 ">
            <img
              src="https://cdn3.emoji.gg/emojis/7517-emojibomber.png"
              width="15px"
              height="15px"
              alt="Nothing_was_found"
            />
            <span className="text-[10px] text-gray-400">23</span>
          </div>

          <div className="border cursor-pointer hover:opacity-80 border-gray-800 w-fit h-fit px-[5px] py-[5px]  flex space-x-[5px] items-center rounded-md bg-gray-700 ">
            <img
              src="https://cdn3.emoji.gg/emojis/6836-heart.png"
              width="15px"
              height="15px"
              alt="Nothing_was_found"
            />
            <span className="text-[10px] text-gray-400">23</span>
          </div>

          <div className="border cursor-pointer hover:opacity-80 border-gray-800 w-fit h-fit px-[5px] py-[5px]  flex space-x-[5px] items-center  rounded-md bg-gray-700">
            <img
              src="https://cdn3.emoji.gg/emojis/6607-pythonthonk.png"
              width="15px"
              height="15px"
              alt="Nothing_was_found"
            />
            <span className="text-[10px] text-gray-400">23</span>
          </div>
          <div className="border cursor-pointer border-gray-800 w-fit h-fit px-[5px] py-[5px]  flex space-x-[5px] items-center rounded-md bg-gray-700 hover:opacity-80">
            <img
              src="https://cdn3.emoji.gg/emojis/2239-pringle-think.png"
              width="15px"
              height="15px"
              alt="Nothing_was_found"
            />
            <span className="text-[10px] text-gray-400">23</span>
          </div>
          <div className="border cursor-pointer hover:opacity-80 border-gray-800 w-fit h-fit px-[5px] py-[5px]  flex space-x-[5px] items-center  rounded-md bg-gray-700">
            <img
              src="https://cdn3.emoji.gg/emojis/1133-two-spirit-flag.png"
              width="15px"
              height="15px"
              alt="Nothing_was_found"
            />
            <span className="text-[10px] text-gray-400">23</span>
          </div>

          <div className="border cursor-pointer hover:opacity-80 border-gray-800 w-fit h-fit px-[5px] py-[5px]  flex space-x-[5px] items-center rounded-md bg-gray-700">
            <img
              src="https://cdn3.emoji.gg/emojis/8259-pat.png"
              width="15px"
              height="15px"
              alt="Nothing_was_found"
            />

            <span className="text-[10px] text-gray-400">23</span>
          </div>
        </div>
      </div>

      <div className="my-4">
        <Divider />
        {/* <Divider /> */}
      </div>
    </div>
  );
};
const Divider = () => <hr className="sidebar-hr" />;
export default Message;
