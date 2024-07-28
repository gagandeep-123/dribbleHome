import { FaHeart } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { useState, useEffect } from "react";

const Card = ({ cardData }) => {
    const [showImageTxt, setShowImageTxt] = useState(false);

    const handleHoverEffect = (show) => {
        if (show) {
            setShowImageTxt(true);
        }
        else setShowImageTxt(false);
    };

    
  return (
    <div className="card-container relative cursor-pointer">
      <img
        src={cardData.image}
        className="rounded-lg"
        onMouseEnter={() => handleHoverEffect(true)}
        onMouseLeave={() => handleHoverEffect(false)}
      ></img>
      {showImageTxt && (
        <div className="absolute left-4 bottom-14 text-white text-lg truncate w-7/12">
          {cardData.imageTxt}
        </div>
      )}
      <div className="mt-2 flex justify-between">
        <div className="left flex">
          <img className="logo"></img>
          <div className="title text-base font-medium">{cardData.title}</div>
          {cardData && cardData.tag.length > 0 && (
            <div className="tag text-xs flex items-center bg-[#ccc] text-white font-bold p-1 rounded-sm ml-2">
              {cardData.tag}
            </div>
          )}
        </div>

        <div className="right flex">
          <div className="likes flex items-center mr-2">
            <FaHeart color="#9e9ea7" />
            <span className="ml-1">{cardData.likes}</span>
          </div>
          <div className="views flex items-center">
            <IoMdEye color="#9e9ea7" />
            <span className="ml-1">{cardData.views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
