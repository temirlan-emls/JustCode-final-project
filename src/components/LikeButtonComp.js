import Like from '../assets/like.png';
import LikeFull from '../assets/like3.png';
import React, { useState, useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { useSelector } from 'react-redux';

export default function LikeButtonComp({ item }) {
  const [isLiked, setIsLiked] = useState(false);

  const liked = useSelector((state) => state.liked.liked);

  useEffect(() => {
    if (liked.length) {
      const temp = liked.find((oneItem) => oneItem.title === item.title);
      if (temp) {
        if (temp.title === item.title) {
          setIsLiked(true);
        } else {
          setIsLiked(false);
        }
      } else {
        setIsLiked(false);
      }
    }
  }, [liked, item]);

  const { removeFromLiked, addToLiked } = useActions();
  return (
    <button
      onClick={() => {
        if (isLiked) {
          setIsLiked(false);
          removeFromLiked(item);
        } else {
          setIsLiked(true);
          addToLiked(item);
        }
      }}
    >
      <img
        src={isLiked ? LikeFull : Like}
        alt='like'
        className={`h-8 hover:scale-125 transition-all duration-500 ease-in-out ${
          isLiked ? '' : 'saturate-0 brightness-0'
        }`}
      />
    </button>
  );
}
