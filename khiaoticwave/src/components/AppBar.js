import React from "react";


const AppBar = () => {
  return (
   <nav>
      <ul class="flex rounded-full">
        <li>
          <a class="relative block px-3 py-2" href="#about">Home</a>
          <a class="relative block px-3 py-2" href="#wares">WareHouse</a>
          <a class="relative block px-3 py-2" href="#gallery">Collab</a>
          <a class="relative block px-3 py-2" href="#blog">Portfolio</a>
        </li>
      </ul>
      <div>
        <img alt="Instagram"></img>
        <img alt="TikTok"></img>
        <img alt="YouTube"></img>
        <img alt="Portfolio"></img>
      </div>
      </nav>
  );
};

export default AppBar;
