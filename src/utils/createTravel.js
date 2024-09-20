import setLocalStorage from "./setLocalStorage";

const createTravel = (listTravels, setListTravels, travels) => {
  setListTravels((listTravels) => [...listTravels, travels]);
  setLocalStorage(listTravels, travels);
};

export default createTravel;
