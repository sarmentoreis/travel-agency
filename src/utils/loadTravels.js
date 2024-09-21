import { setLocalStorage } from "./localStorage";

const loadTravels = (setListTravels) => {
  const travels = JSON.parse(localStorage.getItem("@travels"));
  if (travels) {
    setListTravels(travels);
  }
};

export default loadTravels;
