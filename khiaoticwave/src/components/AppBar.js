import React from "react";


const AppBar = () => {
  return (
   <nav>
      <ul class="flex rounded-full">
        <li>
          <a class="relative block px-3 py-2" href="#about">Home</a>
          <a class="relative block px-3 py-2" href="#wares">Wares</a>
          <a class="relative block px-3 py-2" href="#gallery">Collab</a>
          <a class="relative block px-3 py-2" href="#blog">Blog</a>
        </li>
      </ul>
      </nav>
  );
};

export default AppBar;
