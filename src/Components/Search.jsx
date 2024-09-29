import { useContext } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../Context/ShopContext"; // Adjust path as necessary

const Search = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  if (!showSearch) return null;

  return (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:1/2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          placeholder="Search"
        />
        <img src={assets.search_icon} className="w-4" alt="" />
        <img
          src={assets.cross_icon}
          className="inline w-3 cursor-pointer"
          onClick={() => setShowSearch(false)}
          alt=""
        />
      </div>
    </div>
  );
};

export default Search;
