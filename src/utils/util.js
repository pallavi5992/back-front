import { toast } from "react-toastify";
import moment from "moment";
// return the token from the Localstorage
export const getToken = () => {
  return localStorage.getItem("accessToken") || null;
};

// remove the token and user from the Localstorage
export const removeUserSession = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
};

// set the token and user from the Localstorage
export const setUserSession = (token, user) => {
  localStorage.setItem("accessToken", token);
  localStorage.setItem("user", JSON.stringify(user));
};

// Return the user data from the LocalStorage storage
export const getCurrentUserLT = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

export const notify = (message,type) => {
  const option = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  if (type === "success") {
    toast.success(message, option);
  } else if (type === "warn") {
    toast.warn(message, option);
  } else if (type === "error") {
    toast.error(message, option);
  }
};

export const convertPrivatePublicOrag = (value) => {
  if (value == 1) {
    return "Public Sector";
  } else if (value == 0) {
    return "Private Sector";
  }
};


export const dateModify=(date)=>{
  const fullDate=moment(date,["YYYY-MM-DD"]).format("MM/DD/YYYY")
  return fullDate
}