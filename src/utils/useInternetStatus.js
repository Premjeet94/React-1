import { useEffect, useState } from "react";

export const useInternetStatus = () => {

  const [onlineStatus, setonlineStatus] = useState(true);

  useEffect(() => {

    window.addEventListener("offline", () => {
      setonlineStatus(false);
    });

    window.addEventListener("online", () => {
      setonlineStatus(true);
    });
    
  }, []);

  return onlineStatus;
};
