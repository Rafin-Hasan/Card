import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="group relative mt-[200px] max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-500 transform hover:max-w-3xl hover:flex hover:flex-row">
        {/* Image that transitions to a new one on hover */}
        <div
          className="h-80 w-full bg-cover bg-center transition-all duration-500 group-hover:hidden"
          style={{
            backgroundImage: `url('https://images.justwatch.com/poster/258527365/s718/season-1.jpg')`,
          }}
        ></div>

        {/* Hovered Image */}
        <div
          className="h-80 w-full bg-cover bg-center hidden transition-all duration-500 group-hover:block group-hover:w-4/5"
          style={{
            backgroundImage: `url('https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/08/Demon-Slayer.jpg')`,
          }}
        ></div>

        {/* Text Section with Low Opacity Overlay on the right */}
        <div className="absolute top-0 right-0 bottom-0 w-1/5 bg-black bg-opacity-20 flex justify-center items-center transition-all duration-500 group-hover:w-1/5">
          <div className="text-white p-4 hidden group-hover:block">
            <h2 className="text-xl font-bold">Season 1</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
