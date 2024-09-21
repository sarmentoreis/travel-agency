import { setLocalStorage } from "./localStorage";

const createTravel = (listTravels, setListTravels, travels) => {
  setListTravels((listTravels) => [...listTravels, travels]);
  setLocalStorage(listTravels, travels);
};

export default createTravel;
