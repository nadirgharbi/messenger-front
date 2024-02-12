import { Label, TextInput, Sidebar } from "flowbite-react";
import { DarkThemeToggle, Button } from "flowbite-react";
import { useState } from "react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

export const Messenger = () => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const [messages, setMessages] = useState([
    { id: 1, text: "Salut, comment ça va ?", user: "Alice", date: "" },
    { id: 2, text: "Tout va bien, merci !", user: currentUser.name, date: "" },
    { id: 3, text: "On fait quelque chose ce soir ?", user: "Alice", date: "" },
    { id: 4, text: "Pourquoi pas !", user: currentUser.name, date: "" },
    { id: 5, text: "Super idée !", user: currentUser.name, date: "" },
    { id: 6, text: "Quel endroit préférez-vous ?", user: "Alice", date: "" },
    { id: 7, text: "Peut-être au café du coin ?", user: currentUser.name, date: "" },
    { id: 8, text: "Ça marche pour moi !", user: "Alice", date: "" },
    { id: 9, text: "On se retrouve là-bas à 20h ?", user: currentUser.name, date: "" },
    { id: 10, text: "Parfait, à tout à l'heure !", user: "Alice", date: "" },
    { id: 11, text: "Salut tout le monde !", user: currentUser.name, date: "" },
    // Ajoutez d'autres messages selon vos besoins.
  ]);

  if (Object.keys(currentUser).length < 0) {
    window.location = "/";
  } else {
    return (
      <>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 font-mono h-screen">
          {/* Header */}
          <div className="fixed w-full flex justify-between items-center p-3 bg-white dark:bg-gray-900 border-b border-b-gray-500/20 z-[999]">
            <Button color="gray" onClick={() => (window.location = "/")}>
              <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2" />
              </svg>
            </Button>
            <h1 className="font-black text-lg">Content de vous voir {currentUser.name} !</h1>
            <DarkThemeToggle />
          </div>
          {/* Body */}

          <div className="flex">
            {/* Left : Sidebar */}
            <div className="flex border-r border-r-gray-500/20 w-auto">
              <Sidebar aria-label="Default sidebar example" className=""> 
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                      Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiViewBoards} label="Pro" labelColor="dark">
                      Kanban
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiInbox} label="3">
                      Inbox
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser}>
                      Users
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiShoppingBag}>
                      Products
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiArrowSmRight}>
                      Sign In
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiTable}>
                      Sign Up
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </Sidebar>
            </div>
            {/* Middle : Dash board */}
            <div className="flex items-center justify-center border-r border-r-gray-500/20 w-7/12">
              <h1>Dashboard</h1>
            </div>
            {/* Right : Messages */}
            <div className="bg-white dark:bg-gray-900 overflow-auto px-5 h-screen w-3/12">
              <div className="relative py-20 space-y-2">
                {messages.map((message) => (
                  <div className={`flex flex-col ${message.user === "Alice" ? "items-start" : " items-end"}`}>
                    <small>{message.user}</small>
                    <div key={message.id} className={`p-4 rounded-lg ${message.user === "Alice" ? "bg-blue-600 text-white dark:bg-blue-500" : "bg-gray-400 dark:bg-slate-500"}`}>
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-900 flex flex-col p-3 fixed bottom-0 w-full z-[999]">
                <div>
                  <TextInput placeholder="Votre message ..." type="text" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};
