import React from "react";


const AppBar = () => {
  return (
   <nav>
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between max-auto p-4">
    <h1 class="p-4">KHIAOTIC</h1>
      <ul class=" flex rounded-full">
        <li>
          <a class="relative  px-3 py-2" href="#about">Home</a>
          <a class="relative  px-3 py-2" href="#wares">WareHouse</a>
          <a class="relative  px-3 py-2" href="#thePod">ThePod</a>
          <a class="relative  px-3 py-2" href="#portfolio">Portfolio</a>
        </li>
      </ul>
      
      <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Socials<svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
      <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
        <ul class="py-2 text-gray-700">
         <li>
        <a href="#"><img src="" alt="Instagram"></img></a>
          </li> 
         <a href="#"><img src="" alt="TikTok"></img></a>
         <a href="#"><img src="" alt="YouTube"></img></a>
         <a href="#"><img src="" alt="Portfolio"></img></a>
        </ul>
      </div>
      
      </div>
      </nav>
  );
};

export default AppBar;
