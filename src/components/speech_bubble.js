import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import {TypeAnimation} from 'react-type-animation';

const BubbleChat = (props) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [key, setKey] = useState(0);

  const handleNextClick = () => {
    if (currentMessageIndex < props.messages.length - 1) {
      setCurrentMessageIndex(currentMessageIndex + 1);
      setKey((prevKey) => prevKey + 1);
    } else {
      props.onNext();
    }
  };

  return (
    <div className="flex justify-center items-end w-full relative overflow-hidden">
        <img src={props.img} className="w-72 absolute -right-2 -bottom-8" alt="logo" />
      <div className="bg-white shadow-md ring-1 ring-inset ring-gray-300 text-grey p-8 rounded-2xl mb-16 w-4/5 max-w-5xl">
        <TypeAnimation key={key}
        sequence={[
            props.messages[currentMessageIndex],
            1000
        ]} className='text-2xl' wrapper='p'>{props.messages[currentMessageIndex]}</TypeAnimation>
        {
          <button
            className="bg-purple-300 text-white border-none px-4 py-2 mt-4 cursor-pointer rounded-lg"
            onClick={handleNextClick}
          >
            다음
          </button>
        }
      </div>
    </div>
  );
};

export default BubbleChat;
