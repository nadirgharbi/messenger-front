import { Flowbite, DarkThemeToggle } from "flowbite-react";

export const NavBar = () => {
  return (
    <Flowbite>
      <div className="absolute right-0 bg-gray-50 dark:bg-gray-900 m-3">
      <DarkThemeToggle className="" /> 
      </div>
    </Flowbite>
  );
};
