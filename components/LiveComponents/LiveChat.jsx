import React, { memo, useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import profile from "@/assets/icons/profile.png";
import Image from "next/image";
import "animate.css";

const LiveChat = memo(({ showCtrl, sendMessage, sendFile, chats, show }) => {
  const chatRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    chatRef.current.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      sendFile(selectedFile);
      setSelectedFile(null);
    }
  };

  const handleIconClick = () => {
    document.getElementById("file").click();
  };

  return (
    <div className="p-5 bg-gray-100">
      <div
        className={`h-[96vh] flex flex-col fixed right-0 overflow-hidden z-30 bg-white rounded-2xl lg:relative lg:w-[15vw]`}
      >
        <div className="h-[70vh] p-2 w-full overflow-y-auto flex flex-col gap-4 lg:h-[87vh]">
          {chats.map((chat, id) => (
            <div
              key={id}
              className="bg-chatBlue w-fit rounded-md p-2 flex flex-row gap-2"
            >
              <div className="imageArea">
                <Image src={profile} width={50} height={50} />
              </div>
              <div className="flex flex-col justify-start">
                <span className="text-blue-900 font-semibold">
                  {chat.displayName}
                </span>
                <span className="font-medium">{chat.message}</span>
                {chat.fileUrl && (
                  <a
                    href={chat.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    {chat.fileName}
                  </a>
                )}
              </div>
            </div>
          ))}
          <div ref={chatRef} />
        </div>
        <form
          className="h-[20vh]  p-2 flex items-center bg-white lg:h-[10vh]"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target;
            const input = form.message;
            if (input.value.trim()) {
              sendMessage(e);
              input.value = "";
            }
          }}
        >
          <button
            type="button"
            onClick={handleIconClick}
            className="bg-gray-100 p-3 rounded-lg mr-2"
          >
            <FontAwesomeIcon icon={faPaperclip} />
          </button>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className="hidden"
          />
          <input
            type="text"
            name="message"
            className="h-[44px] w-[7vw] flex-grow bg-gray-100 rounded-lg p-3 focus:outline-none focus:border focus:border-orange-500 placeholder:text-slate-600"
            placeholder="Mesaj Gönder..."
            autoComplete="off"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white p-2 rounded-lg ml-2"
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
});

export default LiveChat;
