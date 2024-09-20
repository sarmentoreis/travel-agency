const setLocalStorage = (listTravels, travels) => {
  localStorage.setItem("@travels", JSON.stringify([...listTravels, travels]));
};

export default setLocalStorage;
