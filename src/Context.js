import  { createContext, useState } from "react";

const Context = createContext();

const OwnContext = (props) => {
  const [items, setItems] = useState([
    { id: 1, name: ".Bala" },
    { id: 2, name: ".Manikandan" },
    { id: 3, name: ".Dinesh" },
    { id: 4, name: ".Nandha" },
    { id: 5, name: ".Vijay" },
  ]);

  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (id) => {
    const studentToAdd = items.find((item) => item.id === id);
    if (studentToAdd && !favorites.find((fav) => fav.id === id)) {
      setFavorites([...favorites, studentToAdd]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  return (
    <Context.Provider
      value={{
        items,
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { OwnContext, Context };
