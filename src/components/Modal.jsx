import { XMarkIcon } from "@heroicons/react/24/outline";
import { PhoneIcon, PhotoIcon, PlayIcon } from "@heroicons/react/24/solid";
import React from "react";
const Modal = ({
  open,
  children,
  onClose,
  onSave,
  isToogleFalse,
  isToogleTrue,
}) => {
  if (!open) return null;
  return (
    <>
      <div className="OVERLAY_STYLES">
        <div className="MODAL_STYLES overflow-y-scroll max-h-[400px] scrollbar-hide">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem 1.5rem",
              borderBottom: "1px solid rgba(0,0,0,0.7)",
            }}
          >
            <h3>Edit Your Post</h3>
            <button
              style={{
                background: "none",
                border: "none",
                padding: "5px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                backgroundColor: "#e1dfdf",
                color: "#494949",
              }}
              onClick={onClose}
            >
              {/* <ClearRoundedIcon /> */}
              <XMarkIcon className="w-[1.5rem] h-[1.5rem] cursor-pointer hover:text-gray-400 text-green-700" />
            </button>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 4rem",
              border: "",
              margin: "",
            }}
            className="w-full h-full"
          >
            {children}
          </div>

          <div className="flex items-center space-x-4 mt-2 px-2">
            <button className="p-2 bg-slate-300">
              <PhotoIcon
                className="w-[1.5rem] h-[1.5rem] cursor-pointer text-green-700"
                onClick={isToogleFalse}
              />
            </button>

            <button className="p-2 bg-slate-300">
              <PlayIcon
                className="w-[1.5rem] h-[1.5rem] cursor-pointer text-green-700"
                onClick={isToogleTrue}
              />
            </button>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              padding: ".5rem 1.5rem",
              borderTop: "1px solid rgba(0,0,0,0.8)",
            }}
          >
            <div style={{ marginLeft: "auto", marginTop: "30px" }}>
              <button
                style={{
                  border: "none",
                  padding: ".5rem 1.2rem",
                  borderRadius: "1.6rem",
                  border: "1px solid #1350ca",
                  color: "#1350ca",
                  backgroundColor: "white",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                style={{
                  border: "none",
                  padding: ".5rem 1.2rem",
                  borderRadius: "1.6rem",
                  border: "1px solid #1350ca",
                  color: "#1350ca",
                  backgroundColor: "white",
                  fontWeight: "bold",
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
                onClick={onSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
