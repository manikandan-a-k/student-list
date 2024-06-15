import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

const Favourite = () => {
  const { favorites, removeFromFavorites } = useContext(Context);

  return (
    <div className="flex flex-col ">
      <div className="flex justify-center gap-5 bg-[#8B4513] p-3 text-white">
        <Link to={"/"}>
          <h1 className="hover:underline">List Of Students</h1>
        </Link>
        <h1 className="underline">Favourite Students</h1>
      </div>
      <div>
        {favorites.map((fav) => (
          <div key={fav.id} className="flex py-2 gap-8 items-center justify-around">
            <p className=" w-20">
              {fav.id}
              {fav.name}
            </p>
            <button
              className="px-2 py-1 bg-red-500 rounded-md text-white"
              onClick={() => removeFromFavorites(fav.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourite;
