import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

const ListStudent = () => {
  const { items, addToFavorites } = useContext(Context);
  const [buttonColor, setButtonColor] = useState({});

  const handleAddToFavorites = (itemId) => {
    addToFavorites(itemId);
    setButtonColor({ ...buttonColor, [itemId]: !items.find(item => item.id === itemId).isFavorite ? 'line-through bg-[#8B4513]' : 'bg-[#8B4513]' });
  };

  return (
    <div>
      <div className="flex justify-center gap-5 bg-[#8B4513] p-3 text-white">
        <h1 className="underline">List Of Students</h1>
        <h1 className="hover:underline">
          <Link to={"/favourite"}>Favourite Students</Link>
        </h1>
      </div>
      <div className="p-2 flex flex-col gap-2 ">
        {items.map((item) => (
          <div className="flex gap-8 items-center justify-around" key={item.id}>
            <p className=" w-20">
              {item.id}
              {item.name}
            </p>
            <button
              className={`px-2 py-1 rounded-md text-white ${buttonColor[item.id] || (item.isFavorite ? 'bg-green-500' : 'bg-[#8B4513]')}`}
              onClick={() => handleAddToFavorites(item.id)}
            >
              {item.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListStudent;
