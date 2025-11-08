import { createContext } from "react";
import { Route } from "react-router-dom";
export const Appcontext = createContext();

const AppcontextProvider = (props) => {

  const currency  = "$"; 

  const calculateAge = (dob) => {
    const Today = new Date();
    const birthDate = new Date(dob);
    let age = Today.getFullYear() - birthDate.getFullYear();
    return age;
  };
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split("_");
    return (
      dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    );
  };

  const value = {
    calculateAge,
    slotDateFormat,
    currency
  };

  return (
    <Appcontext.Provider value={value}>{props.children}</Appcontext.Provider>
  );
};

export default AppcontextProvider;
