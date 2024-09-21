export const setLocalStorage = (listTravels, travels) => {
  localStorage.setItem("@travels", JSON.stringify([...listTravels, travels]));
};

export const getLocalStorage = (id) => {
  const travels = JSON.parse(localStorage.getItem("@travels"));
  if (travels && Array.isArray(travels)) {
    return travels.filter((travel) => travel.id === id)[0];
  }
};
