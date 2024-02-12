import { Button, FloatingLabel, Alert, Toast } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { useState } from "react";
import { DarkThemeToggle } from "flowbite-react";

export const Auth = () => {
  const [user, setUser] = useState({
    name: "",
  });

  const [inputEmpty, setInputEmpty] = useState(false);

  const [status, setStatus] = useState({
    alreadyExist: false,
    createSuccess: false,
  });

  const [toastTimeout, setToastTimeout] = useState(null);

  const handleSubmit = () => {
    if (!Boolean(user.name)) {
      setInputEmpty(true);
    } else {
      setInputEmpty(false);

      setStatus((prev) => ({ ...prev, createSuccess: true }));

      // Fermeture du Toast
      closeToast();

      // Mettre à jour la liste d'utilisateurs dans le localStorage
      localStorage.setItem("user", JSON.stringify(user));

      // Afficher dans la console l'utilsateur
      const storedUser = localStorage.getItem("user");
      const parsedUser = JSON.parse(storedUser);
      console.log(parsedUser);

      // Redirection vers le chat
      window.location = "/chat";
    }
  };

  const closeToast = () => {
    setToastTimeout(
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, alreadyExist: false, createSuccess: false }));
        setToastTimeout(null); // Réinitialiser le timeout après la fermeture du toast
      }, 3000)
    );
  };

  return (
    <>
      <div className="absolute top-0 right-0 bg-gray-50 dark:bg-gray-900 m-3">
        <DarkThemeToggle className="" />
      </div>
      <div className={`flex flex-col gap-2 ${inputEmpty ? "animate-shake" : ""}`}>
        {/* Toasts */}
        <Toast className={`fixed bottom-5 right-5 animate-slideInRight animate ${!status.alreadyExist ? "hidden" : ""}`}>
          <HiInformationCircle className="h-5 w-5 text-red-600 dark:text-red-500" />
          <div className="pl-4 text-sm font-normal">Cet utilisateur existe déjà.</div>
        </Toast>

        <Toast className={`fixed bottom-5 right-5 animate-slideInRight animate ${!status.createSuccess ? "hidden" : ""}`}>
          <HiInformationCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
          <div className="pl-4 text-sm font-normal">L'utilsateur à été créer avec succés !</div>
        </Toast>
        {/* Alert Box */}
        <Alert color="failure" icon={HiInformationCircle} className={`mb-2 text-[12px] ${!inputEmpty ? "hidden" : ""}`}>
          Veuillez indiquer votre nom.
        </Alert>
        {/* Form */}
        <div className="flex flex-col gap-2">
          <FloatingLabel variant="outlined" color={inputEmpty ? "error" : "default"} label="Nom" type="text" onChange={(e) => setUser((prev) => ({ ...prev, name: e.target.value }))} />
          <Button className="font-bold w-full" color="blue" onClick={handleSubmit}>
            Chatez !
          </Button>
        </div>
      </div>
    </>
  );
};
