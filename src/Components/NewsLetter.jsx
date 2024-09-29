import React from "react";

const NewsLetter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="font-medium text-2xl text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <form
        className="w-full sm:w-1/2 flex items-center mx-auto my-6 border pl-3"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none"
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
