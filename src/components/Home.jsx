import { Tabs } from "flowbite-react";
import { useRef, useState } from "react";
import { Auth } from "./Auth";

export const Home = () => {
  const tabsRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Body */}
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 font-mono flex flex-col gap-10 justify-center items-center h-screen">
        {/* Title */}
        <div className="flex flex-col gap-4 w-1/5">
          <h1 className="font-black text-5xl text-center">
            Welcome to <br /> <span className="px-1 underline decoration-8 decoration-blue-500 ">KN Messenger</span>
          </h1>
          <p className="text-center">Entrez vos informations pour que l'on sache qui vous êtes.</p>
        </div>
        {/* Tabs */}
        <div className="w-3/12">
          <Auth />
        </div>
      </div>
    </>
  );
};
